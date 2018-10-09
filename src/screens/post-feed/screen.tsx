import * as React from 'react';
import { connect } from 'react-redux';
import { Button, Card, EditableText, Elevation, H5, H2 } from '@blueprintjs/core';

import { RootState, Thunks } from '../../store';
import { MyDispatch } from '../../store/configure-store';
import { postsFromState } from '../../store/models/selectors';
import { logError } from '../../util/logging';
import { Omit } from 'utility-types';

const mapState = (s: RootState) => ({
  currentUser: s.currentUser,
  posts: postsFromState(s)
});

const mapDispatch = (d: MyDispatch) => ({
  getAllPosts: () => d(Thunks.getAllPosts()),
  postNewPost: (p: Omit<PostRecord, 'id'>) => d(Thunks.postNewPost(p))
});

type Props = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>;
type State = {
  newPostBody: string;
  newPostTitle: string;
};

class Component extends React.Component<Props, State> {
  initialState = {
    newPostBody: '',
    newPostTitle: ''
  };

  state = this.initialState;

  componentDidMount() {
    this.props.getAllPosts();
  }

  resetState = () => this.setState(this.initialState);

  updatePostBody = (s: string) => this.setState({ newPostBody: s });
  updatePostTitle = (s: string) => this.setState({ newPostTitle: s });
  clearNewPost = () =>
    this.setState({
      newPostBody: '',
      newPostTitle: ''
    })
  submitNewPost = () => {
    const { currentUser } = this.props;
    const { newPostBody: body, newPostTitle: title } = this.state;

    return this.props
      .postNewPost({ body, title, userId: currentUser.id })
      .then(() => this.resetState())
      .catch(logError);
  }

  render = () => {
    const { newPostBody, newPostTitle } = this.state;
    const { posts } = this.props;

    return (
      <React.Fragment>
        <div style={styles.feedColumn}>
          <div style={styles.editableBackdropOuter}>
            <div style={styles.editableBackdropInner}>
              <H2>
                <EditableText
                  maxLength={40}
                  onCancel={this.clearNewPost}
                  onChange={this.updatePostTitle}
                  placeholder="Post into the void"
                  value={newPostTitle}
                />
              </H2>

              <EditableText
                confirmOnEnterKey={true}
                maxLength={140}
                multiline={true}
                minLines={3}
                maxLines={12}
                onCancel={this.clearNewPost}
                onChange={this.updatePostBody}
                value={newPostBody}
              />
            </div>
          </div>

          {posts.map(post => (
            <div style={styles.feedRow}>
              <Card interactive={true} elevation={Elevation.TWO}>
                <H5>
                  <a href="#">{post.title}</a>
                </H5>
                <p>{post.body}</p>
                <Button>Read more</Button>
              </Card>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  editableBackdropInner: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20
  },
  editableBackdropOuter: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    padding: 20
  },
  feedColumn: {
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'space-between'
    margin: '0 auto',
    maxWidth: 500
  },
  feedRow: {
    padding: 20
  }
} as Record<string, React.CSSProperties>;

export const PostsFeedScreen = connect(
  mapState,
  mapDispatch
)(Component);
