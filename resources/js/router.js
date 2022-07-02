import { createRouter, createWebHistory } from 'vue-router'




   const routes = [
        {
            path: '/get',
            component:() => import('./components/Get'),
            name: 'get.index'
        },
       {
           path: '/user/login',
           component:() => import('./components/Login'),
           name: 'user.login'
       },
       {
           path: '/user/registration',
           component:() => import('./components/Registration'),
           name: 'user.registration'
       },

]


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes



})

export default router