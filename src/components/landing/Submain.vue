<template>
  <section>
    <v-parallax :src="imageLink.sub_main" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1
          class="white--text mb-2 display-1 text-xs-center"
          style="font-weight: 900; text-shadow: 3px 2px #000000"
        >
          Adquiere las mejores copas para el mejor dia de tu vida
        </h1>
        <div
          class="white--text subheading mb-3 text-xs-center"
          style="font-weight: 900; text-shadow: 2px 2px #000000"
        >
          puedes encontrar nuestros modelos en el siguiente link
        </div>
        <!-- <v-btn class="blue lighten-2 mt-5" dark large to="/copas">
          Copas
        </v-btn> -->
      </v-layout>
    </v-parallax>
  </section>
</template>

<script>
export default {
  name: "Submain",
  data: function () {
    return {
      imageLink: {
        sub_main: require("../../assets/img/landing/22.jpeg"),
      },
    };
  },
};
</script>

<style></style>
