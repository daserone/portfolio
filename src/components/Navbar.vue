<template>
  <div class="nav-container">
    <header>
      <transition
      appear
      name='fade'
      @before-enter='beforeSingle'
      @enter='enterSingle'
      >
      <router-link to="/"><img src="../assets/logo.png" alt="" class="logo" /></router-link>
      
      </transition>
      
      <nav>
        <transition-group
          appear
          tag="ul"
          @before-enter="beforeEnter"
          @enter="enter"
        >
          <li v-for="(link, i) in links" :key="link.name" :data-index2="i">
            <router-link :to="link.url">{{ link.name }}</router-link>
          </li>
        </transition-group>
      </nav>
    </header>
    <div class="social-header">
      <div class="social">
           <transition-group
        appear
        tag="ul"
        @before-enter="beforeEnter"
        @enter="enter"
      >
        <li v-for="(icon, i) in icons" :key="icon.name" :data-index="i">
          <a :href="icon.url" target="_blank" ><i :class="icon.class"></i></a>
        </li>
        
      </transition-group>
      </div>
      <div class="admin">
         <router-link to="/login"><i class="fas fa-user-cog"></i></router-link>
      </div>
   
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";
export default {
  setup() {
    const icons = ref([
      {
        name: "github",
        url: "https://github.com/daserone",
        class: "fab fa-github",
      },
      {
        name: "instagram",
        url: "https://www.instagram.com/daserdesign/",
        class: "fab fa-instagram",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/josé-daniel-ramírez-13254a1ab",
        class: "fab fa-linkedin-in",
      },
    ]);
    const links = ref([
      { name: "Projects", url: "/projects" },
      { name: "Skills", url: "/skills" },
      { name: "Contact", url: "/contact" },
    ]);
    const tl = gsap.timeline()
    const beforeEnter = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateY(100px)";
    };
    const enter = (el, done) => {
      tl.to(el, {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.8,
        ease: "back.out",
        onComplete: done,
        delay: el.dataset.index * 0.1,
      },'-=1.3');
    };
    const beforeSingle = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(-300px)";
    };
    const enterSingle = (el, done) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "back.out",
        onComplete: done,
      });
    };
    return { enter, beforeEnter, icons, links,beforeSingle,enterSingle };
  },
};
</script>

<style>
.nav-container,.footer-container{
  background: #181818;
  
}

.nav-container a,.footer-container a{
  color: white;
}
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 1em;
}

header .logo{
  height: 100px;
  width: 150px;
}
header  ul{
  display: flex;
}
header  ul a{
  display: block;
  padding: 0 1em;
}
.social-header, .logo2,footer{
  display: none;
}
@media only screen and (min-width: 1050px){
   .nav-container{
    position: relative;
    display: grid;
    grid-template-columns: 66% auto;
    background-color: unset;
    font-size: 1.5em;
  }
   header{
    background-color: #181818;
    display: flex;
    justify-content: space-between;
  }
  
  .social-header{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
   .social-header ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    width: 7em;
    float: right;
  }
  .social-header ul li a i{
    color: black;
    margin: 10px;
  }
}

@media only  screen and (min-width: 1250px){
  header{
   padding: 0 2em 0 8em;
  }
}
</style>