const combineRouters = require("koa-combine-routers");

const captchaRoutes = require("./captcha-route");

module.exports = combineRouters(captchaRoutes);
