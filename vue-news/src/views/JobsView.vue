<template>
  <ul id="post-list">
    <PostItem />
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import PostItem from '@/components/PostItem.vue';

export default {
  components: {
    PostItem,
  },

  methods: {
    ...mapActions('jobs', ['GET_JOBS_LIST']),
  },

  created() {
    this.emitter.emit('startSpinner');
    setTimeout(() => {
      this.GET_JOBS_LIST()
        .then(this.emitter.emit('endSpinner'))
        .catch(error => console.log(error));
    }, 1000);
  },
};
</script>
