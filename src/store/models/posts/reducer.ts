import { Reducer } from 'redux';

import { PostsActionHandlers as handle } from './actions';
import { PostsInitialState } from './initial-state';
import { ActionTypes } from '../action-types';
import { ActionsU } from '../actions';

export const postsReducer: Reducer<PostsState, ActionsU> = (state = PostsInitialState, action) => {
  switch (action.type) {
    case ActionTypes.postsPush:
      return handle[action.type](state, action.payload);

    case ActionTypes.postsSet:
      return handle[action.type](state, action.payload);

    case ActionTypes.postsReset:
      return handle[action.type]();

    default:
      return state;
  }
};
