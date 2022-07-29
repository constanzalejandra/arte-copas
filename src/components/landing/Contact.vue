<template>
  <section>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center class="mt-5 align-center">
          <div class="headline">Estas interesado? Contactanos!</div>
          <br />
          <div>
            Agendemos una reunión o, indicanos lo que necesites para crear lo
            que deseas para tu dia especial.
          </div>
        </v-flex>
        <v-flex xs8 offset-xs2>
          <v-card class="elevation-0 transparent">
            <v-form @submit.prevent="handleFormSubmit" ref="form">
              <v-card-text>
                <v-flex xs12 v-if="!subscribed">
                  <v-text-field
                    filled
                    label="Correo"
                    :rules="emailRules"
                    v-model="contactForm.email"
                    hint="ingresa tu correo!"
                    persistent-hint
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 v-if="!subscribed">
                  <v-text-field
                    filled
                    multi-line
                    v-model="contactForm.observation"
                    :rules="[required]"
                    label="Cuentanos lo que deseas"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 class="text-xs-center" v-if="!subscribed">
                  <v-btn class="blue lighten-2 mb-5" dark large type="submit">Enviar</v-btn>
                </v-flex>
                <v-alert
                v-if="activeMessage"
                  type="success"
                >Hemos recivido tus comentarios</v-alert>
                <v-flex xs12 class="text-xs-center" v-if="subscribed">
                  <v-btn class="green lighten-2 mb-5" dark large
                    >Welcome on board!</v-btn
                  >
                </v-flex>
              </v-card-text>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Contact",
  data: function () {
    return {
      title: "ArteCopas",
      activeMessage: false,
      contactForm: {
        email: "",
        observation: "",
      },
      emailRules: [
        (v) => {
          return !!v || "E-mail is required";
        },
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail must be valid",
      ],
      subscribed: false,
    };
  },
  mounted() {
    this.contactForm = {
      email: "",
      observation: "",
      created: new Date()
    };
  },
  methods: {
    ...mapActions("users", {
      contact: "contact",
    }),
    
    async handleFormSubmit() {
      this.dialog = true;
      if (this.$refs.form.validate()) {
        this.activeMessage = true;
        await this.contact(this.contactForm);
        this.dialog = false;
        this.contactForm = {
          email: "",
          observation: " "
        }
        const id = setTimeout(() => {
          this.activeMessage = false;
          clearTimeout(id)
        }, 4000)
      }
    },
     required(value) {
      return !!value || "Este campo es obligatorio";
    },
  },
};
</script>

<style scoped>
.align-center {
  text-align: center;
}
</style>>
</style>
