<template>
  <li id="post-item" v-for="item in itemList" :key="item.id">
    <div class="post-item__points">
      {{ item.points || 0 }}
    </div>

    <div>
      <p class="post-item__title">
        <template v-if="$route.name !== 'Ask'">
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </template>
        <template v-else>
          <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
        </template>
      </p>

      <small class="post-item__user">
        {{ item.time_ago }} by
        <template v-if="$route.name !== 'Jobs'">
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
        </template>
        <template v-else>
          <a :href="`https://${item.domain}`" target="_blank">
            {{ item.domain }}
          </a>
        </template>
      </small>
    </div>
  </li>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('news', ['newsList']),
    ...mapState('ask', ['askList']),
    ...mapState('jobs', ['jobsList']),

    itemList() {
      const name = this.$route.name;
      if (name === 'News') return this.newsList;
      if (name === 'Ask') return this.askList;
      if (name === 'Jobs') return this.jobsList;
      else return null;
    },
  },
};
</script>

<style lang="scss" scoped>
#post-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;

  .post-item__points {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 60px;
    color: #42b883;
  }

  .post-item__title {
    margin: 0;
  }

  .post-item__user,
  .post-item__user a {
    color: #828282;
  }
}
</style>
