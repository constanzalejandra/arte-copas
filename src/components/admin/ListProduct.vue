<template>
  <div>
    <div class="header-table">
      <AddProduct />
    </div>
    <v-data-table :headers="headers" :items="products" :loading="loading">
      <template v-slot:[`item.src`]="{ item }">
        <v-img height="40" class="radius" width="40" :src="item"></v-img>
      </template>
      <template v-slot:[`item.details`]="{ item }">
        <v-btn icon color="error" @click="removeProduct(item.id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
        <EditProductBtn :value="item" />
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import AddProduct from "@/components/AddProduct.vue";
import EditProductBtn from "@/components/EditProductBtn.vue";

export default {
  components: { AddProduct, EditProductBtn },

  created() {
    this.getAllProducts();
  },
  data: () => ({
    headers: [
      { text: "#", value: "id" },
      { text: "Producto", value: "src" },
      { text: "Nombre", value: "name" },
      { text: "Descripción", value: "description" },
      { text: "Ranking", value: "rating" },
      { text: "Precio", value: "price" },
      { text: "", value: "details" },
    ],
  }),
  computed: {
    ...mapState("products", {
      products: (state) => state.listProducts,
      loading: (state) => state.loading,
    }),
  },
  methods: {
    ...mapActions("products", {
      getAllProducts: "getAllProducts",
      removeOneById: "removeOneById",
      updateOneById: "updateOneById",
    }),

    async removeProduct(productId) {
      await this.removeOneById(productId);
      await this.getAllProducts();
    },
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
.radius {
  border-radius: 50%;
  border: 1px solid;
}
</style>
