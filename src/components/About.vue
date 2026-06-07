<template>
  <div class="about">
    <h1>关于我们</h1>
    <p>我们是一个专注于前端学习的小团队</p>
    <p>技术栈：Vue3 + Vite + Vue Router</p>
    <RouterLink to="/">返回首页</RouterLink>
  </div>
</template>

<script setup></script>

<style scoped>
.about {
  padding: 30px;
  text-align: center;
}
RouterLink {
  margin-top: 20px;
  display: inline-block;
  padding: 8px 16px;
  background: #42b983;
  color: white;
  border-radius: 6px;
  text-decoration: none;
}
</style>