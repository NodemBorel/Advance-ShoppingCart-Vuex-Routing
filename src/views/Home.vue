<template>
    <div class="home">
        <div class="splash-container">
            <div class="splash">
                <h1>Splendid Food</h1>
            </div>
        </div>

        <main class="wrapper">

            <h2>Recommended</h2>

            <div class="recommended">

                <ProductCart v-for="(product, index) in recommend.slice(0,3)" :key="product.id" :index="index" :product="product" :addToCart="addToCart" class="card" />
                <!-- <ProductCart v-for="(product, index) in recom" :key="index" :index="index" :product="product" :addToCart="addToCart" class="card" /> -->
            </div>

        </main>
    </div>
</template>

<script>
import ProductCart from '../components/ProductCart.vue';
import { mapGetters } from 'vuex';
    export default {
        components:{
            ProductCart
        },
        name: 'Home',
        props:["inventory", "addToCart", "cart"],   
        computed: {
           ...mapGetters(["recommend"]),
        },
    } 
</script>

<style lang="scss" scoped>

</style>