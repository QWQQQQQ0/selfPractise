<template>
  <article-detail :is-edit="false" data-VWW="|views|example|create|.vue"/>
</template>

<script>
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'CreateArticle',
  components: { ArticleDetail }
}
</script>

