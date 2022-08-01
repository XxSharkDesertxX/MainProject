<template>
    <div class="container_admin">
        <AdminPost v-for="item in this.data" :key="item.id"
            :title='item.title'
            :img='item.src'
            :id= 'item.id'
        />
        <div class="back_home_admin">
            <v-btn>
                <nuxt-link to="/" class="icon_post_adming">
                    <v-icon >
                        mdi-home
                    </v-icon>
                </nuxt-link>
            </v-btn>

             <v-btn>
                <nuxt-link to="/Content" class="icon_post_adming">
                    <v-icon >
                        mdi-view-week
                    </v-icon>
                </nuxt-link>
            </v-btn>
        </div>

            <AdminAddpost />
            
    </div>
</template>

<script>
import { mapState  } from "vuex";
export default {
    layout:'single',

    computed:{
        ...mapState([
            'data'
        ])
    }

}
</script>

<style lang="css">
    .container_admin{
        padding-top: 10vh;
        height: 90vh;
        display: flex;
        justify-content: space-around; align-items: center;
        flex-wrap: wrap;
    }
    .back_home_admin{
        position: absolute;
        top: 1rem; right: 1rem;
    }
    .icon_post_adming{
        text-decoration: none;
        color: #000;
    }
</style>