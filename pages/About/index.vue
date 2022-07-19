<template>
    <div class="about_container">
        <h1>page for about</h1>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"About",

    head(){
        return{
            title:"About",
            meta:{
                hid:"Abouts",
                name:"the naem of iste",
                content:"content site"
            }
        }
    },

    data() {
        return {
            users:this.user
        }
    },

    computed:{
        ...mapState([
            'user'
        ])
    }
}
</script>

<style lang="css">
    .about_container{
        padding-top: 10vh;
        min-height: 90vh;
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
    }
</style>