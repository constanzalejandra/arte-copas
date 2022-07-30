<template>
  <v-dialog width="500" v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn icon color="info" v-on="on">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-form @submit.prevent="handleFormSubmit" ref="form">
        <v-card-title> Agregar Producto </v-card-title>
        <v-card-text>
          <v-text-field
            label="Nombre"
            :rules="[required]"
            v-model="newProduct.name"
          ></v-text-field>
          <v-text-field
            label="Url imagen"
            :rules="[required]"
            v-model="newProduct.src"
          ></v-text-field>
          <v-text-field
            :rules="[required, vRegistrants]"
            label="Ranking"
            type="number"
            v-model="newProduct.rating"
          ></v-text-field>
          <v-text-field
            label="Precio"
            :rules="[required]"
            v-model="newProduct.price"
          ></v-text-field>
          <v-textarea
            :rules="[required]"
            label="Descripcion"
            v-model="newProduct.description"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-btn color="info" type="submit">
            Crear
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddProduct",
  data: () => ({
    dialog: false,
    modal: false,
    newProduct: {
      name: "",
      src: "",
      description: "",
      rating: 0,
      price: "0",
      created: new Date("now"),
    },
  }),
  mounted() {
    this.newProduct = {
      name: "",
      src: "",
      rating: 0,
      price: "",
      description: "",
    };
  },
  methods: {
    ...mapActions("products", {
      addProduct: "addProduct",
      getAllProducts: "getAllProducts",
    }),
    async handleFormSubmit() {
      if (this.$refs.form.validate()) {
        this.newProduct.rating = Number(this.newProduct.rating);
        await this.addProduct(this.newProduct);
        this.newProduct = {
          name: "",
          src: "",
          rating: 0,
          price: "",
          description: "",
        };
        this.dialog = false;
        await this.getAllProducts();
      }
    },
    vRegistrants(value) {
      const validate = Number(value) <= 5;
      return validate || `El valor debe ser menor o igual a 5`;
    },
    minLength(length) {
      return (value) =>
        String(value).length >= length ||
        `El campo no tiene el minimo de ${length} carácteres`;
    },
    required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style></style>
