<template>

    <div>
        {{ $route.params.id }} Usuário <br>
        {{ id }} Usuário<br>
        {{ $route }} Usuário<br>
        <br>

        <button @click="login()">
            Login
        </button>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id:''
            }
        },
        created(){
            this.id = this.$route.params.id
            console.log(this.id)
            console.log(this.$route)
            console.log(this.$router)
        },
        methods:{
            login(){
                //ajax api
                // this.$router.push('/about')
                this.$router.push({name:'about'})
                console.log('clicou')
            }
        }
    }
</script>

<style></style>