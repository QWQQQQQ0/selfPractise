<template>
  <article-detail :is-edit="true" data-VWW="|views|example|edit|.vue"/>
</template>

<script>
import ArticleDetail from './components/ArticleDetail'

export default {
  name: 'EditForm',
  components: { ArticleDetail }
}
</script>

