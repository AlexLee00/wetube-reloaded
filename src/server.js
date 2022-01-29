import express from "express";
import morgan from "morgan";
import global from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug"); // 뷰엔진 퍼그 설정
app.set("views", process.cwd() + "/src/views");
app.use(logger); // 라이브러리 logger 설정
app.use(express.urlencoded({ extended: true }));
app.use("/", global);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () =>
  console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
