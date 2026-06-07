<template>
  <div class="home">
    <h1>欢迎来到首页</h1>
    <p>这是 Vue3 + Vue Router 的练习项目</p>
    <div class="nav">
      <RouterLink to="/about">关于我们</RouterLink>
      <RouterLink to="/news">新闻动态</RouterLink>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.home {
  padding: 30px;
  text-align: center;
}
.nav {
  margin-top: 20px;
}
RouterLink {
  display: inline-block;
  margin: 0 10px;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
</style>