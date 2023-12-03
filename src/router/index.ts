import {createRouter, createWebHistory} from 'vue-router'
import PageContent from "@/components/PageContent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageContent
        },
        {
            path: '/news',
            name: 'one-news',
            component: () => import('../views/NewsView/NewsView.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
