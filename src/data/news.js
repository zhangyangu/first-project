export const newsArticles = [
  {
    id: 'vue-router-guide',
    title: 'Vue Router 入门路线图',
    category: '教程',
    date: '2026-06-07',
    summary: '从基础路由跳转开始，逐步理解导航守卫、嵌套路由和动态参数。',
    content:
      '这个练习把最常用的路由场景放到一个小站里：顶部导航、列表页、详情页、兜底页和默认重定向。你可以把它当成 Vue Router 的操作台。',
  },
  {
    id: 'nested-route-practice',
    title: '嵌套路由怎么练才顺手',
    category: '实践',
    date: '2026-06-06',
    summary: '在新闻模块里做父级布局和子级内容，让“壳”和“内容”分离。',
    content:
      '嵌套路由适合做模块化页面。父组件负责布局、标题和局部导航，子路由负责不同内容区域，这样切换子页面时外壳不会重绘。',
  },
  {
    id: 'route-ux-tips',
    title: '提升路由练习体验的小技巧',
    category: '技巧',
    date: '2026-06-05',
    summary: '加入 active 样式、404 兜底和滚动行为，让练习更接近真实项目。',
    content:
      '把路由练习做成更像真实产品的形态，能帮助你更快理解实际开发中的体验要求，也能顺手练到一些常用的路由 API。',
  },
]

export function getArticleById(id) {
  return newsArticles.find((article) => article.id === id) ?? null
}
