<template>
  <div>
    <div v-for="news in newsList" :key="news.id">
      {{ news.title }}
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('news');

export default {
  computed: {
    ...mapState(['newsList']),
  },

  methods: {
    ...mapActions(['GET_NEWS_LIST']),
  },

  created() {
    this.GET_NEWS_LIST();
  },
};
</script>
