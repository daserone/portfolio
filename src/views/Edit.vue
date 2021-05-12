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
        <div>
          <label>Subtitle</label>
          <input v-model="form.subtitle" type="text" required />
        </div>
        <div>
          <label>Img</label>
          <input @change="handleImage" type="file" accept="image/*" />
          <progress id="progress" :value="img.uploadValue" max="100"></progress>
          <div >
            <img class="preview" :src="img.picture" />
          </div>
        </div>
        <button type="submit">edit Project</button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRoute,useRouter } from "vue-router";
import { getProject,updateProject } from "../main";
import firebase from "firebase";

export default {
  setup() {
    const router = useRouter();

    const route = useRoute();
    const projectId = computed(() => route.params.id);
    const form = reactive({
      title: "",
      description: "",
      subtitle: "",
      img: "",
    });
    const img = reactive({ uploadValue: 0, picture: null, imageData: null });
    onMounted(async () => {
      const project = await getProject(projectId.value);
      form.title = project.title;
      form.description = project.description;
      form.subtitle = project.subtitle;
      img.picture = project.img;
    });
    const update = async () => {
      /*  await updateProject(projectId.value,{...form})
      router.push('/admin')
      form.title=''
      form.description=''
      form.subtitle=''
      form.img='' */
      img.picture = null;
      const storageRef = firebase
        .storage()
        .ref(`${img.imageData.name}`)
        .put(img.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          img.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          img.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            img.picture = url;
            (form.img = url), console.log(url);
            submitForm();
          });
        }
      );
    };
    const submitForm = async () => {
      await updateProject(projectId.value, { ...form });
      router.push("/admin");
      form.title = "";
      form.description = "";
      form.subtitle = "";
      form.img = "";
    };
    const handleImage = (e) => {
      img.uploadValue = 0;
      img.picture = null;
      img.imageData = e.target.files[0];
    };

    return { form, update, handleImage, img };
  },
};
</script>

<style>
</style>