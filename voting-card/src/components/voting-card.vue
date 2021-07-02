<template>
    <div class="votingCard">
        <h1>
            {{ title }}
        </h1>

        <div id="booth" v-if="state === 'open'">
            <Booth 
                :options="boothOptions" 
                @select="select"    
            />
        </div>
        <div v-else-if="state === 'closed'">
            <Result :votes="votes"></Result>
        </div>
        <div v-else>
            <h1>Not Found</h1>
        </div>
    </div>
</template>

<script>
    import Booth from './voting-booth.vue'
    import Result from './voting-result.vue'

    export default {
        props: ['title', 'state', 'votes'],
        data: () => ({
            boothOptions: [],
            mutState: ''
        }),
        components: {
            Booth, Result
        },
        methods: {
            select(optionIndex){
                this.state = "closed";
                this.votes[optionIndex].count++;
            }
        },
        created: function (){
            this.boothOptions = this.votes.map(option => (option.option));
            this.mutState = this.state;
        }
    }
</script>

<style>
    .votingCard{
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #000;
        background-color: cornflowerblue;
    }
</style>