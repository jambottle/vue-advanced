<template>
  <UserInfo>
    <template v-slot:user>
      <router-link :to="`/user/${itemInfo.user}`">
        {{ itemInfo.user }}
      </router-link>
    </template>
    <template v-slot:time>Posted {{ itemInfo.time_ago }}</template>
  </UserInfo>

  <section>
    <h2>{{ itemInfo.title }}</h2>
    <p v-html="itemInfo.content" />
  </section>

  <!-- 댓글 목록 (예정) -->
  <section></section>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    UserInfo,
  },

  computed: {
    ...mapState('item', ['itemInfo']),
  },

  methods: {
    ...mapActions('item', ['GET_ITEM_INFO']),
  },

  created() {
    const itemId = this.$route.params.id;
    this.GET_ITEM_INFO(itemId);
  },
};
</script>
