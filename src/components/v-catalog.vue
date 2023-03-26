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

    export default {
        name: "v-catalog",
        props: {},
        components: {
            vCatalogItem
        },
        methods: {
            showChildArticle(data) {
                console.log(data)
            }
        },
        data() {
            return {
                    products: [
                    {
                        image: "image_1.webp",
                        name: "T-shirst-1",
                        price: 110,
                        article: "T1",
                        available: true
                    },
                    {
                        image: "image_2.webp",
                        name: "T-shirst-2",
                        price: 120,
                        article: "T2",
                        available: true
                    },
                    {
                        image: "image_3.webp",
                        name: "T-shirst-3",
                        price: 130,
                        article: "T3",
                        available: true
                    },
                    {
                        image: "image_4.webp",
                        name: "T-shirst-4",
                        price: 140,
                        article: "T4",
                        available: true
                    },
                    {
                        image: "image_5.webp",
                        name: "T-shirst-5",
                        price: 150,
                        article: "T5",
                        available: false
                    },
                    {
                        image: "image_6.webp",
                        name: "T-shirst-6",
                        price: 160,
                        article: "T6",
                        available: true
                    }
                ]
            }
        },
        computed: {}
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