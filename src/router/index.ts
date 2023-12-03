import {createRouter, createWebHistory} from 'vue-router'
import PageContent from "@/components/PageContent.vue";
import NewsView from "@/views/NewsView/NewsView.vue";
import AboutView from "@/views/AboutView.vue";

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
            name: 'news',
            component: NewsView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        }
    ]
})

export default router
