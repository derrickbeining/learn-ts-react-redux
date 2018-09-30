import { init, RematchRootState } from '@rematch/core';

import * as models from './models';

export const store = init({
  models,
});

export const {dispatch, getState} = store;

// ---------------- TYPES
export type Store = typeof store;
export type Dispatch = typeof store.dispatch;
export type State = RematchRootState<typeof models>;
