<template>
    <div class="v-catalog-item">
        <img class="v-catalog-item-image" :src="require('../assets/images/' + product_data.image)" alt="">
        <p class="v-catalog-item__name">{{product_data.name}}</p>
        <p class="v-catalog-item__price">{{product_data.price}}</p>
        <button class="v-catalog-item__add_to_cart_btn btn" @click="sendDataToParent">Add to cart</button>
    </div>
</template>

<script>
    export default {
        name: "v-catalog-item",
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                title: ""
            }
        },
        methods: {
            sendDataToParent() {
                this.$emit('sendDataToParent', this.product_data.article)
            }
        },
        computed: {}
    }
</script>

<style lang="scss">
    .v-catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: $padding*2;
        margin: $margin;
        margin-bottom: $margin*4;

        &-image {
            width: 200px;
        }
    }



</style>