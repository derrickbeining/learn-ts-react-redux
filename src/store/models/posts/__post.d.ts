declare interface PostRecord {
  userId: number;
  id: number;
  title: string;
  body: string;
}

declare interface PostsState {
  ids: Array<PostRecord['id']>;
  byId: Record<PostRecord['id'], PostRecord>;
}
