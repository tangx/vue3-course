import { createApp } from 'vue'
import App from './App.vue'


import {
    // create naive ui
    create,
    NCard,
    NButton
} from 'naive-ui'


const naive = create({
    components: [NButton, NCard]
})


createApp(App).use(naive).mount('#app')
