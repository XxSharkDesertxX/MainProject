<template>
    <div class="about_container">
        <div class="content_apout_page">
            <h1>page for about</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quam ea saepe error pariatur fuga mollitia porro adipisci id ipsum aliquam quidem, deleniti, ratione voluptas unde perferendis ipsam velit sequi odio ipsa beatae recusandae voluptatum accusamus. Tempora ut dolor aspernatur voluptate? Fugiat, magni nulla repellat amet quo corrupti ipsum voluptas.</p>
            <h3>users : {{this.user.length}}</h3>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"About",
  middleware:'log',
        head(){
        return{
            title:"About",
            meta:[{
                hid:"About",
                name:"About pages",
                content:"The apbout page"
            }]
        }
    },
    computed:{
        ...mapState([
            'user'
        ])
    },
}
</script>

<style lang="css">
    .about_container{
        padding-top: 10vh;
        min-height: 90vh;
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
        background-image: url('@/static/image_logo/about.jpeg');
        background-position: center;
        background-size: 100% 100%;
        color: #fff;
    }
    .content_apout_page{
        background: rgba(0, 0, 0,.5);
        text-align: center;
        padding: 2rem;
    }
    .content_apout_page h1{
        margin-bottom: 1rem;
        font-weight: normal;
    }
    .content_apout_page h3{
        margin-top: 1rem;
    }
</style>