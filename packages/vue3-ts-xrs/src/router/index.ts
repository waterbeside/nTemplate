import {createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: ()=> import('../views/Home.vue')
  },
  {
    path: '/hello',
    name: 'HelloWord',
    component: ()=> import('../views/HelloWorld.vue')
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
});
