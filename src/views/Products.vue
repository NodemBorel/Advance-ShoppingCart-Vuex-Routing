<template>
    <main class="wrapper">
        <h1>Products</h1>

        <div class="card-container">
          <ProductCart v-for="(product, index) in inventory.slice(0,6)" :key="product.id" :index="index" :product="product" :addToCart="addToCart" class="card" />
        </div>
        
      </main>
</template>

<script>
import ProductCart from '../components/ProductCart.vue'
export default {
  components: { ProductCart },
  props:['inventory', 'addToCart'],  
}
</script>

<style  scoped>

</style>