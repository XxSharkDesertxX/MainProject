<template>
    <div class="container_header">



        <ul class="mnue_container" >
            <li>
                <nuxt-link to="/" exact  class="nxt_link_header">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/Content" class="nxt_link_header">Content</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/About" class="nxt_link_header">About</nuxt-link>
            </li>
            <li>
                <nuxt-link to="Login" class="nxt_link_header">Login</nuxt-link>
            </li>
        </ul>

        <div class="logo_header">
            <img src="../../static/image_logo/Logo2.png" alt="">
        </div>

    </div>
</template>

<script>
export default {
    name:"Header"
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
        border-bottom: 2px solid #000;
        transition: all .6s;
    }
    
    

    
</style>