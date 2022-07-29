import Firebase from "firebase";
import { DB } from "@/plugins/firebase";
export const sessionModule = {
  namespaced: true,
  state: {
    user: null,
    loading: false,
  },
  getters: {
    activeLogin(state) {
      return !!state.user;
    },
  },
  mutations: {
    // actualiza el estado del usuario
    SET_USER(state, newUser) {
      state.user = newUser;
    },
    // actualiza el estado del loading
    SET_LOADING(state, newLoading) {
      state.loading = newLoading;
    },
  },
  actions: {
    // mientras tenga la "sesión" aciva, se llamara a la mutación SET_USER
    async subscribeToAuthStateChange({ commit }) {
      Firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          const u = await DB.collection(`users`).doc(user.email).get();
          commit("SET_USER", u.data());
        }
      });
    },
    // metodo para loguear
    //Usar Firebase Authentication para integrar un sistema de usuarios (1 Punto)
    async signInWithEmailAndPassword({ commit }, credentials) {
      // cuando se ejecuta el loading cambia a true y podemos mostrar algo de momento
      commit("SET_LOADING", true);
      try {
        // login exitoso
        await Firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password
        );
      } catch (e) {
        // error login
        console.error("Error en el login", e);
      } finally {
        // cuando finalice el evento ya sea exitoso o fallido, dejamos en false
        // el loading para dejar de mostrar un "cargando"
        commit("SET_LOADING", false);
      }
    },
    // metodo para crear usuario
    async createUserWithEmailAndPassword({ commit }, newUser) {
      commit("SET_LOADING", true);

      try {
        await Firebase.auth().createUserWithEmailAndPassword(
          newUser.email,
          newUser.password
        );

        await Firebase.firestore()
          .collection("users")
          .doc(newUser.email)
          .set({
            name: "",
            lastName: "",
            birthDate: "",
            phoneNumber: "",
            roles: {
              admin: false,
              customer: true,
            },
          });
      } catch (error) {
        console.error(error);
      } finally {
        commit("SET_LOADING", false);
      }
    },
    async signOut({ commit }) {
      commit("SET_LOADING", true);
      try {
        await Firebase.auth().signOut();
      } catch (e) {
        console.error("Error al cerrar la sesión", e);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
