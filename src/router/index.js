import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/home/Home.vue'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Find = () => import('../views/find/Find')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/find',
    name: 'find',
    component: Find
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/detail/:iid',
    name: 'detail',
    component: Detail
  }
  //{
  //  path: '/About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  //}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
