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
    created(){
        console.log(this.data);
    }
}
</script>


<style lang="css">
       .content{
        padding-top: 10vh;
        display: flex; justify-content: space-around; align-items: center;
        flex-direction: column;
        min-height: 90vh;
        background-image: url();
    }
    .content_title{
        font-weight: normal;
        margin: 3rem 0 1rem 0;
    }
    .container_item_content{
        width: 100%;
    }
</style>