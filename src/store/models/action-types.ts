import * as PostsActionTypes from './posts/action-types';
import * as UsersActionTypes from './users/action-types';

export const ActionTypes = {
  ...PostsActionTypes,
  ...UsersActionTypes
};
