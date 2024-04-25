<template>
    <div>
        <AppProduct v-for="(product,index) in $store.state.products" :key="index" :product="product"/>
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