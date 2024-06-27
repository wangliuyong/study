<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>x的坐标: {{ x }}</div>
    <div>y的坐标: {{ y }}</div>
  </div>
</template>

<script lang="ts" setup>
import useMouse from "@/hooks/useMouse";
const { x, y } = useMouse();
</script>
