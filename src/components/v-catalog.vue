<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <v-catalog-item
                    v-for="product in PRODUCTS"
                    :key="product.article"
                    :product_data="product"
                    @addItemToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "v-catalog",
        props: {},
        components: {
            vCatalogItem
        },
        methods: {
            ...mapActions([
               'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
              this.ADD_TO_CART(data);
            }
        },
        computed: {
            ...mapGetters([
               'PRODUCTS'
            ]),
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
        }
    }
</script>

<style lang="scss">
    .v-catalog {
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

</style>