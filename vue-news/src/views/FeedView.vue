<template>
  <ul id="feed-list">
    <FeedItem v-for="item in feedList" :key="item.id" :feedItem="item" />
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import FeedItem from '@/components/FeedItem.vue';

export default {
  components: {
    FeedItem,
  },

  computed: {
    ...mapState('feed', ['feedList']),
  },
};
</script>
