<template>
  <div>
    <Title text="Administración" v-if="user && user.roles.admin" />
    <div class="menu" v-if="user && user.roles.admin">
      <v-btn text class="btn" elevation="2" to="/admin/products">
        <v-img height="25" width="25" src="../assets/icons/product.png"></v-img>
        &nbsp;Productos
      </v-btn>
      <v-btn text class="btn" elevation="2" to="/admin/sales"
        ><v-img height="25" width="25" src="../assets/icons/coupon.png"></v-img
        >&nbsp;Ventas
      </v-btn>
      <v-btn text class="btn" elevation="2" to="/admin/cart"
        ><v-img
          height="25"
          width="25"
          src="../assets/icons/shopping-cart.png"
        ></v-img
        >&nbsp;Carrito
      </v-btn>
    </div>
    <v-main>
      <div class="padding">
        <div class="container-alert">
          <v-alert
            icon="mdi-shield-lock-outline"
            class="alert"
            prominent
            text
            type="red"
            v-if="user && user.roles.customer"
          >
            <small><b>RUTA PROTEGIDA</b></small>
          </v-alert>
          <!-- vamos -->
          <v-alert
            v-if="user && user.roles.admin"
            icon="mdi-shield-lock-outline"
            class="alert"
            prominent
            text
            type="info"
          >
            Seleccione un menu para comenzar a gestionar. <br />
            <small><b>RUTA PROTEGIDA</b></small>
          </v-alert>
        </div>
        <div v-if="user && user.roles.admin">
          <router-view />
        </div>
      </div>
    </v-main>
  </div>
</template>

<script>
import Title from "@/components/ui/Title.vue";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: { Title },
  computed: {
    ...mapGetters("session", ["activeLogin"]),
    ...mapState("session", ["user"]),
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.btn {
  margin: 3px;
}
.padding {
  padding: 4em;
  /* height: 100vh; */
}
.container-alert {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.alert {
  text-align: center;
}
</style>
