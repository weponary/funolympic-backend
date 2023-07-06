import { NextFunction, Request, Response } from "express";
import { liveService } from ".";
import { sucess } from "../utils/helper/responseHelper";
class LiveController {
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
      const createdData = await liveService.createLive(data);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", createdData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async edit(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const id = req.params.id;
      const createdData = await liveService.updateLive(data, id);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", createdData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const createdData = await liveService.getAllLive();
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", createdData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const createdData = await liveService.getOneById(id);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", createdData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const createdData = await liveService.deleteLive(id);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", createdData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
}
export default LiveController;
