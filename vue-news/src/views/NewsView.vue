<template>
  <div>
    <p v-for="news in newsList" :key="news.id">
      <a :href="news.url">{{ news.title }}</a>
      <small>{{ news.time_ago }} by {{ news.user }}</small>
    </p>
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
