<script setup lang="ts">
import Title from "@/components/title.vue";
defineProps<{ config: any }>();
</script>

<template>
  <Title :title="config.title" :describe="config.describe" :id="config.id" />
  <div class="service_card-list content">
    <div
      class="service_card-item"
      v-for="item in config.items"
      :key="item.title"
    >
      <div class="img-wrap">
        <img :src="item.cover" :alt="item.title" />
      </div>
      <div class="des">{{ item.title }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.service_card {
  &-list {
    width: 1190px;
    display: flex;
    gap: 16px;
    margin: 0 auto;
    flex-wrap: wrap;
  }

  &-item {
    overflow: hidden;
    cursor: pointer;
    width: calc(100% / 4 - 16px);
    border-radius: 4px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.13);
      img {
        transform: scale(1.1);
      }
    }

    .img-wrap {
      overflow: hidden;
      height: 187px;
    }
    img {
      transition: all 0.3s ease-in-out;
      width: 100%;
      transform: scale(1);
    }
    .des {
      display: flex;
      justify-content: center;
      justify-content: center;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      font-size: 18px;
      box-sizing: border-box;
      padding: calc(16 * 0.0625em);
      color: #333;
      border: #f5f5f5 1px solid;
      font-size: 18px;
      word-break: break-word;
      font-weight: 500;
    }
  }
}
</style>
