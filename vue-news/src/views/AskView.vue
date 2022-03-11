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
    ...mapActions('ask', ['GET_ASK_LIST']),
  },

  created() {
    this.emitter.emit('startSpinner');
    setTimeout(() => {
      this.GET_ASK_LIST()
        .then(this.emitter.emit('endSpinner'))
        .catch(error => console.log(error));
    }, 1000);
  },
};
</script>
