<script setup lang="ts">
type Props = {
  title: string;
  describe: string;
  id: string;
};

defineProps<Props>();
</script>

<template>
  <div class="i_title-wrap">
    <h1>{{ title }}</h1>
    <p>{{ describe }}</p>
  </div>
</template>

<style scoped>
.i_title-wrap {
  width: 100%;
  h1 {
    text-align: center;
    font-size: 30px;
    margin: calc(16 * 0.0625em) 0 0 0;
    font-weight: 500;
    line-height: 1;
  }

  p {
    font-size: 16px;
    text-align: center;
    margin-top: 0.9375em;
    margin-bottom: calc(30 * 0.0625em);
    color: #999;
  }
}
</style>
