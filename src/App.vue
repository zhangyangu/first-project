<script setup>
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()

function xinwen() {
  router.push('/news')
}
</script>

<template>
  <div class="app-container">
    <!-- 顶部标题 -->
    <div class="header">
      <h1>我的 Vue 路由练习</h1>
      <p>默认显示首页 · 点击按钮切换页面</p>
    </div>

    <!-- 路由内容区 -->
    <div class="content-card">
      <RouterView />
    </div>

    <!-- 按钮导航区 -->
    <div class="btn-group">
      <router-link to="/news" class="btn link">新闻</router-link>
      <router-link to="/about" class="btn link">关于</router-link>
      <router-link to="/" class="btn link">首页</router-link>
    </div>
  </div>
</template>

<style scoped>
/* 全局页面样式 */
.app-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: "Microsoft Yahei", sans-serif;
}

/* 头部标题 */
.header {
  text-align: center;
  color: #fff;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 28px;
  margin: 0 0 10px;
}

.header p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

/* 内容卡片 */
.content-card {
  width: 100%;
  max-width: 600px;
  min-height: 300px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  padding: 30px;
  margin-bottom: 30px;
}

/* 按钮组 */
.btn-group {
  display: flex;
  gap: 15px;
}

/* 按钮样式 */
.btn {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn.primary {
  background: #42b983;
  color: #fff;
}

.btn.primary:hover {
  background: #359e75;
  transform: translateY(-2px);
}

.btn.link {
  background: #fff;
  color: #333;
  border: 1px solid #ddd;
}

.btn.link:hover {
  border-color: #42b983;
  color: #42b983;
  transform: translateY(-2px);
}
</style>