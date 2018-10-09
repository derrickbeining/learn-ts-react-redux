import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Button, Navbar, Alignment } from '@blueprintjs/core';

import { store } from './store';
import { PostsFeedScreen } from './screens/post-feed/screen';
import { NotFoundScreen } from './screens';

export const App = () => (
  <Provider store={store}>
    <Router>
      <Route
        render={({ location }) => (
          <React.Fragment>
            <Navbar>
              <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>Echo</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="social-media" text="Posts" />
                <Button className="bp3-minimal" icon="camera" text="Pics" />
              </Navbar.Group>
            </Navbar>

            <div style={styles.screenBoundary}>
              <Route exact={true} path="/" render={() => <Redirect to="/posts" />} />
              <Switch location={location}>
                <Route exact={true} path="/posts" component={PostsFeedScreen} />
                <Route component={NotFoundScreen} />
              </Switch>
            </div>
          </React.Fragment>
        )}
      />
    </Router>
  </Provider>
);

const styles = {
  screenBoundary: {
    margin: '0 auto',
    marginTop: 50,
    marginBottom: 50,
    maxWidth: 900,
    minWidth: 500,
    width: '60%'
  }
} as Record<string, React.CSSProperties>;
