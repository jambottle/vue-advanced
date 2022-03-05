import { createStore } from 'vuex';

import NewsModule from '@/store/NewsModule';
import AskModule from '@/store/AskModule';
import JobsModule from '@/store/JobsModule';

const store = createStore({
  modules: {
    news: NewsModule,
    ask: AskModule,
    jobs: JobsModule,
  },
});

export default store;
