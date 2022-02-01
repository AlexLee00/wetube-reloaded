import express from "express";
import {
  edit,
  logout,
  see,
  startGithubLogin,
  finishGithubLogin,
  // startKakaotalkLogin,
  // finishKakaotalkLogin,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/github/start", startGithubLogin);
userRouter.get("/github/finish", finishGithubLogin);
// userRouter.get("/kakaotalk/start", startKakaotalkLogin);
// userRouter.get("/kakaotalk/finish", finishKakaotalkLogin);
userRouter.get(":id", see);

export default userRouter;
