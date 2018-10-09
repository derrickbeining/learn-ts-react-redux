import { Reducer } from 'redux';

import { UsersActionHandlers as handle } from './actions';
import { UsersInitialState } from '../users';
import { ActionsU, ActionTypes } from '../../models';

export const usersReducer: Reducer<UsersState, ActionsU> = (state = UsersInitialState, action) => {
  switch (action.type) {
    case ActionTypes.usersSet:
      return handle[action.type](state, action.payload);

    case ActionTypes.usersReset:
      return handle[action.type]();

    default:
      return state;
  }
};
