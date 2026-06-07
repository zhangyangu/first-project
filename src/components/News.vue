<template>
  <div class="news">
    <h1>新闻动态</h1>
    <ul>
      <li>2026-06-01：Vue3 正式成为主流框架</li>
      <li>2026-06-05：Vite 构建速度再升级</li>
      <li>2026-06-07：你正在学习 Vue 路由！</li>
    </ul>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.news {
  padding: 30px;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}
li {
  padding: 8px;
  border-bottom: 1px solid #eee;
}
RouterLink {
  display: inline-block;
  margin-top: 20px;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
</style>