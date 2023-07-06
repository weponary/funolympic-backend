import { NextFunction, Request, Response } from "express";
import { newsService } from ".";
import { sucess } from "../utils/helper/responseHelper";

class NewsController {
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
        data.image = req.file?.filename;
      }
      const createdNews = await newsService.createNews(data);
      return res
        .status(200)
        .json(sucess("News Created Sucessfully", createdNews, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const id = req.params.id;
      const createdNews = await newsService.updateNews(data, id);
      return res
        .status(200)
        .json(sucess("News Updated Sucessfully", createdNews, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllNews = await newsService.getAllNews();
      return res
        .status(200)
        .json(sucess("News Listed Sucessfully", getAllNews, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = req.params.slug;
      const oneNews = await newsService.getOneNews(slug);
      return res
        .status(200)
        .json(sucess("New listed Sucessfully", oneNews, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const oneNews = await newsService.deleteNews(id);
      return res
        .status(200)
        .json(sucess("News Deleted Sucessfully", oneNews, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
}

export default NewsController;
