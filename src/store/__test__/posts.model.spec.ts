import { RootState } from './../models/root-state';
import { configureStore } from '../configure-store';
import { Thunks } from '../models';

describe('post model', function() {
  let state: RootState;
  let { dispatch, getState } = configureStore();

  beforeEach(function() {
    const store = configureStore();
    dispatch = store.dispatch;
    getState = store.getState;
    state = getState();
  });

  describe('effects', function() {
    describe('getAllPosts', function() {
      it('can get all posts', function() {
        expect(state.posts.ids.length).toBe(0);
        return dispatch(Thunks.getAllPosts())
          .then(() => expect(getState().posts.ids.length).toBeGreaterThan(0))
          .catch(err => expect(err).not.toBeInstanceOf(Error));
      });
    });

    describe('postNewPost', function() {
      it('posts a new post', function() {
        const POST = { title: 'What a post', body: 'My body is a wonderland', userId: 1 };

        expect(state.posts.ids.length).toBe(0);
        return dispatch(Thunks.postNewPost(POST))
          .then(() => expect(getState().posts.ids.length).toBe(1))
          .catch(err => expect(err).not.toBeInstanceOf(Error));
      });
    });
  });
});
