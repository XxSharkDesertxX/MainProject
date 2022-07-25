<template>
    <div class="content_item">
        <div class="img_content">
             <div class="discreption_item">    
                <nuxt-link :to="`Content/${id}`" class="nuxt_link_item">
                    <h4>{{title}}</h4>
                </nuxt-link>
             </div>
                <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:"ItemContent",
    props:[
        'img',
        'title',
        'subtitle',
        'id'
    ]
}
</script>

<style lang="css">
    .content_item{
        width: 50%;
        height: 40vh;
        margin: 4rem 0;
        margin-left: 5%;
    }
    .content_item:nth-child(even){
        margin-left: 40%;
    }
    .img_content{
        width: 100%;
        height: 30vh;
        display: flex; justify-content: center; align-items: center;
        flex-direction: column;
    }
    .content_item .img_content img{
        width: 100%; height: 100%;
        object-fit: cover;
    }
    .discreption_item{
        width: 50%;
        text-align: center;
    }
    .discreption_item h4{
        margin: 1rem 0;
        font-weight: normal;
        font-size: 1.2rem;
    }
    .nuxt_link_item{
        text-decoration: none;
        color: #000;
        transition: all .6s;
    }
</style>