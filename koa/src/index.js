// const Koa = require("koa");

import Koa from "koa";
import koaBody from "koa-body";
import cors from "@koa/cors";
import helmet from "koa-helmet";
import statics from "koa-static";
import path from "path";
import router from "./routes";

const app = new Koa();

// 加入安全的请求头配置
app.use(helmet());

app.use(statics(path.join(__dirname, "../public")));

// 注册路由
app.use(router());

app.use(
  cors({
    origin: "*", // 前端地址
    credentials: true,
  })
);

app.use(koaBody());

app.listen(3000);

console.log("server is running on port 3000");
