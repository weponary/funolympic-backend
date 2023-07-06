import express from "express";
import authRouter from "../auth/authRouter";
import userRouter from "../user/userRouter";
import newsRouter from "../news/newsRouter";
import fixtureRouter from "../Fixture/FixtureRouter";
import highlightRouter from "../Highlight/HighlightRouter";
import liveRouter from "../Live/LiveRouter";
import commentRouter from "../Comment/CommentRouter";

const router = express.Router();

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/news", newsRouter);
router.use("/fixture", fixtureRouter);
router.use("/highlight", highlightRouter);
router.use("/live", liveRouter);
router.use("/comment", commentRouter);

export default router;
