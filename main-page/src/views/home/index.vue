<script setup lang="ts">
import Slide from "./components/slide.vue";
import Service from "./components/service.vue";
import CompanyInfo from "./components/company-info.vue";
import Partner from "./components/partner.vue";
import Contact from "./components/contact.vue";
import { APP_KEY } from "@/config";
import { inject } from "vue";

const appConfig = inject<any>(APP_KEY);
</script>

<template>
  <!-- 轮播图 -->
  <Slide :config="appConfig.slide" />
  <!-- 公司业务 -->
  <Service :config="appConfig.services" />
  <div class="margin-top25"></div>
  <!-- 公司简介 -->
  <CompanyInfo :config="appConfig.companyInfo" />
  <div class="margin-top25"></div>
  <Partner :config="appConfig.partner" />
  <div class="margin-top25"></div>
  <Contact :config="appConfig.companyInfo" />
</template>

<style scoped lang="scss">
.margin-top25 {
  height: 2.5em;
}
</style>
