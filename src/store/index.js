import { createStore } from 'vuex'

export default createStore({
  state: {
    user:{
      first_name:'',
      last_name:'',
      email:''
    },
    products:[],
    cart:[]
  },
  getters: {
  },
  mutations: {
    storeUSer(state,data){
      console.log('Dados antigos:storeuser',state.user)
      console.log('Dados novos: storeuser',data)
      state.user = data
      console.log('Dados antigos atualizado:storeuser',state.user)
    },
  },
  actions: {
  },
  modules: {
  }
})
