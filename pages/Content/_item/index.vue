<template>
    <div class="single_item">           
        
            <img :src="img" alt="mainSingleImage">
            <div class="title_item_sigle">
                <h1>{{title}}</h1>
                <p>{{subtitle}}</p>
            </div>


            <div class="back_content">
                <nuxt-link to="/Content" class="back_content_nuxt_link">
                    <v-icon class="icon_back_content_nuxt_link">
                        mdi-arrow-left
                    </v-icon>
                </nuxt-link>
            </div>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    layout:'single',
    data() {
        return {
            id : this.$route.params.item,
            title:'',
            subtitle:'',
            img:null,
        }
    },
    head(){
        return{
            title:"Singale Item",
            meta:[{
                hid:"Somting",
                name:"Singale page",
                content:"The content for singale page"
            }]
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
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
        min-height: 100vh;
    }
    .single_item img{
        width: 100%; height: 100vh;
        object-fit: cover;
    }
    .title_item_sigle{
        position: absolute;
        background: rgba(0, 0, 0,.5);
        padding: 2rem 1rem;
        color: #fff;
        width: 50%;
    }
    .title_item_sigle h1{
        margin-bottom: 1rem;
        filter: drop-shadow(1px 5px 10px #fff);
    }
    .back_content{
        position: absolute;
        top: 4rem; right: 4rem;
    }
    .back_content .back_content_nuxt_link{
        text-decoration: none;
    }
    .back_content .icon_back_content_nuxt_link{
        color: #fff;
        font-size: 4rem;
        filter: drop-shadow(1px 5px 10px #000);
    }

    @media screen and (max-width:700px) {
        .title_item_sigle{
            width: 100%;
        }
    }
</style>