import { Repository } from "sequelize-typescript";
import sequelize from "../config/dbSetup";
import Comment from "./Comment";
import CommentService from "./CommentService";
import CommentController from "./CommentController";

const commnetReposaritory = sequelize.getRepository(Comment);
const commnetService = new CommentService(commnetReposaritory);
const commnetController = new CommentController();

export { commnetService, commnetController };
