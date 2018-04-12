import Vue from 'vue';

import Router from 'vue-router';

import home from './components/home.vue';

import hero from './components/hero.vue';

Vue.use(Router);


let VueRouter = new Router({
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: home,
        },
        {
            path: '/hero',
            component: hero,
        }
    ]
});

VueRouter.beforeEach((to, from, next) => {

    next();

});

export default VueRouter;