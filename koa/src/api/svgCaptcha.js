import svgCaptcha from "svg-captcha";

class SvgCaptcha {
  constructor() {}
  text = "";
  captcha(ctx) {
    var captcha = svgCaptcha.create({
      height: 38,
      fontSize: 30,
    });

    console.log(captcha);
    // this.text = captcha.text;
    ctx.body = {
      status: true,
      code: 200,
      data: captcha.data,
    };
  }
}

export default new SvgCaptcha();
