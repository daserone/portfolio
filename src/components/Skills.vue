<template>
   <section class="skills">
    <div class="skills-container">
      <div class="skills-details"  v-for="{id,title,description} in skills" :key="id" >
        <div class="dada" v-if="skills.length">
                <h1 class="skills-title">{{title}}</h1>
        <p>{{description}}</p>
        </div>
  
      </div>
      <div class="container">
        <div class="content" ref='content'></div>
      </div>

    </div>
  </section>
</template>

<script>
import TagCloud from 'TagCloud';
import { onMounted } from 'vue';
import {getSkills} from '../main'
export default {
 setup(){
   const skills = getSkills()
    const myTags = [
      'JavaScript', 'CSS', 'HTML',
      'Angular', 'VUE',
      'TypeScript','Wordpress','Node.js','Git'
    ];

    onMounted(()=>{
        TagCloud('.content', myTags,{

    // radius in px
    radius: 150,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,
    
    // interact with cursor move on mouse out
    keep: true
    
      });
    });
    
  return { skills }
  }
}
</script>

<style >
.skills{
  height: 82vh;
  padding: 0;
}
.skill-title{
  font-weight: bold;
}

.skills-container{
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
@media only screen and (min-width: 1050px){
  .skills-container{
    flex-direction: row;
    justify-content: space-around;
  }
}
.tagcloud {
  font-size: 16px;
}

.tagcloud--item {
  padding: 2px 4px;
  background-color: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: #7018F6;
}

.tagcloud--item:hover {
  background-color: rgba(0,0,0,.1);
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 5px;
  opacity: 1 !important;
  z-index: 100 !important;
}

.light .tagcloud--item {
  color: #fff;
}

.light .tagcloud--item:hover {
  background-color: rgba(255,255,255,.1);
  border: 1px solid #fff;
}
</style>