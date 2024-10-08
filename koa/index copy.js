const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const koaBody = require("koa-body");
const cors = require("@koa/cors");

const router = new Router();

// 注册路由
app.use(router.routes());
// 自动丰富 response 相应头，当未设置响应状态(status)的时候自动设置，在所有路由中间件最后设置(全局，推荐)，也可以设置具体某一个路由（局部），例如：router.get('/index', router.allowedMethods()); 这相当于当访问 /index 时才设置
app.use(router.allowedMethods());

app.use(
  cors({
    origin: "*", // 前端地址
    credentials: true,
  })
);

app.use(koaBody());

router.prefix("/api");

// app.use((ctx,next) => {
//   console.log(1111)
//   next()
// })

router.get("/", (ctx) => {
  ctx.body = "你好，测不准";
});

router.post("/post", koaBody(), (ctx) => {
  console.log(222);
  console.log(ctx.request.body);
  ctx.body = JSON.stringify(ctx.request.body);
});

router.post("/user", koaBody(), (ctx) => {
  console.log(3333);

  const { name, email } = ctx.request.body;
  const { admin } = ctx.request.header;

  if (!admin) {
    ctx.status = 401;
    ctx.body = "未授权";
    return;
  }
  if (name || email) {
    ctx.body = JSON.stringify(ctx.request.body);
    return;
  } else {
    ctx.status = 403;
    ctx.body = "name or email is required";
    return;
  }
});

// logger

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

// response

app.use(async (ctx) => {
  ctx.body = "Hello World";
});

app.listen(3000);
