<template>
  <div>
    <ul id="news-list">
      <li id="news-item" v-for="news in newsList" :key="news.id">
        <div class="news-item__points">
          {{ news.points }}
        </div>
        <div>
          <p class="news-item__title">
            <a :href="news.url">{{ news.title }}</a>
          </p>
          <small class="news-item__user">
            by
            <router-link :to="`/user/${news.user}`">
              {{ news.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('news');

export default {
  computed: {
    ...mapState(['newsList']),
  },

  methods: {
    ...mapActions(['GET_NEWS_LIST']),
  },

  created() {
    this.GET_NEWS_LIST();
  },
};
</script>

<style lang="scss" scoped>
#news-list {
  margin: 0;
  padding: 0;

  #news-item {
    display: flex;
    align-items: center;

    border-bottom: 1px solid #eeeeee;
    list-style: none;

    .news-item__points {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 60px;
      color: #42b883;
    }

    .news-item__title {
      margin: 0;
    }

    .news-item__user,
    .news-item__user a {
      color: #828282;
    }
  }
}
</style>
