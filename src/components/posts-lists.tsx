import * as React from 'react'
import {connect} from 'react-redux'

import {Post} from '../state/posts.model'

interface Props {
  posts: Post[]
}

const mapState = ({posts}) => ({
  posts: posts.list,
})

const mapDispatch = dispatch => ({
  ...dispatch.posts,
})

export function PostsList(props: Props) {
  return <ul />
}
