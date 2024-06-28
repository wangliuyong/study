const Koa = require("koa"); 
const Router = require("koa-router");


const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
	ctx.body = JSON.stringify(ctx); 
 
});

app.use(async (ctx) => {
  ctx.body = JSON.stringify(ctx);  
});

// allowedMethods 未匹配到的处理
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);

console.log("Server running at http://localhost:3000/")
  