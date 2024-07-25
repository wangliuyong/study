<script setup lang="ts">
import { provide, reactive } from "vue";
import Layout from "@/components/layout/index.vue";
import { APP_KEY, config } from "@/config";

const appConfig = reactive<any>(config);

provide(APP_KEY, appConfig);
</script>

<template>
  <Layout> <router-view /> </Layout>
</template>

<style scoped></style>
