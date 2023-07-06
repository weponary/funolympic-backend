import express from "express";
import { highlightController } from ".";
import { uploadLocal } from "../config/multerConfig";
const highlightRouter = express.Router();

highlightRouter.post(
  "/",
  uploadLocal().single("video"),
  highlightController.create
);
highlightRouter.get("/", highlightController.index);
highlightRouter.get("/:id", highlightController.show);
highlightRouter.patch("/:id", highlightController.edit);
highlightRouter.delete("/:id", highlightController.delete);

export default highlightRouter;
