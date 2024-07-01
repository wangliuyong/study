const Koa = require("koa"); 
const Router = require("koa-router");

const KoaBody = require('koa-body'); 

const KoaCors = require("@koa/cors");



console.log(KoaBody);



const app = new Koa();
const router = new Router();

 
app.use(KoaCors());   
app.use(KoaBody());

router.get("/", async (ctx) => {
	ctx.body = JSON.stringify(ctx); 
});

app.use(async (ctx) => {
  ctx.body = JSON.stringify(ctx);  
});




app.use(router.routes())
// 自动丰富 response 相应头，当未设置响应状态(status)的时候自动设置，在所有路由中间件最后设置(全局，推荐)，也可以设置具体某一个路由（局部），例如：router.get('/index', router.allowedMethods()); 这相当于当访问 /index 时才设置

app.use(router.allowedMethods());

app.listen(3000);

console.log("Server running at http://localhost:3000/")
  