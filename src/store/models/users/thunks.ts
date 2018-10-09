import { logError } from '../../../util/logging';
import { Thunk } from '../../configure-store';
import { ActionCreators } from '../actions';
import { ActionTypes } from '../action-types';

const getAllUsers: Thunk<UserRecord[]> = () => (dispatch, getState, { Api }) => {
  return Api.getAllUsers()
    .then(res => {
      dispatch(ActionCreators[ActionTypes.usersSet](res.data));
      return res.data;
    })
    .catch(logError);
};

export const UsersThunks = {
  getAllUsers
};
