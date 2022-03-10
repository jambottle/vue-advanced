<template>
  <aside id="spinner" v-if="isLoading">
    <div />
    <div />
    <div />
  </aside>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
#spinner {
  position: absolute;
  top: 47%;
  left: 47%;

  display: inline-block;
  width: 64px;
  height: 64px;

  div {
    position: absolute;
    left: 6px;

    display: inline-block;
    width: 13px;
    background-color: #42b883;

    animation: spinner 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

    &:nth-child(1) {
      left: 6px;
      animation-delay: -0.24s;
    }

    &:nth-child(2) {
      left: 26px;
      animation-delay: -0.12s;
    }

    &:nth-child(3) {
      left: 45px;
      animation-delay: 0;
    }
  }
}

@keyframes spinner {
  0% {
    top: 6px;
    height: 51px;
  }

  50%,
  100% {
    top: 19px;
    height: 26px;
  }
}
</style>
