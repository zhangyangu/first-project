<template>
  <section class="news-shell">
    <header class="news-header">
      <div>
        <p class="eyebrow">News</p>
        <h2>新闻练习区</h2>
        <p class="lead">
          这里使用嵌套路由展示文章列表与文章详情。你可以直接切换文章，也可以从详情页返回列表。
        </p>
      </div>

      <div class="news-actions">
        <RouterLink to="/news" class="ghost-link">文章列表</RouterLink>
        <RouterLink to="/news/article/vue-router-guide" class="ghost-link">示例详情</RouterLink>
      </div>
    </header>

    <RouterView />
  </section>
</template>

<style scoped>
.news-shell {
  display: grid;
  gap: 18px;
}

.news-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-end;
}

.eyebrow {
  margin: 0 0 8px;
  color: #4f46e5;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.82rem;
  font-weight: 700;
}

h2 {
  margin: 0;
  font-size: clamp(26px, 4vw, 36px);
}

.lead {
  margin-top: 10px;
  color: #475569;
  line-height: 1.8;
  max-width: 62ch;
}

.news-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.ghost-link {
  text-decoration: none;
  border-radius: 999px;
  padding: 10px 16px;
  color: #334155;
  background: rgba(226, 232, 240, 0.85);
  font-weight: 700;
}

@media (max-width: 720px) {
  .news-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
