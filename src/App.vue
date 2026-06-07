<script setup>
import {RouterView,useRouter}from 'vue-router'
const router =useRouter()
function xinwen() {
  // 跳转到新闻路由，对应上面配置的 /news
  router.push('/news')
}
</script>

<template>
  <div class="app">
    <h1>ss</h1>
    <RouterView></RouterView>
    <button @click="xinwen">新闻</button>
    <router-link to="/about">
      <button>关于</button>
    </router-link>
</div>
</template>
