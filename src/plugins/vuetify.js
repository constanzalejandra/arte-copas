import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#e9e8e7", // #E53935
        secondary: "#c696b0",
      },
    },
  },
});
