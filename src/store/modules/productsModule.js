import { DB } from "@/plugins/firebase";

export const productsModule = {
  namespaced: true,
  state: {
    loading: false,
    listProducts: [],
    productSelected: null,
  },
  getters: {
    productIdSelected(state) {
      return !!state.productSelected;
    },
  },
  mutations: {
    SET_LIST(state, newList) {
      state.listProducts = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
    SET_PRODUCT(state, product) {
      state.productSelected = product;
    },
  },
  actions: {
    async getAllProducts({ commit }) {
      commit("SET_LOADING", true);
      try {
        const products$ = await DB.collection("products").get();
        const products = [];

        products$.forEach((document) => {
          products.push({ ...document.data(), id: document.id });
        });

        commit("SET_LIST", products);
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para agregar curso
    async addProduct({ commit }, { ...newProduct }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("products").add(newProduct);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async selectedProduct({ commit }, product) {
      commit("SET_PRODUCT", product);
    },
    // metodo para actualizar curso
    // es importante entregar el id
    async updateOneById({ commit }, { id, ...newProduct }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("products").doc(id).update(newProduct);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para borrar curso
    // es importante el id para eliminar el registro
    async removeOneById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("products").doc(id).delete();
      } catch (e) {
        console.error("Error al borrar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
