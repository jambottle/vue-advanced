<template>
  <h1>Chart.js</h1>
  <BarChart />
</template>

<script>
import BarChart from '@/components/BarChart.vue';

export default {
  components: {
    BarChart,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
