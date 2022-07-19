<template>
    <div class="text_home">
            <h3>
                {{title}}
            </h3>
            <p>{{subtitle}}</p>
    </div>
</template>

<script>
export default {
    name:"TextHome",

    props:[
        "title",
        "subtitle"
    ]


}
</script>

<style lang="css" scoped>
    .text_home{
        height: 25vh;
        position: relative;
        border-bottom: 2px solid black;
        display: flex; justify-content: space-between;
        flex-direction: column;
        padding-bottom: 2rem;
        user-select: none;
    }
    .text_home h3{
        font-size: 2rem;
        margin-bottom: 1rem;
        font-weight: normal;
    }
    .text_home p{
        line-height: 1.5rem;
    }
</style>