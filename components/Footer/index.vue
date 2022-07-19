<template>
    <div class="footer">
        Footer
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style lang="css" scoped>
    .footer{
        height: 10vh;
        width: 100%;
         background: rgba(245, 244, 244,.5);
        position: relative;
        bottom: 0;
        display: flex; justify-content: center;
        align-items: center;
        z-index: 200;
    }   
</style>