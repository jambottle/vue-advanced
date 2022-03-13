import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('feed', ['GET_FEED_LIST']),
  },

  created() {
    this.emitter.emit('startSpinner');
    this.GET_FEED_LIST(this.$route.path.slice(1))
      .then(this.emitter.emit('endSpinner'))
      .catch(error => console.log(error));
  },
};
