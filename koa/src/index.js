const Koa = require("koa");

const koaBody = require("koa-body");
const cors = require("@koa/cors");
const helmet = require("koa-helmet");
const statics = require("koa-static");
const path = require("path");
const router = require("./routes");

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
