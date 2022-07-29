import Vue from "vue";
import Vuex from "vuex";

import { sessionModule as session } from "./modules/sessionModule.js";
import { usersModule as users } from "./modules/usersModule.js";
import { salesModule as sales } from "./modules/salesModule.js";
import { productsModule as products } from "./modules/productsModule.js";
import { cartModule as cart } from "./modules/cartModule.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cart,
    users,
    sales,
    session,
    products,
  },
});
