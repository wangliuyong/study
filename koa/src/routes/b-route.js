const Router = require("koa-router");
const b = require("../api/b");

const router = new Router();
router.prefix("/api");

router.get("/b", b);

module.exports = router;
