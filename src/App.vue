<template>
    <div id="app">
        <sui-card-group :items-per-row="8" stackable>
            <crypto v-for="coin in coins" :key="coin.id" :name="coin.name" :symbol="coin.symbol"
                    :history="parseArray(coin.history)" :color="coin.color" :price="coin.price"></crypto>
        </sui-card-group>
    </div>
</template>

<script>
    import crypto from './components/crypto.vue'
    import axios from 'axios';

    export default {
        name: 'app',
        components: {
            crypto
        },
        data() {
            return {
                coins: null
            }
        },
        methods: {
            parseArray(list) {
                return list.join(' ').split(' ').map(Number);
            }
        },
        mounted() {
            axios
                .get('https://api.coinranking.com/v1/public/coins')
                .then(response => (this.coins = response.data['data']['coins']))
        }
    }
</script>

<style>
    /*#app {*/
    /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
    /*  -webkit-font-smoothing: antialiased;*/
    /*  -moz-osx-font-smoothing: grayscale;*/
    /*  text-align: center;*/
    /*  color: #2c3e50;*/
    /*  margin-top: 60px;*/
    /*}*/

    #app {
        padding: 15px;
    }
</style>
