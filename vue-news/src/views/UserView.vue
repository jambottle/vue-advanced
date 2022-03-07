<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('user');

export default {
  computed: {
    ...mapState(['userInfo']),
  },

  methods: {
    ...mapActions(['GET_USER_INFO']),
  },

  created() {
    const userName = this.$route.params.id;
    this.GET_USER_INFO(userName);
  },
};
</script>
