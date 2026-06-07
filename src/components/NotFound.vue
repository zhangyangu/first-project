<template>
  <section class="not-found">
    <p class="eyebrow">404</p>
    <h2>这个路由不存在</h2>
    <p class="lead">你访问的页面已经离开当前练习范围，点击下面的按钮回到一个可用页面。</p>

    <div class="actions">
      <RouterLink class="primary" to="/home">回到首页</RouterLink>
      <RouterLink class="secondary" to="/news">查看新闻练习</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.not-found {
  display: grid;
  justify-items: start;
  gap: 18px;
  padding: 18px 4px;
}

.eyebrow {
  margin: 0;
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
  margin: 0;
  color: #475569;
  line-height: 1.8;
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
  background: rgba(226, 232, 240, 0.85);
}
</style>
