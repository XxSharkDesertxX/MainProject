<template>
    <div class="footer">
       
        <div>
            <h3>Footer</h3>
        </div>

        <div>
        <nuxt-link to="/" class="link_footer">
            <v-icon>
                mdi-home
            </v-icon>
        </nuxt-link>

        <a href="#" class="link_footer link_item_footer">
            <v-icon>
                mdi-arrow-up
            </v-icon>
        </a>
        </div>

    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style lang="css" scoped>
    .footer{
        height: 10vh;
        width: 100%;
         background: rgba(245, 244, 244,.5);
        position: relative;
        bottom: 0;
        display: flex; justify-content: space-around;
        align-items: center;
        z-index: 200;
    }   
    .link_footer{
        color: #000;
        text-decoration: none;
        font-size: 2rem;
    }
    .link_item_footer{
        margin: 0 0 0 2rem;
    }
</style>