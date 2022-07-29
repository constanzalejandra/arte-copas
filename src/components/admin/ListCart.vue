<template>
  <div>
    <v-data-table :headers="headers" :items="sales" :loading="loading">
      <template v-slot:[`item.price`]="{ item }">
        <v-chip class="ma-2" label>
          <v-icon left> mdi-currency-usd </v-icon>
          {{ item.price || "0" }}
        </v-chip>
      </template>
      <template v-slot:[`item.pending`]="{ item }">
        <v-chip
          class="ma-2"
          :color="item.pending ? 'secondary' : 'green'"
          :text-color="item.pending ? '' : 'white'"
        >
          {{ item.pending ? "Pendiente" : "Confirmado" }}
        </v-chip>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <Confirm :product="item" v-if="item.pending" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Confirm from "@/components/modals/Confirm.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "ListCart",
  components: { Confirm },
  created() {
    this.getAllCart();
  },
  data: () => ({
    headers: [
      { text: "Id reserva", value: "id" },
      { text: "Observaciones", value: "observation" },
      { text: "Id Producto", value: "productId" },
      { text: "Cliente", value: "customer" },
      { text: "Precio", value: "price" },
      { text: "Pendiente", value: "pending" },
      { text: "Confirmar venta", value: "actions" },
    ],
  }),
  computed: {
    ...mapState("cart", {
      sales: (state) => state.listCart,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("cart", {
      getAllCart: "getAllCart",
    }),
  },
};
</script>

<style scoped></style>
