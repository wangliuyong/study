export const APP_KEY = Symbol("APP_KEY");

import air from "@/assets/images/air2.jpg";
import fba from "@/assets/images/FBA.jpg";
import fcl3 from "@/assets/images/fcl3.jpg";
import owh2 from "@/assets/images/owh2.jpg";
import package_ from "@/assets/images/package.jpg";
import package4 from "@/assets/images/package4.jpg";

export const config = {
  // 头部配置
  header: {
    logo: "https://jmy-pic.baidu.com/0/pic/364490799_-1647483170.jpg", // 尺寸：290 * 48
    buttons: [
      { title: "首页", id: "index", url: "" },
      { title: "公司业务", id: "公司业务", url: "" },
      {
        title: "物流追踪",
        id: "物流追踪",
        url: "http://120.79.45.105/#/order-track",
      },
      { title: "公司简介", id: "公司简介", url: "" },
    ],
  },
  // 底部配置
  footer: {
    buttons: [
      { title: "首页", id: "index", url: "" },
      { title: "公司业务", id: "公司业务", url: "" },
      {
        title: "物流追踪",
        id: "物流追踪",
        url: "http://120.79.45.105/#/order-track",
      },
      { title: "公司简介", id: "公司简介", url: "" },
    ],
  },
  // 轮播图
  slide: [
    {
      title: "1",
      id: "1",
      url: "https://jmy-pic.baidu.com/0/pic/1201831564_-2053079757_-442016801.jpg",
    },
    {
      title: "2",
      id: "2",
      url: "https://jmy-pic.baidu.com/0/pic/-1614552249_-1010041370_1790563599.jpg",
    },
    {
      title: "3",
      id: "3",
      url: "https://jmy-pic.baidu.com/0/pic/1318907792_1723014872.jpg",
    },
  ],
  // 公司业务
  services: {
    id: "services",
    title: "公司业务",
    describe: "为商品无障碍流通不懈努力！",
    items: [
      {
        title: "中东FBA/FBN专线",
        cover: fba,
        url: "",
      },
      {
        title: "空运/海运门到门",
        cover: air,
        url: "",
      },
      {
        title: "海外仓",
        cover: owh2,
        url: "",
      },
      {
        title: "海运整体柜清仓",
        cover: fcl3,
        url: "",
      },
      {
        title: "Saber证书",
        cover: package_,
        url: "",
      },
      {
        title: "B2C小包",
        cover: package4,
        url: "",
      },
    ],
  },
  // 合作伙伴
  partner: {
    id: "partner",
    title: "合作伙伴",
    describe: "你可以及时了解公司以及公司产品的相关动态！",
    items: [
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "noon",
        cover: "https://jmy-pic.baidu.com/0/pic/-208598566_757827758.png",
        url: "",
      },
      {
        title: "noon",
        cover: "https://jmy-pic.baidu.com/0/pic/-208598566_757827758.png",
        url: "",
      },
      {
        title: "noon",
        cover: "https://jmy-pic.baidu.com/0/pic/-208598566_757827758.png",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
      {
        title: "亚马逊",
        cover: "https://jmy-pic.baidu.com/0/pic/-949803988_-1513211321.jpg",
        url: "",
      },
    ],
  },
  // 公司信息
  companyInfo: {
    id: "companyInfo",
    title: "公司信息",
    describe: "客户第一，服务至上！",
    message:
      "  xxxx物流，创始团队拥有十余年中东跨境物流管理经验，原阿里资深产品专家领衔提供技术支持，坚持用科技赋能物流，通过自主研发的数字化管理系统，依托大数据智能解析，实现高危订单拦截，物流路由动态切换，实时跨境回款等增值服务，整合链路优质资源，自营清关渠道，自建中东海外仓，自有本土派送团队，致力干跨境中东的头程物流、进口清关、海处仓、本地配送等全链路服务，为中东跨境商家提供稳定、高效的物流体验，赋能商家掘金中东。",
    address: "广东省广州市广州市白云区石槎路穗新创意园2号楼601",
    qq: "1355498705",
    weixin: "1355498705",
    weixinQr: "https://fleetan.com/static/img/wx.df00749.jpg",
    phone: "0558-5498705",
    mobile: "1355498705 王白菜",
    email: "1355498705@qq.com",
  },
};
