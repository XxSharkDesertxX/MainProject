<template>
    <div class="content_item">
             <div class="discreption_item">    
                    <nuxt-link :to="`Content/${id}`" class="nuxt_link_item">
                    <img :src="img" alt="image">
                </nuxt-link>
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
        width: 20%;
        height: 50vh;
        display: flex; justify-content: center;
        transition: all .6s;
    }
    .discreption_item{
        width: 20%;
        height: 100%;
        transition: all .6s;
        filter: drop-shadow(1px 2px 9px black);
    }
    .content_item:hover{
        width: 100%;
        transform: scale(1.1);
    }
    .content_item:hover .discreption_item{
        width: 70%;
        filter: drop-shadow(0px 0px 0px white);

    }
    .nuxt_link_item{
        width: 100%;
        height: 100%;
    }
    .nuxt_link_item img{
        width: 100%; height: 50vh;
        object-fit: cover;
        border-radius: .5rem;
        overflow: hidden;
    }
</style>