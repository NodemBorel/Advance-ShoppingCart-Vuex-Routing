<script>
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import { mapActions, mapGetters } from 'vuex';

export default{
  components:{
    Sidebar
  },
  data(){
    return{
      showSidebar: false
    }
  },
  mounted(){
    this.getItems()
    //console.log(this.inventory)
    //console.log(this.cart)

    if (localStorage.getItem("data")) {
      //atob() = fonction predifinis qui decodes de la base-64 a string
      //JSON.parse() = fonction predifinis qui convertie le resultat du format JSON string en un object js
      const encryptD = localStorage.getItem("data");
      //console.log(encryptD)
      const decryptedD = JSON.parse(atob(encryptD));
      //console.log(decryptedD,encryptD)
      this.$store.commit("setData", decryptedD);
    } 
    else {
      //The btoa() = method fonction predifinis qui encodes un string en base-64. 
      //JSON.stringify() = method fonction predifinis qui convertie un object js en un JSON string.
      const data = this.inventory;
      const encryptD = btoa(JSON.stringify(data));
      localStorage.setItem("data", encryptD);
      this.$store.commit("setData", data);
      console.log(this.$store.getters.dataS,encryptD)
    }
  },
  computed: {
    ...mapGetters(["inventory", "cart", "totalQuantity", "dataS", "recommend"]),
  },
  methods: {

    ...mapActions(["getItems", "addToCart"]),

    /*addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 1
      this.cart[name] += quantity
    },*/
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
    },
    removeItem(name) {
      this.$store.commit("removeItem",name)
    },

addToQuantity() {
  data = this.data
  const item = data.find(p => p.name === name);
  if (item) {
    item.quantity += values[name];
  }
  //console.log(data);
},

updateQty(){
//   itemval = this.cart
// for (const key in itemval) {
//   addToQuantity(key, itemval);
// }
    try {
      let temp = this.$store.getters.dataS
    this.cart.forEach((el)=>{
        temp = temp.map((ele)=>{
          if (el.name === ele.name && el.id === ele.id) {
            let itemU = {...ele, quantity:el.quantity+ele.quantity}
            return itemU
          }
          return ele
        })
    })
    this.$store.commit("setData", temp);
    const encryptD = btoa(JSON.stringify(this.$store.getters.dataS));
    localStorage.setItem("data", encryptD);
    console.log(this.recommend)
    this.$store.commit("resetCart");
    } catch(error){
      console.log(error)
    }
}



  },
}
</script>

<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to ="/products" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <div @click="toggleSidebar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </div>
  </header>
  <RouterView :inventory="inventory" :addToCart="addToCart"/>

  <sidebar
    v-if="showSidebar"
    :toggle="toggleSidebar"
    :cart="cart"
    :inventory="inventory"
    :remove="removeItem"
    :update="updateQty"
  />

</template>

