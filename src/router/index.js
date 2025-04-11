// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/mainview.vue'
import ListaDeTareas from '../components/listaDeTareas.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', name: 'Home', component: HelloWorld },
  { path: '/main', name: 'MainView', component: MainView },
  { path: '/tareas', name: 'Tareas', component: ListaDeTareas }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
