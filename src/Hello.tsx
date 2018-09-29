import * as React from 'react'
import {connect} from 'react-redux'

import {Dispatch, State} from './state'

type OwnProps = {
  name: string
}

type Props = OwnProps & ReturnType<typeof mapStateToProps>

const mapStateToProps = (s: State) => ({
  posts: s.posts.list,
})

const mapDispatchToProps = (d: Dispatch) => ({
  getposts: () => d.posts.getAll(),
})

const HomeScreen: React.SFC<Props> = ({name, posts}) => {
  return <h1>Hello {name}!</h1>
}

export default connect(
  mapStateToProps,
  null
)(HomeScreen)
