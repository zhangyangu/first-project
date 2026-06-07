import {createRouter,createWebHistory} from 'vue-router'
import About from '../components/About.vue'

const router = createRouter({
    history:createWebHistory(),
routes:[
    {
        path:'/About',
        component: About
    }
]

})

export default router