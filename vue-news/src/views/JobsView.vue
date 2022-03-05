<template>
  <div>
    <p v-for="jobs in jobsList" :key="jobs.id">
      <a :href="jobs.url">{{ jobs.title }}</a>
      <small>{{ jobs.time_ago }} by {{ jobs.domain }}</small>
    </p>
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
