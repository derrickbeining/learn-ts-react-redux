import { combineReducers } from 'redux';

import { currentUserReducer as currentUser } from './current-user/reducer';
import { usersReducer as users } from './users/reducer';
import { postsReducer as posts } from './posts/reducer';
import { ActionsU } from './actions';
import { RootState } from './root-state';

export const rootReducer = combineReducers<RootState, ActionsU>({
  currentUser,
  posts,
  users
});
