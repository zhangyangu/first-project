<script setup>
import { newsArticles } from '../data/news'
</script>

<template>
  <div class="news-list">
    <div class="cards">
      <article v-for="article in newsArticles" :key="article.id" class="card">
        <p class="meta">{{ article.category }} · {{ article.date }}</p>
        <h3>{{ article.title }}</h3>
        <p class="summary">{{ article.summary }}</p>
        <RouterLink class="detail-link" :to="`/news/article/${article.id}`">查看详情</RouterLink>
      </article>
    </div>
  </div>
</template>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.card {
  padding: 18px;
  border-radius: 18px;
  border: 1px solid rgba(148, 163, 184, 0.2);
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.92), rgba(255, 255, 255, 0.96));
  display: grid;
  gap: 12px;
}

.meta {
  margin: 0;
  color: #64748b;
  font-size: 0.92rem;
}

h3 {
  margin: 0;
  font-size: 1.08rem;
}

.summary {
  margin: 0;
  color: #475569;
  line-height: 1.7;
}

.detail-link {
  justify-self: start;
  text-decoration: none;
  font-weight: 700;
  color: #4f46e5;
}

@media (max-width: 900px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
</style>
