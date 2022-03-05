<template>
  <div>
    <div v-for="jobs in jobsList" :key="jobs.id">
      {{ jobs.title }}
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('jobs');

export default {
  computed: {
    ...mapState(['jobsList']),
  },

  methods: {
    ...mapActions(['GET_JOBS_LIST']),
  },

  created() {
    this.GET_JOBS_LIST();
  },
};
</script>
