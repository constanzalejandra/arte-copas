<template>
  <v-card :loading="loading" max-width="300" class="product">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" :src="srcImage"></v-img>

    <v-card-title>{{ name }}</v-card-title>

    <v-card-text>
      <v-row align="center" class="mx-0">
        <v-rating
          :value="rating"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">({{ rating }}) ❤️</div>
      </v-row>

      <div class="my-4 text-subtitle-1">
        <strong>${{ price || "0" }}</strong>
      </div>

      <div>
        {{ description }}
      </div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Opciones disponibles</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>brillantes swarovski</v-chip>
        <v-chip>grabadas</v-chip>
        <v-chip>personalizada</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions v-if="activeLogin && user.roles.customer">
      <AddReserve :title="name" :price="price" :id="id" />
    </v-card-actions>
  </v-card>
</template>

<script>
import AddReserve from "@/components/AddReserve.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "Product",
  components: { AddReserve },
  props: {
    id: String,
    name: String,
    description: String,
    srcImage: String,
    price: String,
    rating: Number,
  },
  mounted() {
    this.userSession = this.user;
  },
  data: () => ({
    loading: false,
    selection: 1,
    userSession: null,
  }),
  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
    ...mapState("products", {
      products: (state) => state.listProducts,
    }),
  },
  methods: {},
};
</script>

<style scoped>
.product {
  margin-top: 20px;
}
</style>
