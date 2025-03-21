import { createRouter,createWebHistory } from 'vue-router';

import errorPageImport from '@/views/errorPageImport.vue';

const routes = [
    { 
        path: '/',
        name:'home', 
        component: async () => { try {
            const ml = await import('@/views/home.vue');
            return ml;
        } catch (e) {
            console.log(e);
            return errorPageImport;
        }}
    },

    { 
        path: '/test',
        name:'test', 
        component: async () => { try {
            const ml = await import('@/views/test.vue');
            return ml;
        } catch (e) {
            console.log(e);
            return errorPageImport;
        }}
    },

    { 
        path: '/chart',
        name:'chart', 
        component: async () => { try {
            const ml = await import('@/views/chart.vue');
            return ml;
        } catch (e) {
            console.log(e);
            return errorPageImport;
        }}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

router.onError((e,to,from)=>{
    console.log("errrrrrrrrr",e,from,to);
})

router.beforeEach((to,from,next)=>{
    document.showLoading();
    document.hideAllDropDown();
    next();
})

router.beforeResolve((to,from,next)=>{
    document.hideLoading();
    next();
})

export {router};