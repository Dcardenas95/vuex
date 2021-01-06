<template>
    <div>
        <input v-model='title' type="text" placeholder="Selecciona producto" style='text-align:center' >
    </div>
</template>
<script>
export default {
    name:'ListEdit',
    computed: {
        // selectProduct(){
        //     return this.$store.getters.selectProduct
        // },

        title: {
            get(){
                return this.$store.getters.selectProduct.title
            },
            set(value){
                return this.$store.commit('editProduct' , {title:value})
            }
        }
    }
}
</script>