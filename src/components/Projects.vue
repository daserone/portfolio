<template>
 
  <section class="portfolio">
    <div v-for="{id,title,description,subtitle,img} in projects" :key="id" class="portfolio-container transition3">
      <div class="portfolio-left">
        <div class="inner">
           <p class="subtitle">{{subtitle}}</p>
            <a  class="featured-title">{{title}}</a>
            <p class="featured-desc">
             {{description}}
            </p>
        </div>
        
      </div>
      <img class="right transition2" :src="img" alt="" />
    </div>
    
  </section>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { onMounted } from 'vue';
import {useLoadProjects} from '../main'
gsap.registerPlugin(ScrollTrigger);
export default {
  components:{},
  setup(){
    
    const projects = useLoadProjects();
     onMounted(() => {
      console.log('mounted!')
      gsap.from(".transition2",{
      scrollTrigger:{
        trigger:".left",
        start:"top center"
      },
      y:50,
      opacity:0,
      stagger:.5,
      duration:3,
    })
    })
    return {projects}
  }
}
</script>

<style>
  .portfolio-container img{
  border-radius: 1em;
  margin-bottom:2em ;
}
@media only screen and (min-width: 800px){
  
  .portfolio{
    padding-top: 5em;
  }
}
@media only screen and (min-width: 1050px){
  .portfolio img{
   float: right;
    max-width: 500px;
  }  
}
</style>