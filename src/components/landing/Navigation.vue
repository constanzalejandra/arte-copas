<template>
  <v-toolbar class="white">
    <router-link to="/"
      ><img :src="imageLink.logo" alt="Vuetify.js" class="logo"
    /></router-link>

    <v-toolbar-title class="mx-0" v-text="title"></v-toolbar-title>
    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn text to="/copas">Copas</v-btn>

      <v-btn text class="pink lighten-3"
        ><v-icon large color="darken-2"> mdi-cart </v-icon></v-btn
      >
      <v-btn text class="blue lighten-3" to="/login" v-if="!activeLogin">
        <v-icon large color="darken-2"> mdi-account-box </v-icon>
        <small>iniciar sesión</small>
      </v-btn>
      <v-btn text class="blue lighten-3" v-if="activeLogin" @click="logOut">
        <v-icon large color="darken-2"> mdi-logout </v-icon>
        <small>cerrar sesión</small>
      </v-btn>
      <v-btn text class="lighten-3" to="/admin" v-if="user && user.roles.admin">
        <v-icon large color="darken-2"> mdi-shield-account </v-icon>
        <small>admin</small>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "ArteCopas",
  data: function () {
    return {
      title: "Arte Copas",
      imageLink: {
        logo: require("../../assets/img/logo.jpeg"),
      },
    };
  },

  methods: {
    ...mapActions("session", ["signOut"]),
    logOut() {
      this.signOut().then(() => {
        this.$router.push("/");
      });
    },
    redirectHome() {
      this.$router.push("/copas");
    },
  },

  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
  },
};
</script>

<style scoped>
.logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.name-brand {
  margin-left: 10px;
}
</style>
