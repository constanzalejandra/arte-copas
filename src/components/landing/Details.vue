<template>
  <section>
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline">Años de experiencia nos avalan</h2>
          <span class="subheading"
            >hemos sido parta en mas de 500 matrimonios en nuestra
            historia</span
          >
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon
                    x-large
                    class="blue--text text--lighten-2 align-center"
                    >mdi-cards-heart</v-icon
                  >
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Hecho con amor</div>
                </v-card-title>
                <v-card-text>
                  Contamos con toda la dedicación y Disposición para entregarte
                  el Mejor producto para que el brindis De tu matrimonio sea
                  inolvidable.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2"
                    >mdi-glass-flute</v-icon
                  >
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Calidad</div>
                </v-card-title>
                <v-card-text>
                  Trabajamos con las mejores copas De cristal italianas que hay
                  en país. Contamos con los mejores productos Parta realizar las
                  copas de tus sueños Todos nuestros productos y materiales Son
                  de calidad premium
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2"
                    >mdi-earth</v-icon
                  >
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Experiencia</div>
                </v-card-title>
                <v-card-text>
                  Nos encargamos de entregarte La mejor experiencia en atención
                  y Entrega de producto, hemos sido Parte de mas de 500
                  matrimonios En Chile y en el extranjero
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>

<script>
export default {
  name: "Details",
};
</script>

<style>
.align-center {
  text-align: center;
}
</style>
