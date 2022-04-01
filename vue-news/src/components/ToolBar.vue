<template>
  <header id="header">
    <nav>
      <router-link to="/news">News</router-link> |
      <router-link to="/ask">Ask</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </nav>

    <div v-if="!username">
      <button @click="signIn">Sign In</button>
    </div>
    <div v-else>
      <strong>Welcome, {{ username }}!</strong>&nbsp;
      <button @click="signOut">Sign Out</button>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import handleException from '@/utils/handleException';

export default {
  data() {
    return {
      username: null,
    };
  },

  methods: {
    async signIn() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users/1'
        );
        this.username = response.data.username;

        if (response.data.id === 1) {
          const list = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
          );
          console.log(list.data);
        }
      } catch (error) {
        handleException(error);
      }
    },
    signOut() {
      this.username = null;
    },
  },
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 4px 8px;
  background-color: #42b883;
  color: #ffffff;

  nav {
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
}
</style>
