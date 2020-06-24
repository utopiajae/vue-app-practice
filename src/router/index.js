import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    children: [
      {
        path: "/",
        redirect: 'home'
      },
      {
        path: "/home",
        name: 'home',
        component: () => import('../views/Home.vue')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/Order.vue')
      },
      {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守衛
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path === '/login') {
    next();
  } else {
    // 是否登入狀態
    isLogin ? next() : next('login');
  }
})

export default router
