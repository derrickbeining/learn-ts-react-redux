import * as R from 'ramda'
import {dispatch, getState} from '../../store'

describe('store.dispatch.api.getAllPosts', function() {
  test('works', function() {
    return dispatch.api
      .getAllPosts()
      .then(R.prop('data'))
      .then(posts => expect(posts).toBeTruthy)
  })
})
