<template>
    <div class="single_item">           
        
            <h1>
                {{title}}
            </h1>
            <p>
                {{subtitle}}
            </p>
            <img :src="img" alt="image">

    </div>
</template>

<script>
import { mapState } from "vuex";

export default {

    data() {
        return {
            id : this.$route.params.item,
            title:'',
            subtitle:'',
            img:null
        }
    },

    computed:{
        ...mapState([
            'data'
        ])
    },
    created() {
        let item = this.data[this.id]
        this.title = item.title;
        this.subtitle = item.subtitle;
        this.img = item.src;
    },
}
</script>

<style lang="css">
    .single_item{
        padding-top: 15vh;
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
        min-height: 90vh;
    }
</style>