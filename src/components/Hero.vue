<template>
    <div class="hero">
    <transition-group tag='div' class="content"
    appear
    @before-enter='beforeEnter'
    @enter='enter'
    >
      <h1 key='keyName1'>Daniel Ramírez,</h1>
      <h1 key='keyName2'>Front end Web Developer</h1>
      <div class="meet" key='keyName3'>
        <span><i class="fas fa-angle-double-down"></i></span>
        <p>Know more</p>
      </div>
      
    </transition-group>
    <transition
      appear
      name='fade'
      @before-enter='beforeSingle'
      @enter='enterSingle'>
      <img src="../assets/logo.png" alt="" class="logo2" />
    </transition>
    
  </div>
</template>

<script>
import gsap from "gsap";
export default {
    setup() {
   
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
      },'-=1.3');
    };
    const beforeSingle = (el) => {
      el.style.opacity = 0;
      el.style.transform = "translateX(300px)";
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
    return { enter, beforeEnter,beforeSingle,enterSingle };
  },
}
</script>

<style>
.hero{
  background-color: #252525;
  color: whitesmoke;
  display: grid;
  text-align: center;
  padding: 4em;
}
.meet {
  display: flex;
  margin: 0 auto;
  width: 200px;
  font-weight: bold;
  color:#7018F6 ;
}
.meet span{
  margin: 1em 0.5em 0 0;
}
@media only screen and (min-width: 1050px){
  .hero{
    height: 100%;
  }
  section{
    padding: 4em;
  }
  .hero{
    display: grid;
    grid-template-columns: 66% auto;
    background-color: unset;
    padding: 0;
  }
  .hero .content{
    background-color: #252525;
    padding: 8em 8em 6em 4em;
    text-align: left;
  }
  .hero .content h1{
    font-size: 3em;
    line-height: 1.2em;
  }
  .meet{
    margin: unset;
  }
  .logo2{
    display: unset;
    margin-left: -53%;
    margin-top: 35%;
    width: 100%;
  }
}

@media only  screen and (min-width: 1250px){
  .hero .content{
    display: flex;
    justify-content: center;
    justify-items: center;
    align-items: flex-start;
    flex-direction: column;
  }
}

</style>