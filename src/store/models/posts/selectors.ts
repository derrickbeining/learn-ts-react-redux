import { createSelector } from 'reselect';
import { RootState } from '../root-state';

export const postsFromState = createSelector<RootState, PostsState['ids'], PostsState['byId'], PostRecord[]>(
  s => s.posts.ids,
  s => s.posts.byId,
  (ids, posts) => ids.map(id => posts[id])
);
