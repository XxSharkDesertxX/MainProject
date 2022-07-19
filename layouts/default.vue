<template>
      <div> 
        <Header/>
            <div>
                <Nuxt/>
            </div>
            <Footer/>
      </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {

    }
  }
}
</script>

<style lang="css">

 *{
 font-family: 'Bebas Neue', cursive;
font-family: 'Edu SA Beginner', cursive;
font-family: 'Roboto', sans-serif;
margin: 0; padding: 0;
    }

</style>