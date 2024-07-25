<script setup lang="ts">
import Title from "@/components/title.vue";
defineProps<{ config: any }>();
</script>

<template>
  <div class="content company_info-wrap">
    <Title :title="config.title" :describe="config.describe" :id="config.id" />
    <div class="desc">{{ config.message }}</div>
    <el-button type="primary"> 查看更多</el-button>
  </div>
</template>

<style scoped lang="scss">
.company_info {
  &-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .desc {
      color: #333;
      font-size: 16px;
      line-height: 30px;
      margin-bottom: 20px;
    }
  }
}
</style>
