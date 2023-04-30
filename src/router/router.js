import vCatalog from '../components/v-catalog'
import vCart from  '../components/v-cart'

import { createRouter, createWebHashHistory }  from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: vCatalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart
    },
];

const router = createRouter({

    history: createWebHashHistory(),
    routes, // short for `routes: routes`
});

export default router;
