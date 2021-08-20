import { createApp } from 'vue'
import App from './App.vue'


import {
    // create naive ui
    create,
    NCard,
    NButton,
    NTag,
} from 'naive-ui'


const naive = create({
    components: [
        NButton,
        NCard,
        NTag,
    ]
})

import router from './router'

createApp(App).use(naive).use(router).mount('#app')
