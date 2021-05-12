<template>
<div class="admin">
    <div class="title">
        <h1>Manage Projects</h1>
        <button class="logout" @click="logout"> <i class="fas fa-sign-out-alt"></i></button>
    </div>
    <div class="content">
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
            <div class="project-list" v-for="{id,title,description,subtitle,img} in projects" :key="id">
            <div class="desc"> 
                <h1>{{title}}</h1>
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
        
    </div>
</div>
   

</template>

<script>
import firebase from 'firebase';
import {useRouter} from 'vue-router';
import {useLoadProjects,createProject,deleteProject} from '../main';
import { reactive } from 'vue'
export default {
  setup() {
    const projects = useLoadProjects();
    const form = reactive({ title: '', description: '',subtitle:'',img:'' })
    const onSubmit = async () => {
      await createProject({ ...form })
      form.title = ''
      form.description = ''
      form.subtitle = ''
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

      return {projects,logout,form, onSubmit,deleteProject }
  }
}
</script>

<style>
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
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
}
.project-list{
    background-color: white;
    width:450px;
    padding: 3em;
    margin: 2em 0;
    border-radius: 10px;
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
    width: 50px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
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
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

    }
    .project-list{
        margin-top: 0;
    }
}

</style>