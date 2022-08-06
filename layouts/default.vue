<template>
      <div> 
        <Header/>
            <div>
                <Nuxt/>
                <Lodaer v-if="loader"/>
            </div>
            <Footer/>
      </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      loader : true
    }
  },

  beforeMount() {
    this.loader= true
  },
  mounted() {
    this.loader =false
  },
}
</script>

<style lang="scss">

 *{
 font-family: 'Bebas Neue', cursive;
font-family: 'Edu SA Beginner', cursive;
font-family: 'Roboto', sans-serif;
margin: 0; padding: 0;
    }

</style>