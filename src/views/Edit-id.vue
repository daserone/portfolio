<template>
    <div class="edit-page">
    <div class="create">
      <h1>Edit Project <i class="far fa-plus-square"></i></h1>
      <form @submit.prevent="update">
        <div>
          <label>Title</label>
          <input v-model="form.title" required />
        </div>

        <div>
          <label>Desription</label>
          <input v-model="form.description" type="text" required />
        </div>
      
        <button type="submit">edit Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getSkill, updateSkills } from "../main";
export default {
 setup() {
    const router = useRouter();

    const route = useRoute();
    const skillId = computed(() => route.params.id);
    const form = reactive({
      title: "",
      description: "",
    });
    onMounted(async () => {
      const project = await getSkill(skillId.value);
      form.title = project.title;
      form.description = project.description;
    });
    const update = async () => {
      await updateSkills(skillId.value, { ...form });
      router.push("/admin");
      form.title = "";
      form.description = "";
    };


    return { form, update };
  },
}
</script>

<style>
.edit-page{
  display: flex;
  justify-content: center;
  height: 82vh;
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
</style>