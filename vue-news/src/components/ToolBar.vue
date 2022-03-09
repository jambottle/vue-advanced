<template>
  <div id="header">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style lang="scss" scoped>
#header {
  padding: 8px;
  background-color: #42b883;
  color: #ffffff;

  a {
    color: #ffffff;

    &:hover {
      color: #ffffff;
    }

    &.router-link-exact-active {
      color: #35495e;
    }
  }
}
</style>
