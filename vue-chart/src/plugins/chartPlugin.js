import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default {
  install: app => {
    app.config.globalProperties.$_chart = Chart;
  },
};
