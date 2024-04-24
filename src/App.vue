<template>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink :to="rotaDinamica">Serviços</RouterLink> |
    <RouterLink to="/usuarios/10">Usuário</RouterLink> |
    <!-- <RouterLink to="/servicos">Serviços</RouterLink> | -->
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <RouterView/>
</template>

<script>

  export default {
    data(){
      return{
        rotaDinamica:{name:'servicos'},

      }
    },
    created(){

      console.log('componente app:',this.$store.state.user)
      console.log('componente app:',this.$store)

    }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
