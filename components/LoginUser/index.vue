<template>
    <div class="log_container">

        <div class="alert_pas" v-if="checkPassword">
            <p>Alert For Password .....</p>
        </div>

         <div class="title_login">
            <h3>Title Form Login</h3>
        </div>
        
        <div v-if="!singup">
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
                    <input type="password" placeholder="User Password" v-model="passwordtow" @keydown.enter="newUsers">
                </div>
            </div>
        </div>
        
        <div v-if="singup">
            <div>
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
            </div>
        </div>
        </div>

            <div class="footer_login">
                <div>
                    <v-btn @click="newUsers" class="button_login"> 
                        {{singup ? "SingUp" : "Login"}}
                    </v-btn>
                </div>
                <v-btn @click="chagnelog">
                    {{singup ? 'Switch SingUP' : 'Switch Login'}}
                </v-btn>

                    <div>
                        <v-icon type="button" @click="revereinfo">
                          mdi-autorenew
                        </v-icon>
                    </div>
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
            checkPassword:false
        }
    },
    computed:{
        ...mapState([
            'user'
        ]) ,
    },  
    methods: {
        revereinfo(){
            this.username=null,
            this.email=null,
            this.password=null,
            this.passwordtow=null,
            this.checkPassword = false
        },
        chagnelog(){
             return this.singup = !this.singup
        },
        ...mapActions([
            'add'
        ]),
        newUsers(){
           if (this.username && this.email && this.password && this.passwordtow) {
            if (this.password == this.passwordtow) {
                  const new_user ={
                username:this.username,
                email : this.email,
                password : this.password,
                id:this.user.length,
                middleware:true
            }    
            this.username=null,
            this.email=null,
            this.password=null,
            this.passwordtow=null
            this.add(new_user);
            this.checkPassword = false
            alert('Wellcome ...');
            }else{
                return this.checkPassword = true
            }
           }
        }
    },
}
</script>

<style lang="css">
    .log_container{
        width: 70%;
        height: 50%;
        transition: all .6s;
    }
    .log_container:hover{
        filter: drop-shadow(1px 2px 10px black);
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
        transition: all .3s .3s;
        border-bottom: 1px solid transparent;
        padding-bottom: .5rem;
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
    .alert_pas{
        margin-bottom: 1rem;
        color:rgb(223, 35, 35);
    }
    .footer_login .button_login{
        color: green;
    }
</style>