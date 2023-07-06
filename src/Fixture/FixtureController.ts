import { NextFunction, Request, Response } from "express";
import { fixtureService } from ".";
import { sucess } from "../utils/helper/responseHelper";
class FixtureController {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const data = req.body;
      const createdData = await fixtureService.createFixture(data);
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
      const updatedData = await fixtureService.editFixture(data, id);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", updatedData, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async index(req: Request, res: Response, next: NextFunction) {
    try {
      const AllData = await fixtureService.getAllFixture();
      return res
        .status(200)
        .json(sucess("Fixture Created Sucessfully", AllData, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async show(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const AllData = await fixtureService.getById(id);
      return res
        .status(200)
        .json(sucess("Fixture Created Sucessfully", AllData, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const deleteDate = await fixtureService.deleteFixture(id);
      return res
        .status(200)
        .json(
          sucess("Fixture Created Sucessfully", deleteDate, res.statusCode)
        );
    } catch (err) {
      next(err);
    }
  }
  async getAllFixtureBO(req: Request, res: Response, next: NextFunction) {
    try {
      const fixture = await fixtureService.getAllFixtureForBo();
      return res
        .status(200)
        .json(sucess("Fixture Listed Sucessfully", fixture, res.statusCode));
    } catch (err) {
      next(err);
    }
  }
}
export default FixtureController;
