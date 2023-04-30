<template>
    <router-link to="/cart">Go to Cart</router-link>
    <div class="v-main-wrapper">
        <router-view>

        </router-view>
        <!--<v-catalog/>
        <v-cart
                v-if="CART.length"
                :cart_data="CART"
        />-->
    </div>
</template>

<script>

    //import vCatalog from './v-catalog'
    //import vCart from './v-cart'
    import {mapGetters} from 'vuex'

    export default {
        name: 'v-main-wrapper',
        /*   components: {
            vCatalog,
            vCart
        },*/
        props: {},
        data() {
            return {}
        },
        computed: {
            ...mapGetters(
                [
                    'CART'
                ]
            )
        },
        methods: {},
        watch: {},
        mounted() {
            console.log('Hello I am allive!')
        }
    }
</script>

<style>
    .v-main-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        max-width: 900px;
        margin: 0 auto;
    }
</style>