import { UsersActionU, UsersActionCreators } from './users/actions';
import { PostsActionU, PostsActionCreators } from './posts/actions';

export const ActionCreators = {
  ...UsersActionCreators,
  ...PostsActionCreators
};

export type ActionsU = UsersActionU | PostsActionU;
