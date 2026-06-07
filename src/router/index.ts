import {createRouter,createWebHistory} from 'vue-router'
import About from '../components/About.vue'
import News from '../components/News.vue'
import home from '../components/home.vue'
const router = createRouter({
    history:createWebHistory(),
routes:[
    {
        path:'/about',
        component: About,
    },
    {
        path:'/news',
        component:News
    },
    {
        path:'/',
        component:home
    }
]
})

export default router