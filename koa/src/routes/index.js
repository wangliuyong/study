const combineRouters = require("koa-combine-routers");

const aRoutes = require("./a-route");
const bRoutes = require("./b-route");

module.exports = combineRouters(aRoutes, bRoutes);
