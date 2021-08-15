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


createApp(App).use(naive).mount('#app')
