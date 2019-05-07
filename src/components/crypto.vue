<template>
    <sui-card>
        <sui-card-content>
            {{name}}
            <sui-card-meta slot="right">{{symbol}}</sui-card-meta>
        </sui-card-content>
        <sui-card-content>

            <sui-card-description>
                <trend id="" :data="history"
                       :gradient="[color]"
                       stroke-width="5px"
                       stroke-linecap="round"
                       auto-draw
                       smooth>
                </trend>
            </sui-card-description>
        </sui-card-content>
        <sui-card-content>
        <span slot="right">
          <sui-icon name="pound sign icon" /> {{price}}
        </span>
            <sui-icon name="compass" /> Website
        </sui-card-content>
        <!--        <sui-button attached="bottom">-->
        <!--            <sui-icon name="add"></sui-icon>-->
        <!--            Add Friend-->
        <!--        </sui-button>-->
    </sui-card>
</template>

<script>
    export default {
        name: "crypto",
        props: {
            history: {
                type: Array,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            symbol: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            price: {
                type: String,
                required: true
            }
        }
    }

</script>

<style scoped>

</style>
