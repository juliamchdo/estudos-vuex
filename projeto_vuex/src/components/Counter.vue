<template>
    <h1>Counter: {{ counter }}</h1>
    <button @click="decrement">Decrement -</button>
    <button @click="increment">Increment +</button>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
    name: 'Counter',
    
    computed:{
        // ...mapState({
        //     counter: state => state.counter
        // })

        ...mapGetters([
            'counter'
        ])
    },

    methods:{
        // decrement(){
        //     this.$store.commit('decrement', this.counter);
        //     this.counter = this.$store.state.counter;
        // },

        // increment(){
        //     this.$store.commit('increment', this.counter)
        //     this.counter = this.$store.state.counter;
        // }

        ...mapMutations([
            'decrement',
            'increment'
        ])
    }
}
</script>

<style>
button{
    font-size: 18px;
    padding: 15px;
    background-color: #41b883;
    border: none;
    border-radius: 10px;
    margin: 1rem;
}</style>