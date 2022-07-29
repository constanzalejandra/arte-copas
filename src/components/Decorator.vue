<template>
  <div
    class="decorator"
    :class="{ purpleC: purpleColor, successC: successColor }"
  >
    <div class="line"></div>
  </div>
</template>
<script>
export default {
  name: "Decorator",
  data: () => ({}),
  props: ["purpleColor", "successColor"],
};
</script>
<style scoped>
.purpleC {
  background: #673ab7;
}
.successC {
  background: #4caf51;
}
.decorator {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: 3px solid #fff;
  position: relative;
}
.line {
  position: absolute;
  height: 1px;
  background: black;
}
</style>
