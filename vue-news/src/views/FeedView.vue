<template>
  <ul id="feed-list">
    <FeedItem v-for="item in feedList" :key="item.id" :feedItem="item" />
  </ul>
</template>

<script>
import { mapState } from 'vuex';
import FeedMixin from '@/mixins/FeedMixin.js';
import FeedItem from '@/components/FeedItem.vue';

export default {
  mixins: [FeedMixin],

  components: {
    FeedItem,
  },

  computed: {
    ...mapState('feed', ['feedList']),
  },
};
</script>
