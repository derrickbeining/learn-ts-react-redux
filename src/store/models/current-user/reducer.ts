import { CurrentUserInitialState } from './initial-state';
import { Reducer } from 'redux';

import { ActionsU } from '../../models';

export const currentUserReducer: Reducer<CurrentUserState, ActionsU> = (state = CurrentUserInitialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};
