<template>
    <div>
        <input v-model='selectProduct' type="text" placeholder="Selecciona producto" style='text-align:center' >
    </div>
</template>
<script>
export default {
    name:'ListEdit',
    computed: {
        selectProduct(){
            return this.$store.getters.selectedProduct
        }
    }
}
</script>