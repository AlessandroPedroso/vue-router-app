<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AppProducts/>
    <button @click="updateUser()">
      Atualizar perfil
    </button>
  </div>
</template>

<script>
// @ is an alias to /src

import AppProducts from '@/components/Products/AppProducts.vue';

export default {
  name: 'HomeView',
  components: {
    AppProducts
  },
  methods:{
    updateUser(){

      const newUser = {
        first_name:'Alessandro',
        last_name:'Pedroso',
        email:'alessandropedrosoti@gmail.com'
      }
      
      this.$store.commit('storeUSer', newUser)
    }
  }
}
</script>
