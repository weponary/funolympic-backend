import express from "express";
import { fixtureController } from ".";
const fixtureRouter = express.Router();

fixtureRouter.post("/", fixtureController.create);
fixtureRouter.get("/", fixtureController.index);
fixtureRouter.get("/admin", fixtureController.getAllFixtureBO);
fixtureRouter.get("/:id", fixtureController.show);

fixtureRouter.patch("/:id", fixtureController.edit);
fixtureRouter.delete("/:id", fixtureController.delete);

export default fixtureRouter;
