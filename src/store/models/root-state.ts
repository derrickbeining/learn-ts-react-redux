
import { CurrentUserInitialState as currentUser } from './current-user/initial-state';
import { UsersInitialState as users } from './users/initial-state';
import { PostsInitialState as posts } from './posts/initial-state';

export const initialState = {
  currentUser,
  posts,
  users
};

export type RootState = typeof initialState;
