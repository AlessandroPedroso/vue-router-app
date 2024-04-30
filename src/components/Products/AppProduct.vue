<template>
    <div class="card">

        {{ product.name }} - {{ product.price }}
        <button @click="addProduct()">
            Adicionar
        </button>

        <button v-if="inCart" @click="removeProduct()">
            Remove
        </button>

        <br>

    </div>
</template>

<script>
export default {
    props: {

        product: Object
    },
    data() {
        return {
            inCart: false
        }

    },
    created() {

    },
    methods: {
        addProduct() {
            // this.$store.commit('addProducts', this.product)
            this.$store.dispatch('addProducts',this.product)
            const existe = this.$store.state.cart.find(prod => prod.id === this.product.id)

            if (existe.id === this.product.id) {
                this.inCart = true
            }

        },
        removeProduct() {
            this.$store.commit('removeProduct', this.product.id)
                this.inCart = false
        },
    }
}
</script>

<style>
.card {
    background: bisque;
    padding: 6px;
    margin-bottom: 5px;
}
</style>