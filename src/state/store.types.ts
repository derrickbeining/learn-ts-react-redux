import {
  Action,
  RematchDispatch,
  RematchRootState,
  RematchStore,
} from '@rematch/core'

import * as models from './models'

export type Models = typeof models
// export type Dispatch = RematchDispatch<Models>
export type State = RematchRootState<Models>
// export type Store = RematchStore<Models, Action<any, any>>
