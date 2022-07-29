<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn elevation="2" v-on="on">Confirmar</v-btn>
    </template>

    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title> Confirmación Venta </v-card-title>
        <div class="padding">
          <p>¿Desea confirmar la reserva seleccionada?</p>
          <v-card-actions>
            <v-btn color="info" type="submit" :disabled="!dialog">
              Confirmar&nbsp;
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Confirm",
  data: () => ({
    dialog: false,
    modal: false,
  }),
  props: {
    product: Object,
  },
  mounted() {},

  methods: {
    ...mapActions("sales", {
      addSale: "addSale",
    }),
    ...mapActions("cart", {
      updateTransaction: "updateTransaction",
      getAllCart: "getAllCart",
    }),
    async handleFormSubmit() {
      this.dialog = true;
      if (this.$refs.form.validate()) {
        console.log(this.product);
        const data = {
          created: new Date(),
          productId: this.product.productId,
          user: this.product.customer,
          price: this.product.price,
        };
        await this.addSale(data);
        const up = {
          ...this.product,
          pending: false,
        };

        await this.updateTransaction(up);
        this.dialog = false;
        await this.getAllCart();
      }
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style scoped>
.padding {
  padding: 1em;
  /* height: 100vh; */
}
</style>
