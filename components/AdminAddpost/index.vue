<template>
    <div class="container_admin_add_post">
        <h3>
            Add Post Section
        </h3>

        <div class="box_add_post">
            <input type="text" placeholder="Title Post" v-model="title" class="item_add_post">
            
            <textarea cols="30" rows="10" placeholder="Subtitle for post" v-model="subtitle" class="item_add_post"></textarea>
            <small>{{subtitle.length}}</small>

            <input type="text"  inputmode="url"  v-model="src" class="item_add_post">

            <div class="btn_add_post_admin">
                <v-btn @click="addpostadmin">
                    <v-icon>
                        mdi-plus-box-multiple
                    </v-icon>
                </v-btn>
                <v-btn @click="rewirte">
                    <v-icon>
                        mdi-autorenew
                    </v-icon>
                </v-btn>
            </div>

        </div>

    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
export default {
    data() {
        return {
            title:'',
            subtitle:'',
            src:'https://wallpapercave.com/dwp1x/wp10350575.jpg'
        }
    },
    computed:{
        ...mapState([
            'data'
        ])
    },

    methods: {

        ...mapActions([
            'addpost'
        ]),

        addpostadmin(){
            let newpsot={
                title:this.title,
                subtitle:this.subtitle,
                src:this.src,
                id:this.data.length
            }
            this.addpost(newpsot)
            this.title='',
            this.subtitle='',
            this.src = ''
        },
        rewirte(){
            this.title='',
            this.subtitle='',
            this.src = ''
        }
    },
}
</script>

<style lang="css">
    .container_admin_add_post{
        width: 100%;
        display: flex; justify-content: space-around; align-items: center;
        flex-direction: column;
        margin: 2rem 0;
    }
    .box_add_post{
        display: flex; justify-content: space-around; align-items: flex-start;
        flex-direction: column;
    }
    .btn_add_post_admin{
        width: 100%;
        display: flex; justify-content: space-around;
    }
    .item_add_post{
        outline: none;
        margin: 2rem 0;
        transition: all .6s;
        width: 100%;
        padding: 1rem;
        border: 1px solid gray;
        border-radius: .5rem;
    }

    .item_add_post:hover{
        transform: scale(1.1);
    }
</style>