
import Vue from 'vue'
import api from '@/api/shop.js'



export default {


    state: {
        products: [],
        selectProduct:{}
    },
    mutations: {
        
        setProducts(state, products) {
            state.products = products
        },

        setSelectProduct(state, product) {
            state.selectProduct = product
        },

        editProduct(state, data) {
            // buscar el indice del producto
            const index = state.products.findIndex(product => product.id === state.selectProduct.id)
            // componer el producto en base a las propiedades cambiadas

            const product = Object.assign({}, state.products[index], data)

            // Actualizar activando la reactividad
            Vue.set(state.products, index, product)
        },

        decrementProductInventory(state, product) {
            product.inventory--
        },

        incrementProductInventory(state, item) {
            const product = state.products.find(product => product.id === item.id);
            product.inventory += item.quantity;
        },

    },
    actions: {

        getProducts({commit}){
            return new Promise((resolve) => {
                api.getProducts(products => {
                commit('setProducts',products)
                resolve()
            })
        })},

    },

    getters: {
        
        productsOnStock(state) {
            return state.products.filter(product => {
                return product.inventory > 0
            })
        },

        selectProduct(state) {
            return state.selectProduct
        },

        nearlySouldOut(state) {
            return id => {
                return state.products.find(product => product.id === id).inventory < 2
            }
        }

    }
}