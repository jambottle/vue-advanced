<template>
  <UserInfo>
    <template v-slot:user>{{ userInfo.id }}</template>
    <template v-slot:time>Joined {{ userInfo.created }}</template>
    <template v-slot:karma>, {{ userInfo.karma }} karma</template>
  </UserInfo>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import UserInfo from '@/components/UserInfo.vue';

export default {
  components: {
    UserInfo,
  },

  computed: {
    ...mapState('user', ['userInfo']),
  },

  methods: {
    ...mapActions('user', ['GET_USER_INFO']),
  },

  created() {
    const userId = this.$route.params.id;
    this.GET_USER_INFO(userId);
  },
};
</script>
