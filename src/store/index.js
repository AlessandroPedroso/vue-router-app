import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name:'',
      last_name:'',
      email:''
    },
    products:[
      {
        id:1,
        name:'Bola',
        price:100
      },
      {
        id:2,
        name:'Chuteira',
        price:200
      },
      {
        id:3,
        name:'Meião',
        price:50
      },
    ],
    cart:[]
  },
  getters: {
    total(state){
      return state.cart.reduce((total,item) => total += item.price, 0)
    }
  },
  mutations: {
    storeUSer(state,data){
      console.log('Dados antigos:storeuser',state.user)
      console.log('Dados novos: storeuser',data)
      state.user = data
      console.log('Dados antigos atualizado:storeuser',state.user)
    },

    addProducts(state,data){
        state.cart.push(data)
    },
    removeProduct(state,id){
      const index = state.cart.findIndex(o=>o.id === id)
      state.cart.splice(index,1)
    }
  },
  actions: {
    storeUser({commit},data){
      //{{commit}} ou  context.commit
      // console.log("context",data)
      // console.log(context.getters.total)
      // utilizar o action para realizar uma promessa, buscar algo do backend e ai sim salvar na mutation
      //ex: api/axios
      return new Promise((resolve)=>{
        setTimeout(()=>{
          resolve()
          console.log('here')
          commit('storeUSer',data)
        },3000)
      })
    
    },
    addProducts(context,data){
      context.commit('addProducts',data)
    }
  },
  modules: {
  }
})
