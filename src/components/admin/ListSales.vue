<template>
  <div>
    <v-data-table :headers="headers" :items="sales" :loading="loading">
      <template v-slot:[`item.price`]="{ item }">
        <v-chip class="ma-2" color="green" label text-color="white">
          <v-icon left> mdi-currency-usd </v-icon>
          {{ item.price }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {},

  created() {
    this.getAllSales();
  },
  data: () => ({
    headers: [
      { text: "Id transacción", value: "id" },
      { text: "Id Producto", value: "productId" },
      { text: "Id Cliente", value: "user" },
      { text: "Precio", value: "price" },
    ],
  }),
  computed: {
    ...mapState("sales", {
      sales: (state) => state.listSales,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("sales", {
      getAllSales: "getAllSales",
    }),
  },
};
</script>

<style scoped>
.header-table {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-end;
  justify-content: flex-end;
  align-items: center;
}
</style>
