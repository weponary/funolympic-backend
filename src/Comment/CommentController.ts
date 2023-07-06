import { NextFunction, Request, Response } from "express";
import { commnetService } from ".";
import { sucess } from "../utils/helper/responseHelper";
class CommentController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  }
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  }
  async index(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (err) {
      next(err);
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const AllData = await commnetService.getCommnetForOneLive(id);
      return res
        .status(200)
        .json(sucess("Live Listed Sucessfully", AllData, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async showBo(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const AllData = await commnetService.getCommentForOneLiveBO(id);
      return res
        .status(200)
        .json(sucess("Live Listed Sucessfully", AllData, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const AllData = await commnetService.deleteComment(id);
      return res
        .status(200)
        .json(sucess("Comment Deleted Sucessfully", AllData, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
}
export default CommentController;
