import { liveService } from "../Live";
import Live from "../Live/Live";
import sequelize from "../config/dbSetup";
import User from "../user/user";
import Comment, { IComment } from "./Comment";
import { Repository } from "sequelize-typescript";
export interface ICommentService {}
class CommentService implements ICommentService {
  private _model: Repository<Comment>;
  constructor(protected model: Repository<Comment>) {
    this._model = model;
  }

  async create(data: IComment, userId: string, liveId: string) {
    await this._model.create({ ...data, userId, liveId });
  }
  async getCommnetForOneLive(liveId: string) {
    const comments = await this._model.findAll({
      where: { liveId },
      include: [sequelize.getRepository(User)],
    });
    const transformedComments = comments.map((comment) => ({
      firstName: comment.user.firstName,
      content: comment.content,
    }));

    return transformedComments;
  }
  async getCommentForOneLiveBO(liveId: string) {
    const comments = await this._model.findAll({
      where: { liveId },
      include: [
        {
          model: sequelize.getRepository(User),
          attributes: ["firstName", "lastName", "email"],
        },
        { model: sequelize.getRepository(Live), attributes: ["title"] },
      ],
    });
    const formattedComments = comments.map((comment) => ({
      id: comment.id,
      title: comment.live.title,
      firstName: comment.user.firstName,
      lastName: comment.user.lastName,
      email: comment.user.email,
      content: comment.content,
      createdAt: comment.createdAt,
    }));

    return formattedComments;
  }
  async deleteComment(id: string) {
    const comment = await this._model.findByPk(id);
    if (!comment) {
      throw {
        code: 404,
        message: "Comment not found",
      };
    }
    return await this._model.destroy({
      where: {
        id,
      },
    });
  }
}
export default CommentService;
