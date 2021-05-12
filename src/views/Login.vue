<template>
  <div class="login">   
  <form @submit.prevent="Login">     
    <h2>Login</h2>  
    <label for="email">E-mail</label>   
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
        <label for="password">Password</label>   

    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Login
    </button>   
  </form> 
</div>
</template>

<script>
import firebase from 'firebase';
import {onBeforeMount} from 'vue';
import {useRouter,useRoute} from 'vue-router'
import {ref} from 'vue'
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        
        const email = ref('');
        const password = ref('');
        
        onBeforeMount(()=>{
            firebase.auth().onAuthStateChanged((user)=>{
                if(user){
                    if(route.path== '/login'){
                        router.replace('/admin')
                    }
                    
                }
            })
        });

        const Login = () =>{
            firebase
            .auth()
            .signInWithEmailAndPassword(email.value,password.value)
            .then(data=>console.log(data))
            .catch(err=>alert(err.message))
        };

        return {email,password,Login}
    }

}
</script>

<style>
  .login{
    display: flex;
    justify-content: center;
    align-items:center;
    height: 81.8vh;
  }
  .login h2{
    color: #7018F6;
    font-size: 3em;
  }
  form{
    display: flex;
    flex-direction: column;
    width: 400px;
    background-color: white;
    padding: 3em;
    border-radius: 10px;
  }
  form input{
    margin: 1em 0;
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border: 1px solid  black; 
    border-radius: 5px;
    filter: none;
    width: 94%;
  }
  form button{
    border: none;
    background-color: #7018F6;
    color: whitesmoke;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  form input:hover,form input:active{
    border: 1px solid #7018f6;
    background-color:  rgb(216, 216, 216);
  }
  form button:hover,form button:active{
    background-color: #5305c9;
    border:1px solid #7018f6;
  }
  *:focus{
    outline: none;
  }
@-webkit-keyframes autofill {
    0%,100% {
        color: #666;
        background: white;
    }
}

input:-webkit-autofill {
    -webkit-animation-delay: 1s; /* Safari support - any positive time runs instantly */
    -webkit-animation-name: autofill;
    -webkit-animation-fill-mode: both;
}
</style>