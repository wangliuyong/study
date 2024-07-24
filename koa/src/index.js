const Koa = require("koa");
const app = new Koa();
const koaBody = require("koa-body");
const cors = require("@koa/cors");

const router = require("./routes");

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
