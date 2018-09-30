import * as React from 'react';

import { Post } from '../state/models';

interface Props {
  posts: Post[];
}

export function PostsList(props: Props) {
  const {posts} = props;

  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>
      ))}
    </ul>
  );
}
