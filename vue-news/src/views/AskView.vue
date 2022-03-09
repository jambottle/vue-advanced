<template>
  <div>
    <ul id="ask-list">
      <li id="ask-item" v-for="ask in askList" :key="ask.id">
        <div class="ask-item__points">
          {{ ask.points }}
        </div>
        <div>
          <p class="ask-item__title">
            <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
          </p>
          <small class="ask-item__user">
            {{ ask.time_ago }} by
            <router-link :to="`/user/${ask.user}`">
              {{ ask.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul>
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

<style lang="scss" scoped>
#ask-list {
  margin: 0;
  padding: 0;

  #ask-item {
    display: flex;
    align-items: center;

    border-bottom: 1px solid #eeeeee;
    list-style: none;

    .ask-item__points {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 80px;
      height: 60px;
      color: #42b883;
    }

    .ask-item__title {
      margin: 0;
    }

    .ask-item__user,
    .ask-item__user a {
      color: #828282;
    }
  }
}
</style>
