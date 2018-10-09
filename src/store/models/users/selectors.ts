import { createSelector } from 'reselect';
import { RootState } from '../root-state';

export const usersFromState = createSelector<RootState, UsersState['ids'], UsersState['byId'], UserRecord[]>(
  s => s.users.ids,
  s => s.users.byId,
  (ids, users) => ids.map(id => users[id])
);
