import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/shop.js'
import cart from "./cart.js";
import product from "./product.js";


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    cart,
    product
  },

  state: {
    checkoutError: false,
  },

  mutations: {

    setCheckoutError(state, error) {
      state.checkoutError = error;
    }

  },

  actions: {

    checkout({
      commit,
      state
    }) {
      api.buyProducts(
        state.cart.cart,
        () => {
          // Vaciar el carrito
          commit("emptyCart");
          // Establecer que no hay errores
          commit("setCheckoutError", false);
        },
        () => {
          // Establerce que hay errores
          commit("setCheckoutError", true);
        }
      );
    }


  },

  getters: {


  },


})