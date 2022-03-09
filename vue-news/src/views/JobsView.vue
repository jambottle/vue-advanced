<template>
  <div>
    <ul id="jobs-list">
      <li id="jobs-item" v-for="jobs in jobsList" :key="jobs.id">
        <div class="jobs-item__points">
          {{ jobs.points || 0 }}
        </div>
        <div>
          <p class="jobs-item__title">
            <a :href="jobs.url">{{ jobs.title }}</a>
          </p>
          <small class="jobs-item__user">
            {{ jobs.time_ago }} by
            <a :href="`https://www.${jobs.domain}`">
              {{ jobs.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
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

<style lang="scss" scoped>
#jobs-list {
  margin: 0;
  padding: 0;

  #jobs-item {
    display: flex;
    align-items: center;

    border-bottom: 1px solid #eeeeee;
    list-style: none;

    .jobs-item__points {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 60px;
      color: #42b883;
    }

    .jobs-item__title {
      margin: 0;
    }

    .jobs-item__user,
    .jobs-item__user a {
      color: #828282;
    }
  }
}
</style>
