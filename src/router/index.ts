import {createRouter, createWebHistory} from 'vue-router'
import NewsView from "@/views/NewsView/NewsView.vue";
import AboutView from "@/views/AboutView.vue";
import OneNewsView from "@/views/OneNewsView/OneNewsView.vue";
import ClickerView from "@/views/ClickerView/ClickerView.vue";
import HomeView from "@/views/HomeView.vue";
import AuthView from "@/views/AuthView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView
        },
        {
            path: '/news/:id',
            name: 'one-news',
            component: OneNewsView
        },
        {
            path: '/clicker',
            name: 'clicker',
            component: ClickerView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView
        }
    ]
})

export default router
