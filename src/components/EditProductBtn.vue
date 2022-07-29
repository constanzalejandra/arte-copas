<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn icon color="info" v-on="on">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title> Editando Producto: {{ title }} </v-card-title>
        <v-card-text>
          <v-text-field
            label="Nombre"
            :rules="[required]"
            v-model="upProduct.name"
          ></v-text-field>
          <v-text-field
            label="Url imagen"
            :rules="[required]"
            v-model="upProduct.src"
          ></v-text-field>
          <v-text-field
            :rules="[required, vRegistrants]"
            label="Ranking"
            v-model="upProduct.rating"
          ></v-text-field>
          <v-text-field
            label="Precio"
            :rules="[required]"
            v-model="upProduct.price"
          ></v-text-field>
          <v-textarea
            :rules="[required]"
            label="Descripcion"
            v-model="upProduct.description"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" type="submit">
            Editar
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
// Crear un componente que permita crear nuevos usuarios (3 Puntos)
import { mapActions } from "vuex";
export default {
  name: "EditProductBtn",
  data: () => ({
    dialog: false,
    modal: false,
    title: "",
    upProduct: {
      name: "",
      src: "",
      rating: 0,
      price: "",
      description: "",
    },
  }),
  props: ["value"],
  mounted() {
    this.upProduct = {
      name: "",
      src: "",
      rating: 0,
      price: "",
      description: "",
    };
  },
  mounted() {
    // shallow copy
    this.upProduct = { ...this.value };
    this.title = this.upProduct.name || this.upProduct.id;
  },
  methods: {
    ...mapActions("products", {
      updateOneById: "updateOneById",
      getAllProducts: "getAllProducts",
    }),
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        this.upProduct.price = Number(this.upProduct.price);
        await this.updateOneById(this.upProduct);
        this.dialog = false;
        await this.getAllProducts();
      }
    },
    vRegistrants(value) {
      const validate = Number(value) <= 5;
      return validate || `El valor debe ser menor o igual a 5`;
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
