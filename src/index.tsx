import * as React from 'react'
import {Provider} from 'react-redux'
import {render} from 'react-dom'

import {store} from './state'
import Hello from './Hello'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
}

const RootComponent = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {'\u2728'}</h2>
    </div>
  </Provider>
)

render(<RootComponent />, document.getElementById('root') as HTMLElement)
