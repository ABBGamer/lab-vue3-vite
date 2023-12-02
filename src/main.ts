import './assets/main.css'
import {createApp} from 'vue'
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
        defaultTheme: window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light',
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
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.mount('#app')
