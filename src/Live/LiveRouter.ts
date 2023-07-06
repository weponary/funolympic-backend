import express from "express";
import { liveController } from ".";
import { uploadLocal } from "../config/multerConfig";
const liveRouter = express.Router();

liveRouter.post("/", uploadLocal().single("image"), liveController.create);
liveRouter.get("/", liveController.index);
liveRouter.get("/:id", liveController.show);
liveRouter.patch("/:id", liveController.edit);
liveRouter.delete("/:id", liveController.delete);

export default liveRouter;
