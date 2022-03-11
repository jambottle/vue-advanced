import { createApp } from 'vue';
import mitt from 'mitt';
import 'normalize.css';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

const app = createApp(App);

const emitter = mitt();
app.config.globalProperties.emitter = emitter;

app.use(router).use(store).mount('#app');
