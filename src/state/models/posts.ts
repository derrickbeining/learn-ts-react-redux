import * as R from 'ramda';
import { createModel, RematchDispatch } from '@rematch/core';
// import { AxiosPromise } from 'axios';

import { PostsState, Post } from './posts.types';

export const posts = createModel({
  state: {
    byId: {},
    list: [],
  } as PostsState,

  reducers: {
    set(state: PostsState, payload: Post[]): PostsState {
      return R.applyTo(payload)(
        R.applySpec({
          byId: R.indexBy(R.prop('id')),
          list: payload,
        })
      );
    },
  },

  // tslint:disable-next-line:no-any
  effects(dispatch: RematchDispatch<any>) {
    return {
      getAll() {
        return dispatch.api.getAllPosts();
      },
    };
  },
});
