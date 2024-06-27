<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div>x的坐标: {{ x }}</div>
    <div>y的坐标: {{ y }}</div>

    <div v-if="loading">loading....</div>
    <img v-else :src="(data as string)" alt="data" srcset="" @click="getData" />
  </div>
  <Suspense>
    <template #default>
      <AsyncComponent />
    </template>

    <template #fallback>
      <div>loading....</div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import AsyncComponent from "@/components/AsyncComponent.vue";
import useMouse from "@/hooks/useMouse";
import useAxios from "@/hooks/useAxios";
const { x, y } = useMouse();
const { loading, data, getData } = useAxios<string>(
  "https://dog.ceo/api/breeds/image/random"
);

getData();
</script>
