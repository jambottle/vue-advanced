import { createStore } from 'vuex';

import FeedModule from '@/store/FeedModule';
import ItemModule from '@/store/ItemModule';
import UserModule from '@/store/UserModule';

const store = createStore({
  modules: {
    feed: FeedModule,
    item: ItemModule,
    user: UserModule,
  },
});

export default store;
