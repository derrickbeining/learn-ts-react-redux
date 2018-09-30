import * as React from 'react';
import { Provider } from 'react-redux';

import { store } from './state';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
} as React.CSSProperties;

export const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
    </div>
  </Provider>
);
