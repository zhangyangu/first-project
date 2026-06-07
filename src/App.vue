<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()

const navItems = [
  { label: '首页', to: '/home' },
  { label: '新闻', to: '/news' },
  { label: '关于', to: '/about' },
]
</script>

<template>
  <div class="app-shell">
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Vue Router Practice</p>
        <h1>路由练习工作台</h1>
        <p class="summary">
          用一个更完整的小站练习导航高亮、嵌套路由、动态参数和 404 跳转。
        </p>
      </div>

      <div class="route-chip">
        当前路径
        <strong>{{ route.path }}</strong>
      </div>
    </header>

    <nav class="nav">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="nav-link"
        active-class="is-active"
      >
        {{ item.label }}
      </RouterLink>
    </nav>

    <main class="stage">
      <RouterView v-slot="{ Component, route: matchedRoute }">
        <transition name="fade-slide" mode="out-in">
          <component :is="Component" :key="matchedRoute.fullPath" />
        </transition>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  padding: 32px;
  display: grid;
  gap: 20px;
  background:
    radial-gradient(circle at top left, rgba(91, 140, 255, 0.22), transparent 28%),
    radial-gradient(circle at top right, rgba(124, 58, 237, 0.18), transparent 24%),
    linear-gradient(180deg, #f8fbff 0%, #eef2ff 100%);
}

.hero {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  padding: 24px 28px;
  border: 1px solid rgba(117, 134, 180, 0.18);
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(18px);
  box-shadow: 0 24px 60px rgba(49, 56, 119, 0.12);
}

.hero-copy h1 {
  margin: 8px 0 10px;
  font-size: clamp(32px, 5vw, 52px);
  line-height: 1.05;
}

.eyebrow {
  margin: 0;
  font-size: 0.85rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #4f46e5;
  font-weight: 700;
}

.summary {
  max-width: 56ch;
  color: #475569;
}

.route-chip {
  min-width: 220px;
  padding: 14px 16px;
  border-radius: 18px;
  background: linear-gradient(135deg, #1d4ed8, #7c3aed);
  color: #fff;
  display: grid;
  gap: 6px;
  box-shadow: 0 18px 36px rgba(79, 70, 229, 0.28);
}

.route-chip strong {
  font-size: 1rem;
  word-break: break-all;
}

.nav {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-link {
  text-decoration: none;
  color: #334155;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 999px;
  padding: 10px 18px;
  font-weight: 600;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    border-color 0.2s ease,
    color 0.2s ease;
}

.nav-link:hover {
  transform: translateY(-1px);
  border-color: rgba(79, 70, 229, 0.35);
  color: #4f46e5;
}

.nav-link.is-active {
  color: #fff;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
  border-color: transparent;
  box-shadow: 0 16px 28px rgba(99, 102, 241, 0.28);
}

.stage {
  border-radius: 28px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.82);
  border: 1px solid rgba(117, 134, 180, 0.16);
  box-shadow: 0 20px 54px rgba(30, 41, 59, 0.1);
  min-height: 420px;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 720px) {
  .app-shell {
    padding: 18px;
  }

  .hero {
    align-items: flex-start;
    flex-direction: column;
  }

  .route-chip {
    width: 100%;
  }

  .stage {
    padding: 18px;
  }
}
</style>
