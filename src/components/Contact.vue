<template>
      <div class="container">
           <div class="contact">
            <h1>Contact us <i class="fas fa-mail-bulk"></i></h1>
            <form @submit.prevent="onSubmit">
                <div>
                    <label>Name</label>
                    <input v-model="form.name" required />
                </div>

                <div>
                    <label>E-mail</label>
                    <input
                    v-model="form.email"
                    
                    type="email"
                    required
                    />
                </div>
                 <div>
                    <label>Message</label>
                   
                    <textarea 
                    v-model="form.message" required cols="30" rows="8"></textarea>
                </div>

                <button type="submit" class="btn btn-success mt-3">
                    Send
                </button>
            </form>
        </div>
      </div>
</template>

<script>
import {sendContact} from '../main';
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ name: '', email: '',message:''})
    const onSubmit = async () => {
      await sendContact({ ...form })
      form.name = ''
      form.email = ''
      form.message = ''
    }
    

      return {form, onSubmit }
  }
}
</script>

<style >
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact{
    text-align: center;
    color: #7018F6;
  }
   form{
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 1em;
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
  form textarea{
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
  form textarea:hover,form textarea:active{
    border: 1px solid #7018f6;
    background-color:  rgb(216, 216, 216);
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