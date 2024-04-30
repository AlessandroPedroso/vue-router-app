<template>
    <div>
        <AppProduct v-for="(product,index) in $store.state.products" :key="index" :product="product"/>
        <br>
        <br>
        {{ $store.state.user.first_name }} - {{ $store.state.user.last_name }}
        <br>
        <br>
        <p>total: {{ $store.getters.total }}</p>
    </div>
</template>

<script>
import AppProduct from './AppProduct.vue';
export default{
    components:{AppProduct}
}
</script>
<style>
</style>