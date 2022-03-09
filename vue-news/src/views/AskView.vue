<template>
  <ul id="post-list">
    <PostItem />
  </ul>
</template>

<script>
import PostItem from '@/components/PostItem.vue';

export default {
  components: {
    PostItem,
  },
};
</script>
