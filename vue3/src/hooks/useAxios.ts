import axios from "axios";
import { ref } from "vue";

function useAxios(url: string) {
  const data = ref("");
  const loading = ref(false);
  const error = ref(null);

  const getData = () => {
    loading.value = true;

    axios
      .get(url)
      .then((response) => {
        data.value = response.data.message;
      })
      .catch((err) => {
        error.value = err;
      })
      .finally(() => (loading.value = false));
  };

  return {
    data,
    loading,
    error,
    getData, // 返回一个函数，用于手动触发获取数据
  };
}

export default useAxios;
