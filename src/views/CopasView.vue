<template>
  <div>
    <div class="container-alert" v-if="!activeLogin">
      <v-alert class="alert" text prominent type="error" icon="mdi-alert">
        Para realizar una reserva de producto, debe iniciar sesión. Una vez
        hecho esto, podra reservar un producto.
      </v-alert>
    </div>
    <Title text="Listado de copas" />
    <div class="container-products">
      <Product
        v-for="(product, index) in listProducts"
        :key="index"
        :id="product.id"
        :name="product.name"
        :description="product.description"
        :srcImage="product.src"
        :rating="product.rating"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import Title from "@/components/ui/Title.vue";
import Product from "@/components/Product.vue";
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "Copas",
  components: { Title, Product },
  created() {
    this.getAllProducts();
  },
  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("products", {
      listProducts: (state) => state.listProducts,
    }),
  },

  methods: {
    ...mapActions("products", {
      getAllProducts: "getAllProducts",
    }),
  },
};
</script>

<style scoped>
.container-products {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: center;
}
.container-alert {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>
