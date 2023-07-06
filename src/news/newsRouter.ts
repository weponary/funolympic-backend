import express from "express";
import { newsController } from ".";
import { uploadLocal } from "../config/multerConfig";

const newsRouter = express.Router();

newsRouter.post("/", uploadLocal().single("image"), newsController.create);
newsRouter.get("/:slug", newsController.show);
newsRouter.get("/", newsController.index);
newsRouter.patch("/:id", newsController.edit);
newsRouter.delete("/:id", newsController.delete);

export default newsRouter;
