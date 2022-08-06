<template>
    <div class="container_detaile_admin">
            <v-btn @click="showDetailUser" class="btn_show_user_detaile">
                <v-icon>
                    mdi-account-group
                </v-icon>
            </v-btn>

                <div class="box_detaile_amdin" v-if="istrue">

                    <div class="tile_box_detaile" v-for="item in user" :key="item.id">


                        <div>
                            <small>
                                {{item.id}}
                            </small>
                        </div>

                       <div>
                         <h3>{{item.username}}</h3>
                        <p>{{item.email}}</p>
                        <br>
                        <p>internet : {{internet}}</p>
                        <p>speed : {{speed}}</p>
                        <p>type : {{type}}</p>
                        <p>platform : {{platform}}</p>
                        <p>battery : {{battery}}</p>
                       </div>

                    </div>

                </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name:"AdminDetailes",

    data() {
        return {
            istrue:false,
            internet:null,
            speed : null,
            type : null,
            platform:null,
            battery:null

        }
    },

    computed:{
        ...mapState([
            'user'
        ]),
    },

    methods: {
        showDetailUser(){
            this.istrue = !this.istrue
            if (window.navigator.onLine) {
                this.internet = true
            } else {
                this.internet = false
            }

            this.speed = window.navigator.connection.downlink;
            this.type = window.navigator.connection.effectiveType;
            this.platform = window.navigator.platform;

            navigator.getBattery().then((battery)=>{
                let level = battery.level;
                this.battery = `${level}%`
            })

        }   
    },
}
</script>

<style lang="css">
        .container_detaile_admin{
            width: 100%;
            height: 50vh;
            display: flex; justify-content: start; align-items: center;
            padding: 1rem 2rem;
            position: relative;
        }
        .btn_show_user_detaile{
            position: absolute;
            top: 1rem; left: 1rem;
        }
        .box_detaile_amdin{
            width: 20rem; height: 15rem;
            overflow: auto;
            background: rgba(184, 183, 183,.5);
            margin: 0 auto;
            border-radius: .5rem;
        }
        .tile_box_detaile{
            display: flex; justify-content: start; align-items: center;
            margin: .5rem 0;
            border-bottom: 1px solid white;
            padding: 1rem;
        }
        small{
            margin: 0 1rem;
        }
</style>