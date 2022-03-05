<template>
  <div>
    <div v-for="jobs in jobsList" :key="jobs.id">{{ jobs.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api';

export default {
  data() {
    return {
      jobsList: [],
    };
  },

  created() {
    fetchJobsList()
      .then(response => (this.jobsList = response.data))
      .catch(error => console.log(error));
  },
};
</script>
