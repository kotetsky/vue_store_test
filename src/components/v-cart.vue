<template>
    <div class="v-cart">
        <h1>Cart</h1>
        <v-cart-item
                v-for="(item, index) in cart_data"
                :key="item.article"
                :cart_item_data="item"
                @deleteItemFromCart="deleteFromCart(index)"
        />
    </div>
</template>

<script>
    import vCartItem from './v-cart-item'
    import {mapActions} from 'vuex'

    export default {
        name: "v-cart",
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                title: ""
            }
        },
        components: {
          vCartItem
        },
        methods: {
            ...mapActions([
                'DELETE_FROM_CART'
            ]),
            deleteFromCart(index){
                console.log(index);
                this.DELETE_FROM_CART(index)
            }
        },
        computed: {}
    }
</script>

<style>

</style>