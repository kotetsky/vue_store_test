<template>
    <div class='v-cart-item'>
        <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item__info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price}}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item__quantity">
            <p>Quantity</p>
            {{cart_item_data.quantity}}
        </div>
        <button @click="deleteItemFromCart">Delete</button>
    </div>
</template>

<script>
    export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
        methods: {
            deleteItemFromCart() {
                this.$emit('deleteItemFromCart')
            }
        },
        mounted() {
            let cartItemData = this.cart_item_data;
            cartItemData.quantity = 1;
        },
        computed: { }
    }
</script>

<style lang="scss" scoped>
    .v-cart-item {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin: $margin*2;

        &__image {
            max-width: 100px;
        }
    }

</style>