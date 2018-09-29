import * as R from 'ramda'
import {createModel} from '@rematch/core'
import {AxiosPromise} from 'axios'

import {PostsState, Post} from './posts.types'

export const posts = createModel({
  state: {
    byId: {},
    list: [],
  } as PostsState,

  reducers: {
    set(state: PostsState, payload: Partial<PostsState>): PostsState {
      return R.applyTo(payload)(
        R.applySpec({
          byId: R.indexBy(R.prop('id')),
          list: payload,
        })
      )
    },
  },

  effects(dispatch) {
    return {
      getAll() {
        return dispatch.api.getAllPosts()
      },
    }
  },
})
