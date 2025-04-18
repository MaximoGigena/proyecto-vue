// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../components/mainview.vue'
import ListaDeTareas from '../modules/listaTareas/components/listaDeTareas.vue'
import HelloWorld from '../modules/contador/components/HelloWorld.vue'
import registroView from '../modules/registro/views/registroView.vue'
import calculo from '../modules/calcular/views/calcularView.vue'

const routes = [
  { path: '/', name: 'Home', component: HelloWorld },
  { path: '/main', name: 'MainView', component: MainView },
  { path: '/tareas', name: 'Tareas', component: ListaDeTareas },
  { path: '/registro', name: 'registro', component: registroView },
  { path: '/calcular', name: 'calcular', component: calculo }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
