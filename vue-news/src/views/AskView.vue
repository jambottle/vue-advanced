<template>
  <div>
    <p v-for="ask in askList" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('ask');

export default {
  computed: {
    ...mapState(['askList']),
  },

  methods: {
    ...mapActions(['GET_ASK_LIST']),
  },

  created() {
    this.GET_ASK_LIST();
  },
};
</script>
