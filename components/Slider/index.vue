<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: `${require(`@/static/image_logo/3.jpg`)}`
          },
          {
            src: `${require(`@/static/image_logo/2.jpg`)}`,
          },
          {
            src: `${require(`@/static/image_logo/5.jpg`)}`,
          },
          {
            src: `${require(`@/static/image_logo/4.jpg`)}`,
          },
        ],
      }
    },
  }
</script>

<style>

</style>