<template>
    <div class="content">
        <h2 class="content_title">
            Title For Seciton Content ...
        </h2>

        <div class="container_item_content">
            <ItemContent v-for="item in this.data" :key="item.id"
                :title="item.title" 
                :subtitle="item.subtitle"
                :img="item.src"
                :id="item.id"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    name:"Content",
  middleware:'log',
    data() {
        return {
        }
    },
    head(){
        return{
            title:"Content",
            meta:[{
                hid:"Content",
                name:"Contantpage",
                content:"The Content page"
            }]
        }
    },
    computed:{
        ...mapState([
            'data'
        ])   
    },
}
</script>


<style lang="css">
       .content{
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
        min-height: 90vh;
    }
    .content_title{
        font-weight: normal;
        margin: 3rem 0;
    }
    .container_item_content{
        width: 100%;
        display: flex;
        justify-content: center;
        height: 50vh;
        padding: 0 .5rem;
        padding-left: 1rem;
    }
</style>