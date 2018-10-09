import { logError } from '../../../util/logging';
import { Thunk } from '../../configure-store';
import { ActionCreators } from '../actions';
import { ActionTypes } from '../action-types';
import { Omit } from 'utility-types';

const getAllPosts: Thunk<PostRecord[]> = () => (dispatch, getState, { Api }) => {
  return Api.getAllPosts()
    .then(res => {
      dispatch(ActionCreators[ActionTypes.postsSet](res.data));
      return res.data;
    })
    .catch(logError);
};

const postNewPost: Thunk<PostRecord> = (post: Omit<PostRecord, 'id'>) => (dispatch, getState, { Api }) =>
  Api.postNewPost(post)
    .then(res => {
      dispatch(ActionCreators[ActionTypes.postsPush](res.data));
      return res.data;
    })
    .catch(logError);

export const PostsThunks = {
  getAllPosts,
  postNewPost
};
