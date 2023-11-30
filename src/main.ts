import './assets/main.css'
import {createApp, reactive} from 'vue'
import {createPinia} from 'pinia'
import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                colors: {
                    primary: '#1867C0',
                    secondary: '#5CBBF6',
                },
            },
        },
    },
    icons: {
        defaultSet: 'mdi',
    }
})

const state = reactive({
    is_mobile: false
});
const htmlElement = document.querySelector("html") as HTMLElement;

if (!window.navigator.userAgent.includes('Mobile')) {
    htmlElement.id = "is_desktop";
    state.is_mobile = false;
} else {
    htmlElement.id = "is_mobile";
    state.is_mobile = true;
}


app.provide('state', state.is_mobile);

console.log('init app', state)
app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')
