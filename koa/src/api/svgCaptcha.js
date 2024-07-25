import svgCaptcha from "svg-captcha";

class SvgCaptcha {
  constructor() {}
  captcha(ctx) {
    var captcha = svgCaptcha.create();

    ctx.body = {
      code: 200,
      data: captcha.data,
    };
  }
}

export default new SvgCaptcha();
