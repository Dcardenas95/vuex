<template>
<div>
    <h1>Lista de productos</h1>
    <ul>
        <li 
        :class="{'sold-out': $store.getters.nearlySouldOut(product.id)}"
        @click="selectProduct(product)" 
        v-for="(product, $index) in listproducts" :key="$index">
            {{ product.title }} - {{ product.price }} - {{product.inventory}}
            <button @click="addToCart(product)">Comprar</button>
        </li>
    </ul>
</div>
</template>
<script>

export default {

name: "ListProduct",
async created() {
    try {
        await this.$store.dispatch("getProducts");
    } catch (error) {
        console.error(error);
    }
},

methods: {
    addToCart(product){
        this.$store.dispatch("addProductToCart", product);
    },
    selectProduct(product){
        this.$store.commit('setSelectProduct', product)
    }
},

computed: {
    listproducts() {
        return this.$store.getters.productsOnStock
    },
},

};
</script>
<style scoped>
    .sold-out {
        background-color: lightpink;
        border: 3px solid tomato;
        padding: 0.3rem;
        margin: 0.1rem;
    }
</style>
