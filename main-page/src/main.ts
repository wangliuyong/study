import { createApp } from "vue";
import "@/assets/style/index.scss";
import layui from "layui";
import "layui/dist/css/layui.css";

import App from "./App.vue";
import router from "@/router/index";

createApp(App).use(layui).use(router).mount("#app");
