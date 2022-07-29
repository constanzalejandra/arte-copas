<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn color="deep-purple lighten-2" text v-on="on"> Reservar </v-btn>
    </template>

    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title> Reservación {{ title }} </v-card-title>
        <v-card-text>
          <v-textarea
            :rules="[required]"
            label="Ingresa los detalles que quieres en tu producto"
            v-model="newReserve.observation"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" type="submit">
            Reservar
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "AddReserve",
  data: () => ({
    dialog: false,
    modal: false,
    newReserve: {
      observation: "",
      created: new Date(),
    },
    userSession: null,
    selected: null,
  }),
  props: {
    id: String,
    title: String,
    price: String,
  },
  mounted() {
    this.newReserve = {
      observation: "",
    };
    this.userSession = this.user;
    this.selected = this.productSelected;
  },
  computed: {
    ...mapState("session", {
      user: (state) => state.user,
    }),
    ...mapState("products", {
      productSelected: (state) => state.productSelected,
    }),
  },
  methods: {
    ...mapActions("cart", {
      reserveProduct: "reserveProduct",
    }),
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        const u = this.userSession.email;
        const data = {
          productId: this.id,
          customer: u,
          price: this.price,
          observation: this.newReserve.observation,
        };
        await this.reserveProduct(data);
        this.dialog = false;
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
