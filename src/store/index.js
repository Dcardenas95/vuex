import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/shop.js'


Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    products: [],
    carts:[]
  },

  mutations: {
    setProducts(state , products){
      state.products = products
    },

    incrementProductQuantity(item){
      item.quantity++
    },

    addProductToCart(state,product){
      state.cart.push({
        id:product.id,
        quantity:1
      })
    },

    decrementProductInventory(product){
      product.inventory--
    }

  },

  actions: {
    getProducts({commit}){
      return new Promise((resolve) => {
        api.getProducts(products => {
          commit('setProducts',products)
          resolve()
      })
      })
    },

    addProductToCart(context , product) {
      // hay inventaro de ese producto ?
      if(product.inventory === 0) return

      // existe ya en el  carrito ?
      const item = context.state.cart.find(item => item.id === product.id)
      console.log(item);
      

      // si es asi  , add uno mas a la compra 
      if(item){
        context.commit('incrementProductQuantity',item)
      }

      // si no es asi , add el producto al carrito
      else{
        context.commit('addProductToCart',product)
      }
      // independiente , restar al inventario de ese producto

      context.commit('decrementProductInventory',product)

    }
  },

  getters: {

    productsOnStock(state){
      return state.products.filter(product => {
          return product.inventory>0
      })
    }

  },
  
  modules: {
  }

})
