import express from "express";
import { commnetController } from ".";
const commentRouter = express.Router();

commentRouter.get("/:id", commnetController.show);
commentRouter.get("/admin/:id", commnetController.showBo);
commentRouter.delete("/:id", commnetController.delete);

export default commentRouter;
