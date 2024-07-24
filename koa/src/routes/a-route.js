const Router = require("koa-router");
const a = require("../api/a");

const router = new Router();
router.prefix("/api");

router.get("/a", a);

module.exports = router;
