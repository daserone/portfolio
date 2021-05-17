<template>
<div class="admin">
    <div class="title">
        <h1>Manage Projects</h1>
        <div class="buttons">
             <button class="logout"><i class="fas fa-mail-bulk"></i> {{mails.length}}</button>
             <button class="logout" @click="logout"> <i class="fas fa-sign-out-alt"></i></button>
        </div>
       
    </div>
    <div class="content">
         <div class="mail-list">
            <h1>E-mails</h1>
            <div class="mails" v-for="{id,name,email,message} in mails" :key="id">
                <p>Client:{{name}}</p>
                <p>E-mail:{{email}}</p>
                <p>Message:{{message}}</p>
            </div>
        </div>
        <div class="create">
            <h1>Add Project <i class="far fa-plus-square"></i></h1>
            <form @submit.prevent="onSubmit">
                <div>
                    <label>Title</label>
                    <input v-model="form.title" required />
                </div>

                <div>
                    <label>Desription</label>
                    <input
                    v-model="form.description"
                    
                    type="text"
                    required
                    />
                </div>
                 <div>
                    <label>Subtitle</label>
                    <input
                    v-model="form.subtitle"
                    
                    type="text"
                    required
                    />
                </div>

                <button type="submit" class="btn btn-success mt-3">
                    Create Project
                </button>
            </form>
        </div>
        <div class="projects">
            <h1>Projects</h1>
            <div class="project-list" v-for="{id,title,description,subtitle,img} in projects" :key="id">
            <div class="desc"> 
                <h3>{{title}}</h3>
                <p>{{subtitle}}</p>
                <p>{{description}}</p>
                <img :src="img" alt="">
            </div>
           
            <div class="buttons">
                 <router-link :to="`/edit/${id}`">
              <button class="edit">
               <i class="far fa-edit"></i>
              </button>
            </router-link>
            <button class="delete" @click="deleteProject(id)">
             <i class="far fa-trash-alt"></i>
            </button>
            </div>
             
        </div>
        </div>
         <div class="skills" v-for="{id,title,description} in skills" :key="id" >
            <h1>{{title}} </h1>
            <p>{{description}}</p>
             <router-link :to="`/edit-id/${id}`">
              <button class="edit">
               <i class="far fa-edit"></i>
              </button>
            </router-link>
        </div>
    </div>
</div>
   

</template>

<script>
import firebase from 'firebase';
import {useRouter} from 'vue-router';
import {useLoadProjects,createProject,deleteProject,getEmails,getSkills} from '../main';
import { reactive,onMounted } from 'vue'
export default {
  setup() {
    const projects = useLoadProjects();
    const mails = getEmails();
    const skills =getSkills()
    const form = reactive({ title: '', description: '',subtitle:'',img:'' })
    const skillForm = reactive({ title: '', description: '' })
    
    onMounted(async () => {
  
    });
    const onSubmit = async () => {
      await createProject({ ...form })
      form.title = ''
      form.description = ''
      form.subtitle = ''
    }
    const editSkills = async () =>{
    
    }
    const router = useRouter();
    const logout = ()=> {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    alert('Successfully logged out');
                     router.replace('/login')
                })
                .catch(error => {
                    alert(error.message);
                     router.replace('/')
                });
        }

      return {projects,logout,form,skillForm,skills, onSubmit,deleteProject,mails,editSkills }
  }
}
</script>

<style scoped>
h1{
    color:#7018f6
}
.admin .content{
        display: flex;
        padding: 2em;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
}
.projects{
    display: flex;
    flex-direction: column;
    text-align: center;
}
.project-list{
    text-align: start;
    background-color: white;
    width:450px;
    padding: 3em;
    margin: 2em 0;
    border-radius: 10px;
}
.mails{
    background-color: white;
    width:450px;
    padding: 3em;
    margin: 2em 0;
    border-radius: 10px;
}
.mails:hover{
    border: 1px solid #7018f6;
}
.project-list .buttons{
    display: flex;
    justify-content: flex-end;
}
.project-list .buttons button{
    width: 100px;
    margin: 0 4px;
    padding: 5px;
}
.delete{
    background: crimson;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}
.edit{
    background:limegreen;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 5px;
}
.create form{
    display: flex;
    flex-direction: column;
}
.admin .title{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
}
.logout{
    border:none;
    padding: 10px;
    font-size: 1em;
    width: 60px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    margin-right:10px ;
}
.logout:hover,.logout:active{
    background-color: rgb(196, 196, 196);
    border: 2px solid #7018f6;
    border-radius: 5px;
    color: #7018f6;
}
@media only screen and (min-width: 1050px){
    .admin .content{
        display: flex;
        padding: 2em;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

    }
}
 form{
    display: flex;
    flex-direction: column;
    width: 400px;
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
.skills{
    background: white;
    padding: 2em;
    border-radius: 5px;
    width: 350px;
}
</style>