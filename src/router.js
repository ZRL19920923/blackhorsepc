import VueRouter from 'vue-router';

import Vue from 'vue';

import Login from '@/views/login/index.vue';

Vue.use(VueRouter)


const router = new VueRouter({
    routes:[
        {path:'/', redirect:'/login'},
        {path:'/login', name:'login', component:Login}
    ]
})

export default router