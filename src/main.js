import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import  firebase from 'firebase';

import {ref,onUnmounted} from 'vue'

const firebaseConfig = {
    apiKey: "AIzaSyCM_q3JxoFLzKncWWDOTX9Rr-yqaUKwdK0",
    authDomain: "porfolio-app-90baa.firebaseapp.com",
    projectId: "porfolio-app-90baa",
    storageBucket: "porfolio-app-90baa.appspot.com",
    messagingSenderId: "662487343391",
    appId: "1:662487343391:web:b76979a64adcf4b699902a",
    measurementId: "G-KW35XECFSQ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const projectsCollection = db.collection('projects');
const contactCollection = db.collection('contact');
const skillsCollections = db.collection('skills');


export const createProject = project => {
    return projectsCollection.add(project)
}
export const sendContact = contact => {
    return contactCollection.add(contact)
}

export const getProject = async id => {
    const project = await projectsCollection.doc(id).get()
    return project.exists? project.data()  :null
}
export const getSkill = async id => {
    const skill = await skillsCollections.doc(id).get()
    return skill.exists? skill.data()  :null
}

export const updateProject = (id,project) => {
    return projectsCollection.doc(id).update(project)
}
export const updateSkills = (id,skill) => {
    return skillsCollections.doc(id).update(skill)
}
export const deleteProject = id => {
    return projectsCollection.doc(id).delete()
}

export const useLoadProjects = () => {
    const projects = ref([]);
    projectsCollection.onSnapshot(snapshot => {
        projects.value = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
    });
    onUnmounted(close)
    return projects
}
export const getEmails = () => {
    const emails = ref([]);
    contactCollection.onSnapshot(snapshot => {
        emails.value = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
    });
    onUnmounted(close)
    return emails
}
export const getSkills = () => {
    const skills = ref([]);
    skillsCollections.onSnapshot(snapshot => {
        skills.value = snapshot.docs.map(doc => ({id:doc.id,...doc.data()}))
    });
    onUnmounted(close)
    return skills
}

createApp(App).use(router).mount('#app')
