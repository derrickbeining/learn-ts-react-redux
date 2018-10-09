declare interface UsersState {
  ids: Array<UserRecord['id']>;
  byId: Record<string, UserRecord>;
}
