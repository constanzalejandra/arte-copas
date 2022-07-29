import { DB } from "@/plugins/firebase";

export const cartModule = {
  namespaced: true,
  state: {
    loading: false,
    listCart: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.listCart = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAllCart({ commit }) {
      commit("SET_LOADING", true);
      try {
        const cart$ = await DB.collection("cart").get();
        const cart = [];

        cart$.forEach((document) => {
          cart.push({ ...document.data(), id: document.id });
        });

        commit("SET_LIST", cart);
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para agregar curso
    async addCourse({ commit }, { ...newCart }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("cart").add(newCart);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async updateTransaction({ commit }, { id, ...newCart }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("cart").doc(id).update(newCart);
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async removeOneById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("cart").doc(id).delete();
      } catch (e) {
        console.error("Error al borrar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async reserveProduct({ commit }, { ...newCart }) {
      commit("SET_LOADING", true);
      const c = {
        ...newCart,
        created: new Date(),
        pending: true,
        active: true,
      };
      try {
        await DB.collection("cart").add({ ...c });
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
