import { h } from 'vue';
import { mapActions } from 'vuex';
import FeedView from '@/views/FeedView.vue';

function createFeedView(feedName) {
  return {
    methods: {
      ...mapActions('feed', ['GET_FEED_LIST']),
    },

    created() {
      this.emitter.emit('startSpinner');
      this.GET_FEED_LIST(feedName)
        .then(() => {
          this.emitter.emit('endSpinner');
        })
        .catch(error => console.log(error));
    },

    render() {
      return h(FeedView);
    },
  };
}

export default createFeedView;
