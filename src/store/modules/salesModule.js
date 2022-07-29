import { DB } from "@/plugins/firebase";

export const salesModule = {
  namespaced: true,
  state: {
    loading: false,
    listSales: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.listSales = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
      /* A module that is used to store the sales data. */
    },
  },
  actions: {
    async getAllSales({ commit }) {
      commit("SET_LOADING", true);
      try {
        const sales$ = await DB.collection("sales").get();
        const sales = [];
        sales$.forEach((document) => {
          sales.push({ ...document.data(), id: document.id });
        });

        commit("SET_LIST", sales);
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async addSale({ commit }, { ...newSale }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("sales").add(newSale);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
