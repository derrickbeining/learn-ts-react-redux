import { UsersThunks } from './users/thunks';
import { PostsThunks } from './posts/thunks';

export const Thunks = {
  ...UsersThunks,
  ...PostsThunks
};
