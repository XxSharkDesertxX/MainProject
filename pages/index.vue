<template>
    <div>
        <header class="container_home">
           <svg>
              <text x="18%" y="65%">
                  TITLE FOR SITE
              </text>
           </svg>
           <div class="righ_arrow arrowstyle">
              <v-icon @click="rightside">
                mdi-chevron-right
              </v-icon>
           </div>
            <div class="left_arrow arrowstyle">
              <v-icon @click="rightside">
                mdi-chevron-left
              </v-icon>
           </div>
        </header>

        <main class="main_header">
              <div class="container_text">
                <TextHome :title="titleone" :subtitle="subtitleone"/>
              </div>
              <div class="container_img"> 
                  <Slider />
              </div>
              <div class="box_footer">
                     <v-icon class="icon_main">
                      mdi-instagram
                     </v-icon>
                     <v-icon class="icon_main">
                      mdi-facebook
                     </v-icon>
                     <v-icon class="icon_main">
                      mdi-whatsapp
                     </v-icon>
                       <v-icon class="icon_main">
                      mdi-github
                     </v-icon>
              </div>
        </main>

    </div>
</template>

<script>
import Slider from '@/components/Slider';

export default {
  name: 'IndexPage',
  comments:{
    Slider
  },
    data() {
      return {
        titleone:"Somting one",
        subtitleone:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem quisquam dolorem, error id, aliquam molestias hic est officiis aspernatur necessitatibus modi libero accusantium placeat ad quod in minima? Quia. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa pariatur voluptate qui exercitationem! Sint tempore reprehenderit aspernatur dolor nihil possimus a consectetur nulla! Obcaecati, cupiditate eos illum eius asperiores fuga.",

        titletow:"Title Tow:",
        item:0

      }
    },
    head(){
    return{
      title:"Home Page",
      meta:[{
        hid:"Somting",
        name:"name for site",
        content:"The Home Pages"
      }]
    }
  },

  methods: {
    rightside(){
         let data = document.querySelector('.container_home');
          let one = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
      let tow = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      let three ='https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

      if (this.item ==0) {
        data.style.backgroundImage=`url(${one})`
        data.style.animation=' headeranime 1s  alternate ';
        this.item =1;
      }else if (this.item ==1) {
        data.style.backgroundImage=`url(${tow})`
        data.style.animation=' headeranimetow 1s  alternate ';
        this.item =2;
      }else if (this.item ==2) {
        data.style.backgroundImage=`url(${three})`
        data.style.animation=' headeranimethree 1s  alternate ';
        this.item =0;
      }

    },
    left_arrow(){
          let data = document.querySelector('.container_home');
          let one = 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60';
      let tow = 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
      let three ='https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60';

      if (this.item ==0) {
        data.style.backgroundImage=`url(${one})`
        data.style.animation=' headeranimethree 1s  alternate ';
        this.item =1;
      }else if (this.item ==1) {
        data.style.backgroundImage=`url(${tow})`
        data.style.animation=' headeranimetow 1s  alternate ';
        this.item =2;
      }else if (this.item ==2) {
        data.style.backgroundImage=`url(${three})`
        data.style.animation=' headeranime 1s  alternate ';
        this.item =0;
      }
    }
  },

  // mounted() {
  //   setInterval(() => {
  //       this.cahngebg()
  //   }, 1000);
  // },
  

}
</script>
<style lang="css">
html{
  scroll-behavior: smooth;
}
  .container_home{
    min-height: 100vh;
    background-image: url('@/static/image_logo/wallpaper1.jpg');
    background-position: center;
    background-attachment: fixed;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;align-items: center;
    position: relative;
  } 
  @keyframes headeranime {
    from{
      opacity: .2;
      transform: scale(1.2);
      }to{
      opacity: 1;
      transform: scale(1);
    }
  }
    @keyframes headeranimetow {
    from{
      opacity: .2;
      transform: scale(1.2);
      }to{
    opacity: 1; 
      transform: scale(1);
    }
  }
   @keyframes headeranimethree {
    from{
      opacity: .2;
      transform: scale(1.2);
      }to{
    opacity: 1; 
      transform: scale(1);
    }
  }
  .arrowstyle{
    background: rgba(255, 255, 255,.5);
    padding: .5rem;
    border-radius: 50%;
  }
  .righ_arrow{
    position: absolute;
    top: 50%; left: .5rem;
  }
  .left_arrow{
    position: absolute;
    top: 50%;
    right: .5rem;
  }
  .title_home{
    font-size: 3.8rem;
    color: #fff;
    filter: drop-shadow(0px 2px 20px #fff);
    background-blend-mode: darken;
    letter-spacing: 1.1rem;
    font-weight: normal;
    user-select: none;
    outline: none;
  }
  .container_home img{
    width: 100%; height: 100%;
  }
  .main_header{
    min-height: 100vh;
    background-image: url('@/static/image_logo/wallpaper2.jpg');
  } 
  .main_header img{
    position: absolute;
  }
  .container_text{
    padding: 8rem 10rem 4rem 10rem;
    margin-bottom: 20vh;
  }
  .container_img{
    padding: 4rem 10rem;
    margin: 0 auto;
    background: rgba(255, 255, 255,.4);
  }
  .box_footer{
    padding: 5rem 5rem;
    margin: 0 auto;
    width: 50%;
    display: flex; justify-content: space-around; align-items: center;
  }
  .box_footer .icon_main{
    font-size: 5rem;
    color: #fff;
    cursor: pointer;  
  }
.container_home svg{
  width: 90%;
  text-align: center;
  margin: 0 auto;
  display: flex; justify-content: center; align-items: center;
}
.container_home  svg text{
    stroke: white;
    filter: drop-shadow(1px 10px 15px #fff);
    stroke-width: 1.5px;
    font-size: 5rem;
    letter-spacing: 1rem;
    fill: transparent;
    animation: fade 10s infinite linear  alternate;
    user-select: none;
    margin: 0 auto;
}
@keyframes fade{
    from{stroke-dasharray: 10% 8%;}
    to{
        stroke-dasharray: 30% 0;
        stroke-dashoffset: 80%;
    }
  }


   @media screen and (max-width:700px) {
      .container_home{
        background-size: 130% 100%;
      }
      .title_home{
        font-size: 2rem;
      }
      .main_header{
        background-size: 180% 100%;
      }
      .container_text{
        padding: 2rem 1rem;
      }
      .container_img{
        padding: 0;
      }
      .box_footer .icon_main{
        font-size: 4rem;
        margin: 0 2rem;
      }
      .container_home  svg text{
    stroke: white;
    filter: drop-shadow(1px 10px 15px #fff);
    stroke-width: 3px;
    font-size: 3rem;
    letter-spacing: 1rem;
    fill: transparent;
    animation: fade 5s infinite linear  alternate;
    user-select: none;
    position: absolute;
    right: 5rem;
}
.container_home svg{
  width: 100%;
  text-align: center;
  margin: 0 auto;
  display: flex; justify-content: center; align-items: center;
}

    }



</style>
