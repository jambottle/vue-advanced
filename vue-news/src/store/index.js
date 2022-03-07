import { createStore } from 'vuex';

import NewsModule from '@/store/NewsModule';
import AskModule from '@/store/AskModule';
import JobsModule from '@/store/JobsModule';
import ItemModule from '@/store/ItemModule';
import UserModule from '@/store/UserModule';

const store = createStore({
  modules: {
    news: NewsModule,
    ask: AskModule,
    jobs: JobsModule,
    item: ItemModule,
    user: UserModule,
  },
});

export default store;
