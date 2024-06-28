const Koa = require("koa");

const app = new Koa();

app.use(async (ctx) => {
    console.log(ctx);

  ctx.body = JSON.stringify(ctx);
});

app.listen(3000);

console.log("Server running at http://localhost:3000/")
  