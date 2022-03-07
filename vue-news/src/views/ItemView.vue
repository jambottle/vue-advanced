<template>
  <div>
    <!-- 1. 질문 상세 정보 -->
    <section>
      <div id="user-info">
        <i class="user-info__icon fas fa-user" />
        <div class="user-info__main">
          <router-link :to="`/user/${itemInfo.user}`">
            {{ itemInfo.user }}
          </router-link>
          <small>{{ itemInfo.time_ago }}</small>
        </div>
      </div>

      <h2>{{ itemInfo.title }}</h2>
      <p v-html="itemInfo.content" />
    </section>

    <!-- 2. 질문 댓글 목록 -->
    <section></section>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('item');

export default {
  computed: {
    ...mapState(['itemInfo']),
  },

  methods: {
    ...mapActions(['GET_ITEM_INFO']),
  },

  created() {
    const itemId = this.$route.params.id;
    this.GET_ITEM_INFO(itemId);
  },
};
</script>

<style lang="scss" scoped>
#user-info {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;

  .user-info__icon {
    font-size: 2rem;
  }

  .user-info__main {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-left: 10px;

    small {
      font-size: 0.8rem;
    }
  }
}
</style>
