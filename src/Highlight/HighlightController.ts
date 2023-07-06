import { NextFunction, Request, Response } from "express";
import { hightlightService } from ".";
import { sucess } from "../utils/helper/responseHelper";
class HighlightController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      if (!req.file) {
        throw {
          code: 422,
          message: "Image is required",
        };
      }
      if (req.file) {
        data.video = req.file?.filename;
      }
      const createdNews = await hightlightService.createHighLight(data);
      return res
        .status(200)
        .json(
          sucess("HightLight Created Sucessfully", createdNews, res.statusCode)
        );
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
      const createdNews = await hightlightService.getAllHighlight();
      return res
        .status(200)
        .json(
          sucess("HightLight Listed Sucessfully", createdNews, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const createdNews = await hightlightService.getHighLightById(id);
      return res
        .status(200)
        .json(
          sucess("HightLight Listed Sucessfully", createdNews, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const createdNews = await hightlightService.deleteHighlight(id);
      return res
        .status(200)
        .json(
          sucess("HightLight Deleted Sucessfully", createdNews, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
}
export default HighlightController;
