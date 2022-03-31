import { createApp } from 'vue';

import App from '@/App.vue';
import chartPlugin from '@/plugins/chartPlugin';

const app = createApp(App);

app.use(chartPlugin).mount('#app');
