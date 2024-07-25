<template>
  <div>{{ data }}</div>
  <img :src="data[0].url" alt="data[0].url" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "AsyncComponent",
  async setup() {
    const { data } = await axios.get(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1"
    );
    return { data };
  },
});
</script>
