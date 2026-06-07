<template>
  <section class="view-card about-view">
    <div>
      <p class="eyebrow">About</p>
      <h2>关于这套路由练习</h2>
      <p class="lead">
        这个练习页面不只是“点按钮切页面”，而是刻意把路由常见能力放进来，方便你一边看界面一边理解 Vue Router 的工作方式。
      </p>
    </div>

    <ul class="checklist">
      <li>顶层导航和当前路由高亮</li>
      <li>新闻列表到详情页的动态参数跳转</li>
      <li>嵌套路由和默认子路由</li>
      <li>不存在路径的 404 兜底</li>
    </ul>

    <RouterLink class="back-link" to="/home">返回首页</RouterLink>
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

.checklist {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 12px;
}

.checklist li {
  padding: 14px 16px;
  border-radius: 16px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(241, 245, 249, 0.78);
}

.back-link {
  justify-self: start;
  text-decoration: none;
  border-radius: 999px;
  padding: 11px 18px;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}
</style>
