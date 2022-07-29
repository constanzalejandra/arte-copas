<template>
  <v-app light>
    <v-content>
      <Navigation />
    </v-content>
    <v-main>
      <div class="padding">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from "@/components/landing/Navigation.vue";
import Submain from "@/components/landing/Submain.vue";
import Details from "@/components/landing/Details.vue";
import SectionMain from "@/components/landing/SectionMain.vue";
import Contact from "@/components/landing/Contact.vue";
import Information from "@/components/landing/Information.vue";

import { mapGetters, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navigation,
    Submain,
    Details,
    SectionMain,
    Contact,
    Information,
  },

  data: function () {
    return {};
  },

  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
  },

  mounted() {
    this.$store.dispatch("session/subscribeToAuthStateChange");
  },
};
</script>
<style scoped>
.logo {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
.name-brand {
  margin-left: 10px;
}
.v-main {
  flex: none;
  /* background: #f1f1f1; */
}
.padding {
  padding: 1em;
  /* height: 100vh; */
}
</style>
