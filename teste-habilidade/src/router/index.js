import { createRouter, createWebHistory } from 'vue-router'
import Pagina1 from '../views/Pagina1.vue'
import Pagina2Vue from '../views/Pagina2.vue'
import Pagina3Vue from '../views/Pagina3.vue'

const routes = [
  {
    path: '/',
    name: '',
    component:Pagina1
  },
  {
    path: '/pagina2',
    name: 'Pagina2',

    component: () => import(/* webpackChunkName: "pagina2" */ '../views/Pagina2.vue')
  },

 {
  path: '/pagina3',
  name: 'Pagina3',

  component: () => import(/* webpackChunkName: "pagina3" */ '../views/Pagina3.vue')
},

{
 path: '/pagina4',
 name: 'Pagina4',

 component: () => import(/* webpackChunkName: "pagina4" */ '../views/Pagina4.vue')
},

]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
