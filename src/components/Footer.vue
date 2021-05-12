<template>
   <div class="footer-container">
    <div class="social-footer">
      <ul>
        <li>
          <a href=""><i class="fab fa-instagram"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-linkedin-in"></i></a>
        </li>
        <li>
          <a href=""><i class="fab fa-github"></i></a>
        </li>
      </ul>
      
    </div>
    
    <footer>
      
      <nav>
        <ul>
          <li><a href="">Projects</a></li>
          <li><a href="">Skills</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
      <img src="../assets/logo.png" alt="" class="logo" />
    </footer>
   
  </div>
   <div class="copyright">
        <p>All rights reseved</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.footer-container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}
.footer-container .logo{
  width: 80px;
}
.copyright{
  color:white;
  display:flex;
  justify-content: center;
  background: #181818;
  font-size: 0.6em;
}
.social-footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}
.social-footer ul{
  display: flex;
}
.social-footer ul a{
  display: block;
  padding: 0 1em;
}
@media only screen and (min-width: 1050px){
  .footer-container{
    display: grid;
    grid-template-columns: auto 66%;
    background: unset;
    justify-content: unset;
    align-items: unset;
    height: 80px;
  }
  .footer-container .logo{
 
    width: 180px;
  }
  footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer ul{
    display: flex;
  }
  footer ul a{
    display: block;
    padding: 0 1em;
  }
  .social-footer{
    background: unset;
    justify-content: center;
 
  }
  .social-footer ul li a {
       color: #181818;
  }
  footer{
    background: #181818;
  }
  
}
</style>