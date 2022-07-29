<template>
  <div>
    <section>
      <v-parallax :src="imageLink.social_cover" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">
            <h3>Encuentranos en nuestras redes!</h3>
          </div>
        </v-layout>
        <v-layout justify-space-around justify-center>
          <a
            target="_blank"
            class="linkSocial"
            href="https://www.facebook.com/artecopasnovios"
            ><v-icon class="icon" x-large dark>mdi-facebook</v-icon></a
          >
          <a
            target="_blank"
            class="linkSocial"
            href="https://www.instagram.com/artecopas.paranovios/"
            ><v-icon class="icon" x-large dark>mdi-instagram</v-icon></a
          >
          <a class="linkSocial" href="mailto:contanzareyesgallardo@gmail.com"
            ><v-icon class="icon" x-large dark>mdi-email</v-icon></a
          >
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">ArteCopas©</div>
              </v-card-title>
              <v-card-text>
                Las encinas, parcela 27. Cartagena, Región de Valparaiso.
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  name: "Information",
  data: function () {
    return {
      imageLink: {
        social_cover: require("../../assets/img/landing/01.webp"),
      },
    };
  },
};
</script>

<style scoped>
.linkSocial {
  text-decoration: none;
}
.icon:hover {
  color: #f48fb1;
}
</style>
