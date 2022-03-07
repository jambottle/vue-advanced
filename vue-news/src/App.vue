<template>
  <div id="app">
    <ToolBar />
    <transition name="page">
      <router-view />
    </transition>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  },
};
</script>

<style lang="scss" scoped>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
