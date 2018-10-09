import { configureStore } from '../configure-store';
import { Thunks } from '../models';

describe('user model', function() {
  let { dispatch, getState } = configureStore();

  beforeEach(function() {
    const store = configureStore();
    dispatch = store.dispatch;
    getState = store.getState;
  });

  describe('effects', function() {
    describe('getAllUsers', function() {
      it('can get all users', function() {
        expect(getState().users.ids.length).toBe(0);
        return dispatch(Thunks.getAllUsers())
          .then(() => expect(getState().users.ids.length).toBeGreaterThan(0))
          .catch(err => expect(err).not.toBeInstanceOf(Error));
      });
    });
  });
});
