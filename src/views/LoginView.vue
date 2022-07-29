<template>
  <div class="login">
    <h1>Login de Usuario</h1>

    <v-form @submit.prevent="handleSignInFormSubmit" ref="signInFormRef">
      <v-card-title> Inicia sesión con tus credenciales </v-card-title>
      <v-card-text>
        <v-text-field
          type="email"
          label="Correo electrónico"
          outlined
          v-model="credentials.email"
          :rules="[required, mustBeEmail]"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Contraseña"
          outlined
          v-model="credentials.password"
          :rules="[required, minLength(6)]"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" type="submit"> Iniciar </v-btn>
        <v-btn color="warning" to="/register"> Crear cuenta</v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {},
  created() {},
  data: () => ({
    dialog: false,
    credentials: {
      email: "",
      password: "",
    },
  }),
  computed: {},
  methods: {
    ...mapActions("session", ["signInWithEmailAndPassword"]),
    async handleSignInFormSubmit() {
      if (this.$refs.signInFormRef.validate()) {
        this.signInWithEmailAndPassword(this.credentials)
          .then(() => {
            this.$router.push("/copas");
          })
          .catch((e) => {
            console.error(e);
            this.$router.push("/register");
          });
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
    mustBeEmail(value) {
      return (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
        "El campo debe ser un email"
      );
    },
    minLength(length) {
      return (value) =>
        String(value).length >= length ||
        `El campo no tiene el minimo de ${length} carácteres`;
    },
  },
};
</script>

<style scoped>
.login {
  padding: 3em;
}
</style>
