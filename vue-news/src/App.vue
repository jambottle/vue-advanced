<template>
  <ToolBar />
  <transition name="page">
    <router-view />
  </transition>
  <Spinner :isLoading="true" />
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    ToolBar,
    Spinner,
  },
};
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  a {
    color: #34495e;
    text-decoration: none;

    &:hover {
      color: #42b883;
      text-decoration: underline;
    }

    &.router-link-exact-active {
      text-decoration: underline;
    }
  }

  /* Router Transition */
  .page-enter-active,
  .page-leave-active {
    transition: opacity 0.5s ease;
  }

  .page-enter-from,
  .page-leave-to {
    opacity: 0;
  }
}
</style>
