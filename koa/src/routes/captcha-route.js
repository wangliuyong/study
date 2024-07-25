const Router = require("koa-router");
import svgCaptcha from "../api/svgCaptcha";

const router = new Router();
router.prefix("/api");

router.get("/captcha", svgCaptcha.captcha);

module.exports = router;
