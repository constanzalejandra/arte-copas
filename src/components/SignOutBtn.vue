<template>
  <v-btn text @click="logOut"> Cerrar sesión </v-btn>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("session", ["signOut"]),
    logOut() {
      this.signOut().then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
