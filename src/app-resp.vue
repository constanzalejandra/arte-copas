<template>
  <v-app>
    <v-app-bar app color="primary">
      <div class="d-flex align-center" style="cursor: pointer">
        <img src="./assets/img/logo.jpeg" alt="logo" class="logo" />
        <span class="name-brand">Cursos AlfaWeb</span>
      </div>
      <v-spacer></v-spacer>
      <SignOutBtn v-if="activeLogin" />
      <small
        >Usuario conectado::&nbsp;
        <strong v-if="activeLogin">{{ user.email }}</strong>
        <strong v-if="!activeLogin">sin conexión</strong>
      </small>
      <v-spacer></v-spacer>
      <div v-if="activeLogin">
        <v-btn text to="/"> cursos </v-btn>
        <v-btn text to="/admin"> administracion </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SignOutBtn from "@/components/SignOutBtn.vue";

import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: { SignOutBtn },
  data: () => ({}),

  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
  },

  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
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
