import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/proyectos', name: 'projects', component: () => import('../views/ProyectosView.vue') },
    { path: '/habilidades', name: 'skills', component: () => import('../views/HabilidadesView.vue') },
    { path: '/experiencia', name: 'experience', component: () => import('../views/ExperienciaView.vue') },
    { path: '/contacto', name: 'contact', component: () => import('../views/ContactoView.vue') }
  ]
})

export default router