<template>
    <div class="img_home">
            <img src="@/static/image_logo/1.jpg" alt="">
            <v-btn> 
                    <nuxt-link to="/Content" class="nuxlink_imghome">
                        Buy$
                    </nuxt-link>
            </v-btn>
    </div>
</template>

<script>
export default {
  name: 'ImgHome',


    
}
</script>
<style lang="css">
    .img_home{
        width: 60rem;
        min-height: 60vh;
        border-radius: .5rem;
        background: rgba(243, 242, 242,.5);
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
    }
    .img_home img{
        width: 50rem;
        height: 20rem;
        border-radius: .5rem;
        object-fit: cover;
    }
    .nuxlink_imghome{
        color: #000;
        text-decoration: none;
    }
</style>
