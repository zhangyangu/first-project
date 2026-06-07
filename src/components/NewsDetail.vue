<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getArticleById, newsArticles } from '../data/news'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
})

const route = useRoute()

const article = computed(() => getArticleById(props.id))
const fallbackArticle = newsArticles[0]
</script>

<template>
  <section class="detail" v-if="article">
    <p class="meta">{{ article.category }} · {{ article.date }}</p>
    <h3>{{ article.title }}</h3>
    <p class="summary">{{ article.content }}</p>

    <div class="detail-foot">
      <RouterLink class="back-link" to="/news">返回列表</RouterLink>
      <span class="path">当前路由：{{ route.fullPath }}</span>
    </div>
  </section>

  <section class="detail empty" v-else>
    <h3>没有找到这篇文章</h3>
    <p>
      路由参数 `{{ props.id }}` 没有匹配到文章。你可以回到列表，或者先看这篇示例：
      <strong>{{ fallbackArticle.title }}</strong>
    </p>
    <div class="detail-foot">
      <RouterLink class="back-link" to="/news">返回列表</RouterLink>
      <RouterLink class="back-link secondary" :to="`/news/article/${fallbackArticle.id}`">
        打开示例
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.detail {
  margin-top: 16px;
  padding: 22px;
  border-radius: 20px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: rgba(248, 250, 252, 0.92);
  display: grid;
  gap: 14px;
}

.meta {
  margin: 0;
  color: #64748b;
}

h3 {
  margin: 0;
  font-size: 1.2rem;
}

.summary {
  margin: 0;
  line-height: 1.8;
  color: #334155;
}

.detail-foot {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
}

.back-link {
  text-decoration: none;
  border-radius: 999px;
  padding: 10px 16px;
  color: #fff;
  font-weight: 700;
  background: linear-gradient(135deg, #4f46e5, #7c3aed);
}

.back-link.secondary {
  color: #334155;
  background: rgba(226, 232, 240, 0.9);
}

.path {
  color: #64748b;
  font-size: 0.95rem;
}

.empty {
  border-style: dashed;
}
</style>
