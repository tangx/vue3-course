import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Index from '../components/Index.vue'
import About from '../components/About.vue'

import RefFunction from '../components/02_RefFunction/RefFunction.vue'
import ReactiveFunction from '../components/03_ReactiveFunction/ReactiveFunction.vue'

const routes = [
    {
        path:'/',
        component: Home
    },
    {
        path: '/index',
        component: Index,
        children: [
            {
                path: 'ref-function',
                component: RefFunction
            },
            {
                path: 'reactive-function',
                component: ReactiveFunction,
                name: "reactive-function"
            }
        ]
    },
    {
        path: '/about',
        component: About
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})


export default router

