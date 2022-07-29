import { DB } from "@/plugins/firebase";

export const usersModule = {
  namespaced: true,
  state: {
    loading: false,
    list: [],
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList;
    },
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    async getAll({ commit }) {
      commit("SET_LOADING", true);
      try {
        const users$ = await DB.collection("users").get();
        const users = [];

        users$.forEach((document) => {
          users.push({ ...document.data(), id: document.id });
        });

        commit("SET_LIST", users);
      } catch (e) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para agregar usuario
    async addUser({ commit }, { ...newUser }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("users").add(newUser);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para actualizar usuario
    // es importante entregar el id
    async updateOneById({ commit }, { id, ...newUser }) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("users").doc(id).update(newUser);
      } catch (error) {
        console.error(e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    // metodo para borrar usuario
    // es importante el id para eliminar el registro
    async removeOneById({ commit }, id) {
      commit("SET_LOADING", true);
      try {
        await DB.collection("users").doc(id).delete();
      } catch (e) {
        console.error("Error al borrar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async contact({ commit }, { ...data }) {
      commit("SET_LOADING", true);
      try {
        console.log({ data });
        await DB.collection("contact").add(data);
      } catch (e) {
        console.error("Error al agregar documento: ", id);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
