import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Paractiice from '../components/paractiice.vue';
import parref from '../components/parref.vue';

// DEFINE ROUTES
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, // ✅ fixed 'Component' → 'component'
  },
  {
    path: '/paractiice',
    name: 'Paractiice',
    component: Paractiice, // ✅ fixed 'Component' → 'component'
  },
  {path:'/parref',
    name:'parref',
    component:parref,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
