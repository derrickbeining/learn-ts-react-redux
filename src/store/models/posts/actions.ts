import { ActionTypes } from '../action-types';
import { PostsInitialState } from './initial-state';

export const PostsActionHandlers = {
  [ActionTypes.postsPush]: (s: PostsState, p: PostRecord) => ({
    ids: [...s.ids, p.id],
    byId: {...s.byId, [p.id]: p}
  }),

  [ActionTypes.postsSet]: (s: PostsState, p: PostRecord[]) => ({
    ...s,
    ids: p.map(x => x.id),
    byId: p.reduce<PostsState['byId']>((dict, user) => ({ ...dict, [user.id]: user }), {})
  }),

  [ActionTypes.postsReset]: () => PostsInitialState
};

export const PostsActionCreators: ExtractCreatorsFromHandlers<typeof PostsActionHandlers> = {
  [ActionTypes.postsPush]: (p: PostRecord) => ({type: ActionTypes.postsPush, payload: p}),

  [ActionTypes.postsReset]: () => ({ type: ActionTypes.postsReset }),

  [ActionTypes.postsSet]: (payload: PostRecord[]) => ({ type: ActionTypes.postsSet, payload })
};

export type PostsActionU = ActionsFromHandlers<typeof PostsActionHandlers>;
