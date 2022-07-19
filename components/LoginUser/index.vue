<template>
    <div class="log_container">
        <div v-if="!singup">
            <div class="title_login">
            <h3>Title Form Login</h3>
        </div>
            <div class="body_login">
                <div class="body_login_item">
                    <v-icon>
                        mdi-account
                    </v-icon>
                    <input type="text" placeholder="User Name" v-model="username">
                </div>
                <div class="body_login_item">
                    <v-icon>
                        mdi-email
                    </v-icon>
                    <input type="email" placeholder="User Emali" v-model="email">
                </div>
                <div class="body_login_item">
                    <v-icon>
                        mdi-key
                    </v-icon>
                    <input type="password" placeholder="User Password" v-model="password">
                </div>
                <div class="body_login_item">
                    <v-icon class="body_login_item_logo">
                        mdi-key
                    </v-icon>
                    <input type="password" placeholder="User Password" v-model="passwordtow">
                </div>
            </div>
        </div>
        
        <div v-if="singup">
            <div v-if="singup">
            <div class="title_login">
            <h3>Title Form Login</h3>
        </div>
            <div class="body_login">
                <div class="body_login_item">
                    <v-icon>
                        mdi-account
                    </v-icon>
                    <input type="text" placeholder="User Name" v-model="user">
                </div>
                <div class="body_login_item">
                    <v-icon>
                        mdi-email
                    </v-icon>
                    <input type="email" placeholder="User Emali" v-model="email">
                </div>
                <div class="body_login_item">
                    <v-icon>
                        mdi-key
                    </v-icon>
                    <input type="password" placeholder="User Password" v-model="password">
                </div>
            </div>
        </div>
        </div>

            <div class="footer_login" @click="chagnelog">
                <v-btn>
                    {{singup ? "SingUp" : "Login"}}
                </v-btn>
                <v-btn>
                    Switch Sing UP
                </v-btn>
                <v-btn>
                    <v-icon type="button" @click="revereinfo">
                          mdi-autorenew
                    </v-icon>
                </v-btn>
            </div>

    </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
export default {
    data() {
        return {
            username:null,
            email:null,
            password:null,
            passwordtow:null,
            singup:false,
        }
    },
    methods: {
        revereinfo(){
            this.username=null,
            this.email=null,
            this.password=null,
            this.passwordtow=null
        },
        chagnelog(){
             return this.singup = !this.singup
        }
    },
    computed:{
        ...mapState([
            'user'
        ]) ,
    },
}
</script>

<style lang="css">
    .log_container{
        width: 70%;
        height: 50%;
    }
    .title_login{
        margin-bottom: 1.5rem;
        letter-spacing: 1rem;
    }
    .body_login{
        display: flex; justify-content: space-around; align-items: flex-start; 
        flex-direction: column;
    }
    .body_login_item{
        margin: 1rem 0;
        display: flex; justify-content: center; align-items: center;
        width: 50%;
    }
    .body_login_item input{
        border: none; outline: none;
        width: 100%;
        margin-left: 1rem;
    }
    .footer_login{
        width: 60%;
        padding-top: 1rem;
        display: flex; justify-content: space-around; align-items: center;
    }
</style>