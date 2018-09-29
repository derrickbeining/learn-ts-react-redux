export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostsState {
  byId: {
    [id: string]: Post
  }
  list: Post[]
}
