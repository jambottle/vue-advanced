<template>
  <li id="feed-item">
    <div class="feed-item__points">
      {{ feedItem.points || 0 }}
    </div>

    <div>
      <p class="feed-item__title">
        <template v-if="!$route.name.includes('Ask')">
          <a :href="feedItem.url" target="_blank">
            {{ feedItem.title }}
          </a>
        </template>
        <template v-else>
          <router-link :to="`/item/${feedItem.id}`">
            {{ feedItem.title }}
          </router-link>
        </template>
      </p>

      <small class="feed-item__user">
        {{ feedItem.time_ago }} by
        <template v-if="!$route.name.includes('Jobs')">
          <router-link :to="`/user/${feedItem.user}`">
            {{ feedItem.user }}
          </router-link>
        </template>
        <template v-else>
          <a :href="`https://${feedItem.domain}`" target="_blank">
            {{ feedItem.domain }}
          </a>
        </template>
      </small>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    feedItem: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#feed-item {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eeeeee;

  .feed-item__points {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 80px;
    height: 60px;
    color: #42b883;
  }

  .feed-item__title {
    margin: 0;
  }

  .feed-item__user,
  .feed-item__user a {
    color: #828282;
  }
}
</style>
