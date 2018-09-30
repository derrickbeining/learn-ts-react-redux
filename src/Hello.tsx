import * as React from 'react';
import { connect } from 'react-redux';

import { Dispatch, State } from './state';

type OwnProps = {
  name: string;
};

type Props = OwnProps & ReturnType<typeof mapStateToProps>;

const mapStateToProps = (s: State) => ({
  posts: s.posts.list,
});

const mapDispatchToProps = (d: Dispatch) => ({});

const HomeScreen: React.SFC<Props> = ({name, posts}) => {
  return <h1>Hello {name}!</h1>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
