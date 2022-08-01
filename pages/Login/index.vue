<template>
    <div class="lgoin_user">
        <LoginUser/>
        <img src="@/static/image_logo/Logo2.png" alt="logologin">
    </div>
</template>

<script>
export default {
    name:"Login",
    middleware:'admin',
    head(){
        return{
            title:"Login",
            meta:[{
                hid:"somting for login",
                name:"Login page",
                content:"the content for login"
            }]
        }
    },
}
</script>

<style lang="css">
    .lgoin_user{
        min-height: 90vh;
        display: flex; justify-content: center; align-items: center;
        flex-wrap: wrap-reverse;
    }
</style>