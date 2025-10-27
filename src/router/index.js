import { createRouter, createWebHistory } from 'vue-router'

// Import pages (we’ll create them next)
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Dashboard from '../pages/Dashboard.vue' 

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    component: Dashboard, 
    meta: { requiresAuth: true } 
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Protect routes that need authentication
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('loggedInUser')

  if (to.meta.requiresAuth && !loggedIn) {
    alert('Please log in first!')
    next('/login')
  } else {
    next()
  }
})

export default router
