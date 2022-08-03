<template>
    <div class="container_admin_post">
            <div class="box_admin_post">
                    <h3>{{title}}</h3>
                    <div class="box_admin_img">
                        <img :src="img" alt="image">
                    </div>
                    <h3>{{id}}</h3>
                    <v-btn @click="removeitem">
                        remove
                    </v-btn>
            </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
      props:[
        'img',
        'title',
        'id'
    ],
    methods: {
        ...mapActions([
            'remove'
        ]),
        removeitem(){
           
           let data= window.confirm('Are You Sure For Delet Post ...??')
           
            if (data) {
                 this.remove(this.id)
            } else {
                return
            }
        }
    },
}
</script>

<style lang="css">
    .container_admin_post{
        height: auto;
        width: 50%;
        display: flex; justify-content: space-around; align-items: center;
        padding: 1rem 2rem;
    }
    .box_admin_post{
        width: 21rem; height: 10rem;
        margin: 2rem .1rem;
        text-align: center;
    }

    .box_admin_img{
        width: 100%; height: 70%;   
    }
    .box_admin_img img{
        width: 100%; height: 100%;
        object-fit: cover;
    }

</style>