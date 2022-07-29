<template>
  <div class="container-title">
    <h1 class="font-xl">{{ text }}</h1>
    <v-divider class="divider"></v-divider>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    text: String,
  },
};
</script>

<style scoped>
.container-title {
  text-align: center;
  margin-top: 1em;
}
.font-xl {
  font-size: 3em !important;
  color: #37474f;
}
.divider {
  margin-bottom: 2em;
}
</style>
