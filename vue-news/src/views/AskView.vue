<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">
      {{ ask.title }}
    </div>
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
