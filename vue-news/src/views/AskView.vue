<template>
  <div>
    <p v-for="ask in askList" :key="ask.id">
      <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
      <small>
        {{ ask.time_ago }} by
        <router-link :to="`/user/${ask.user}`">{{ ask.user }}</router-link>
      </small>
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
