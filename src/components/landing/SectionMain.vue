<template>
  <section>
    <v-parallax :src="imageLink.main" height="380">
      <v-layout column align-center justify-center>
        <div class="headline white--text mb-3 text-xs-center">
          Puedes personalizar tus pedidos.
        </div>
        <em>Puedes obtener algo unico e inigualable, contactanos.</em>
        <v-btn class="blue lighten-2 mt-5" dark large to="/copas">
          Ve nuestros productos
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "SectionMain",
  data: function () {
    return {
      imageLink: {
        main: require("../../assets/img/landing/02.webp"),
      },
    };
  },
};
</script>

<style></style>
