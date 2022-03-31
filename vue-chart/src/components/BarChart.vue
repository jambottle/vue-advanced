<template>
  <canvas ref="barChart" width="400" height="400" />
</template>

<script>
export default {
  props: {
    datasets: Array,
  },

  mounted() {
    // eslint-disable-next-line no-unused-vars
    const chart = new this.$_chart(this.$refs.barChart.getContext('2d'), {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: this.datasets,
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
