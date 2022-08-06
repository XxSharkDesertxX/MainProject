<template>
    <div class="container_load">
            <div class="box_loader"></div>
            
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="css">
    .container_load{
        width: 100%; height: 100vh;
        position: absolute;
        top: 0;
        display: flex; justify-content: center; align-items: center;
        box-sizing: border-box;
    }
    .box_loader{
        width: 10rem; height: 10rem;
        border-radius: 50%;
        animation: rotateloder 1s linear infinite alternate;

    }
    @keyframes rotateloder {
        from{
        box-shadow: 0px 0px 3px 6px rgb(170, 170, 170);
        }to{
            background: rgba(238, 238, 238,.6);
        }
    }
</style>