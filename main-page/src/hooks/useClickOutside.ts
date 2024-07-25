import { ref, onMounted, onUnmounted, Ref } from "vue";

function useClickOutside(ele: Ref<null | HTMLElement>) {
  const isOutside = ref(false);

  const handleMouse = (e: MouseEvent) => {
    if (
      ele.value &&
      !(ele.value as HTMLElement).contains(e.target as HTMLElement)
    ) {
      isOutside.value = true;
    } else {
      isOutside.value = false;
    }
  };

  onMounted(() => {
    document.addEventListener("click", handleMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleMouse);
  });

  return { isOutside };
}

export default useClickOutside;
