<template>
  <section class="view-card home-view">
    <div class="intro">
      <p class="eyebrow">Home</p>
      <h2>欢迎来到首页</h2>
      <p class="lead">
        这里是路由练习的起点。你可以从这里跳转到新闻列表、查看动态文章详情，或者切换到关于页面。
      </p>
    </div>

    <div class="grid">
      <article class="feature">
        <h3>导航练习</h3>
        <p>观察顶部导航的 active 状态，理解当前路径和页面状态的对应关系。</p>
      </article>
      <article class="feature">
        <h3>动态路由</h3>
        <p>新闻详情页通过 `:id` 参数渲染不同内容，适合练习参数传递与取值。</p>
      </article>
      <article class="feature">
        <h3>404 处理</h3>
        <p>访问不存在的地址时会进入兜底页，帮助你练习路由容错。</p>
      </article>
    </div>

    <div class="actions">
      <RouterLink class="primary" to="/news">去新闻列表</RouterLink>
      <RouterLink class="secondary" to="/about">查看关于页</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.view-card {
  display: grid;
  gap: 22px;
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
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.feature {
  padding: 18px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(241, 245, 249, 0.9), rgba(255, 255, 255, 0.95));
  border: 1px solid rgba(148, 163, 184, 0.2);
}

.feature h3 {
  margin: 0 0 8px;
  font-size: 1.02rem;
}

.feature p {
  margin: 0;
  color: #475569;
  line-height: 1.7;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.actions a {
  text-decoration: none;
  border-radius: 999px;
  padding: 11px 18px;
  font-weight: 700;
}

.primary {
  color: #fff;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}

.secondary {
  color: #334155;
  background: rgba(226, 232, 240, 0.8);
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>
