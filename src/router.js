import Vue from 'vue';
import VueRouter from 'vue-router';

import HTML from './pages/HTML.vue';
import CSS from './pages/CSS.vue';
import JavaScript from './pages/JavaScript.vue';
import Laravel from './pages/Laravel.vue';
import VueCode from './pages/VueCode.vue';


Vue.use(VueRouter);



const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/CSS/:id',
            component: CSS,
            name: 'CSS',
        },
        {
            path: '/HTML/:id',
            component: HTML,
            name: 'HTML',
        },
        {
            path: '/JavaScript/:id',
            component: JavaScript,
            name: 'JavaScript',
        },
        {
            path: '/Laravel/:id',
            component: Laravel,
            name: 'Laravel',
        },
        {
            path: '/Vue/:id',
            component: VueCode,
            name: 'Vue',
        },
    ]
});

export default router;