import { createStore } from "vuex";
import food from '../food.json';

const store = createStore({
    state(){
        return{
            inventory: [],
            cart: [],
            data: null,
        }
    },
    mutations:{
       getItems(state){
        state.inventory = food;
        state.cart = [];
       },
        addToCart(state, payload) {
            state.cart.push(payload);          
        },
        resetCart(state) {
            state.cart = [];          
        },
        updated() {
            
        },
        setData(state, data) {
            state.data = data;
        },
        removeItem(state, data){
            state.cart = state.cart.filter(el=> JSON.stringify(data) !== JSON.stringify(el))
        }
    },
    actions:{
        getItems(context){
            context.commit("getItems")
        },
        addToCart(context, payload){
            context.commit("addToCart", payload)
        }
    },
    getters:{
        inventory: (state) => state.inventory,
        dataS: (state) => state.data,
        cart: (state) => state.cart, 

        totalQuantity : (state) => {
            let sum = 0
            state.cart.forEach((el) => {
              sum+=el.quantity
            })
            return sum
        },
        recommend : (state) => {
            const recom = Object.entries(state.data).sort((a, b) => b[1].quantity - a[1].quantity );
            return recom.map(el=>el[1]);
        }
    }   
})

export default store