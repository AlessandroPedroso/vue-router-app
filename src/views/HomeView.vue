<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="updateUser()">
      Atualizar perfil
    </button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
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
