<script setup lang="ts">
import Title from "@/components/title.vue";
defineProps<{ config: any }>();
</script>

<template>
  <div class="content partner-wrap">
    <Title :title="config.title" :describe="config.describe" :id="config.id" />
    <div class="partner-list">
      <div class="img-wrap" v-for="item in config.items" :key="item.cover">
        <img
          alt="item.title"
          :src="item.cover"
          class="groot-ui-image-inner"
          style="width: 100%"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner {
  &-wrap {
  }

  &-list {
    display: flex;
    gap: 0.625em;
    flex-wrap: wrap;
    .img-wrap {
      box-sizing: border-box;
      overflow: hidden;
      width: calc(100% / 5 - 0.625em);

      border-radius: 2px;
      margin-right: 0.0625em;
      border: 1px solid #eee;
      padding: calc(20 * 0.0625em);
    }
  }
}
</style>
