<template>
    <div class="v-main-wrapper">
        <p>{{title}}</p>
    <v-catalog />
    </div>
    <v-cart />
</template>

<script>

    import vCatalog from './v-catalog'
    import vCart from './v-cart'

    export default {
       name: 'v-main-wrapper',
        components: {
            vCatalog,
            vCart
        },
        props: {

        },
        data() {
            return {

            }
        },
        computed: {

        },
        methods: {

        },
        watch: {

        },
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