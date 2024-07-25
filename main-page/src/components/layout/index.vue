<script setup lang="ts">
import Header from "./header.vue";
import Footer from "./footer.vue";
</script>

<template>
  <Header />
  <div class="container">
    <slot></slot>
  </div>

  <Footer />
</template>

<style scoped lang="scss">
.container {
  max-width: 88.75em;
  margin: 0 auto;
}
</style>
