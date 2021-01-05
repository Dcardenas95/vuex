<template>
    <div>
        <h1>bienvendo que vas a comprar</h1>
        <li v-for="(item,$index) in cartItems" :key='item.id'>
            {{item.title}} {{item.quantity}}
            <button @click='removeItem($index)'>X</button>
        </li>
        <button v-if="cartItems.length" @click="checkout">Checkout</button>
        <div v-if="$store.state.checkoutError">
            <p>Error procesando los productos...</p>
        </div>
        <hr>
        <h4>Total :{{cartTotal}}</h4>
    </div>
</template>
<script>
import {currency} from '@/utils/currency.js'
export default {
    name:'shoping',
    methods: {
        removeItem(index){
            this.$store.dispatch('removeProductFromCart',index)
        },
        checkout() {
            this.$store.dispatch("checkout");
        }
    },
    computed:{
        cartItems(){
            return this.$store.getters.productsOnCart
        },
    
        cartTotal() {
            return currency(this.$store.getters.cartTotal,'$')
        }
    }
}
</script>