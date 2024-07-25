<script setup lang="ts">
defineProps<{ config: any }>();
</script>

<template>
  <el-carousel trigger="click" height="33.25em">
    <el-carousel-item v-for="item in config" :key="item.url"
      ><div
        data-v-20844251=""
        class="hurdle-carousel-image"
        :style="`background-image: url(${item.url});background-size: 100% 100%`"
      ></div>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
.hurdle-carousel-image {
  height: 33.25em;
  font-size: 1em;
}
</style>
