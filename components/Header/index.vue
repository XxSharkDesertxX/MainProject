<template>
    <div>
        <div class="container_header" @mousemove="mosepoinser()">



        <ul class="mnue_container">
            <li>
                <nuxt-link to="/" exact  class="nxt_link_header">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Content" class="nxt_link_header">Content</nuxt-link>
            </li>
            <li>
                <nuxt-link to="Login" class="nxt_link_header">Login</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/About" class="nxt_link_header">About</nuxt-link>
            </li>   

        <div class="pointer"></div>
        </ul>
       

        <div class="logo_header">
            <img src="../../static/image_logo/Logo2.png" alt="">
        </div>

        </div>
                <v-icon class="icon_mnue_bar" @click="responsive">
                    {{istrue ? 'mdi-menu' : 'mdi-minus-thick'}}
                </v-icon>
          <ul class="mnue_container_sml">
            <li>
                <nuxt-link to="/" exact  class="nxt_link_header">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Content" class="nxt_link_header">Content</nuxt-link>
            </li>
            <li>
                <nuxt-link to="Login" class="nxt_link_header">Login</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/About" class="nxt_link_header">About</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"Header",
    data() {
        return {
            istrue:true
        }
    },
    methods: {
        responsive(){
            let data = document.querySelector('.mnue_container_sml')
            if (this.istrue) {
                data.style.width="40%"
                this.istrue = false
            } else {
                data.style.width="0%"
                this.istrue = true
            }
        },
        mosepoinser(){
            let pointer = document.querySelector(".pointer");
            document.addEventListener("mousemove",function (e) {
                pointer.style.left = e.pageX +'px';
                pointer.style.top = e.pageY +'px'
            })
        }
    },
}
</script>


<style lang="css" scoped>

    .container_header{
        height: 10vh;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        background: rgba(245, 244, 244,.8);
        z-index: 200;
    }
    .logo_header{   
        height: 10vh; width: 4.5rem;
        overflow: hidden;
        margin-right: 4rem;
    }
    .logo_header img{
        width: 100%; height: 100%;
    }

    .mnue_container{
        display: flex;
        margin-left: 5rem;
    }
    .mnue_container li{
        list-style: none;
        margin: 0 1rem;
        cursor: pointer;
        color: #000;
    }
    .nxt_link_header{
        color: #000;
        text-decoration: none;
        font-weight: normal;
        border-bottom: 2px solid transparent;
        transition: all .6s;
    }
    .nuxt-link-active{
        transition: all .6s;
        filter: drop-shadow(0px 6px 3px black);
    }
    
    .mnue_container_sml{
       display: none;
    }
    .icon_mnue_bar{
        display: none;
    }
    .pointer{
        width: 15px; height: 15px;
        background-color: #fff;
        position: fixed;
        border-radius: 50%;
        mix-blend-mode: difference;
        pointer-events: none;
        transition: all .2s;
    }
    .mnue_container li:hover ~ .pointer{
        transform: scale(3);
    }

    @media screen and (max-width:700px) {
       .container_header{
        display: none;
       }
       .mnue_container_sml{
        display: flex; justify-content: space-around; align-items: center; flex-direction: column;
        background: rgba(26, 26, 26,.8);
        position: fixed;
        width: 0 ;
        height: 100%;
        z-index: 200;
        transition: all .6s ease;
        overflow: hidden;
    }
    .mnue_container_sml li{
        list-style: none;
    }
    .icon_mnue_bar{
        position: fixed;
        right: 2rem;
        top: 2rem;
        z-index: 200;
        display: block;
        cursor: pointer;
        font-size: 2rem;
    }
    .nxt_link_header{
        color: #fff;
        font-size: 1.6rem;
    }
    }
</style>