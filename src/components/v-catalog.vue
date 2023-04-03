<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog__list">
            <v-catalog-item
                    v-for="product in products"
                    :key="product.article"
                    :product_data="product"
                    @sendDataToParent="showChildArticle"
            />
        </div>
    </div>
</template>

<script>
    import vCatalogItem from './v-catalog-item'
    import {mapActions} from 'vuex'

    export default {
        name: "v-catalog",
        props: {},
        components: {
            vCatalogItem
        },
        methods: {
            ...mapActions([
               'GET_PRODUCTS_FROM_API'
            ]),
            showChildArticle(data) {
                console.log(data)
            }
        },
        computed: {},
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