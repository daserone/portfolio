<template>
 <Navbar></Navbar>
  <router-view v-slot="{Component}">
    <transition  name="route" >
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>
<script>
import  Navbar from './components/Navbar'

export default ({
  components:{Navbar}
})
</script>

<style>

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: rgb(212, 212, 212);
}
ul{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
img{
  width: 100%;
}
section{
  padding: 4em 2em;
  text-align: center;
}
.featured{
  position: relative;
}
.featured::before{
  content:"";
  position: absolute;
  width: 350px;
  height: 100px;
  background-color: #4c6ae3c2;
  top: 45px;
  left: 0;
  z-index: -1;
}
.subtitle{
  text-transform: uppercase;
  font-weight: bold;
  color: #7018F6;
  letter-spacing: .2em;
  font-size: .85em;
}
.featured-title{
  color:black;
  font-weight: bold;
  font-size: 1.3em;
  margin-top: -.4em;
  display: block;
}
.featured-desc{
  color:#3B3B3B;
  margin-bottom: 3em;
  font-size: .9em;
  line-height: 1.8em;
  font-weight: 500;
}

@media only screen and (min-width: 800px){
  .featured,.portfolio{
    text-align: left;
  }
  .featured, .portfolio-container{
    display: grid;
    grid-template-columns: 40% auto;
  }
  .left, .portfolio-left{
    display: grid;
    place-content: center;

  }
  .right{
    margin-left: 2em;
    margin-top: 1em;
  }
 
}

@media only  screen and (min-width: 1250px){
  
  section{
    padding: 10em 10em 10em 10em;
  }
  
}
.route-enter-from{
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active{
  transition:all 0.5s ease-out;
}
.route-leave-to{
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active{
   transition:all 0.5s ease-in;
}
</style>
