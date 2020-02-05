import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import jointhemovement from '../views/jointhemovement.vue'
import register from '../components/Register.vue'
import questions from '../components/Questions.vue'
import dashboard from '../views/Dashboard_vol.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jointhemovement',
    name: 'jointhemovement',
    component: jointhemovement
  },
  {
    path: '/register/:ID/:Email',
    name: 'register',
    component: register
  },
  {
    path: '/questions/:ID/:Email',
    name: 'questions',
    component: questions
  },
  {
    path: "/dashboard/:Email",
    name: "dashboard",
    component: dashboard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
