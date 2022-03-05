<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

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
