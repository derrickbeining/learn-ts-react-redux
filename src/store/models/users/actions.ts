import { UsersInitialState } from './initial-state';
import { ActionTypes } from '../action-types';

export const UsersActionHandlers = {
  [ActionTypes.usersSet]: (s: UsersState, p: UserRecord[]) => ({
    ...s,
    ids: p.map(x => x.id),
    byId: p.reduce<UsersState['byId']>((dict, user) => ({ ...dict, [user.id]: user }), {})
  }),

  [ActionTypes.usersReset]: () => UsersInitialState
};

export const UsersActionCreators: ExtractCreatorsFromHandlers<typeof UsersActionHandlers> = {
  [ActionTypes.usersReset]: () => ({ type: ActionTypes.usersReset }),
  [ActionTypes.usersSet]: (payload: UserRecord[]) => ({ type: ActionTypes.usersSet, payload })
};

export type UsersActionU = ActionsFromHandlers<typeof UsersActionHandlers>;
