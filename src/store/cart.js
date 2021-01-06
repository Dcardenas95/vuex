export default {
    state: {
        cart: [],
    },
    
    mutations: {

        incrementProductQuantity(state, item) {
            item.quantity++
        },

        addProductToCart(state, product) {
            state.cart.push({
                id: product.id,
                quantity: 1
            })
        },

        removeProductFromCart(state, index) {
            state.cart.splice(index, 1)
        },

        emptyCart(state) {
            state.cart = [];
        },

    },

    actions: {

        addProductToCart(context, product) {
            // hay inventaro de ese producto ?
            if (product.inventory === 0) return

            // existe ya en el  carrito ?
            const item = context.state.cart.find(item => item.id === product.id)



            // si es asi  , add uno mas a la compra 
            if (item) {
                context.commit('incrementProductQuantity', item)
            }

            // si no es asi , add el producto al carrito
            else {
                context.commit('addProductToCart', product)
            }
            // independiente , restar al inventario de ese producto

            context.commit('decrementProductInventory', product)

        },

        removeProductFromCart(context, index) {

            const item = context.state.cart[index]

            // eliminar el producto del 
            context.commit('removeProductFromCart', index)


            // restaurar el inventario
            context.commit('incrementProductInventory', item)


        }
    },

    getters: {

        productsOnCart(state , getters , rootState) {
            return state.cart.map(item => {
                const product = rootState.product.products.find(product => product.id === item.id);
                return {
                    title: product.title,
                    price: product.price,
                    quantity: item.quantity
                };
            });
        },

        cartTotal(state, getters) {
            return getters.productsOnCart.reduce(
                (total, current) => total + current.price * current.quantity,
                0
            );
        },

    }

}