import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../components/home.vue')
const About = () => import('../components/About.vue')
const News = () => import('../components/News.vue')
const NewsList = () => import('../components/NewsList.vue')
const NewsDetail = () => import('../components/NewsDetail.vue')
const NotFound = () => import('../components/NotFound.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/news',
      component: News,
      children: [
        {
          path: '',
          name: 'news-list',
          component: NewsList,
        },
        {
          path: 'article/:id',
          name: 'news-detail',
          component: NewsDetail,
          props: true,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
  ],
})

export default router
