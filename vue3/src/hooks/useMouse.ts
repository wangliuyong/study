import { ref, onMounted, onUnmounted } from "vue";

function useMouse() {
  const x = ref(0);
  const y = ref(0);

  const handleMouse = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };

  onMounted(() => {
    document.addEventListener("click", handleMouse);
  });
  onUnmounted(() => {
    document.removeEventListener("click", handleMouse);
  });

  // 监听鼠标移动事件
  return { x, y };
}

export default useMouse;
