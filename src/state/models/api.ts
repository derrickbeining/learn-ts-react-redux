import R from 'ramda'
import {createModel} from '@rematch/core'
import axios, {AxiosPromise} from 'axios'

import {Post} from './posts.types'

const DELETE = 'DELETE'
const GET = 'GET'
const PATCH = 'PATCH'
const POST = 'POST'
const PUT = 'PUT'

const jsonHeaders = {
  Accepts: 'application/json',
  'Content-Type': 'application/json',
}

export const api = createModel({
  state: {},

  reducers: {},

  effects(dispatch) {
    function request<T>(config: RequestConfig): AxiosPromise<T> {
      const {body, method, headers, url} = config

      return axios.request<T>({
        baseURL: 'https://jsonplaceholder.typicode.com',
        data: body,
        headers,
        method,
        url,
      })
    }

    return {
      //	100 posts
      getAllPosts(): AxiosPromise<Post[]> {
        return request({
          headers: jsonHeaders,
          method: GET,
          url: '/posts',
        })
      },
      //	500 comments
      //	100 albums
      //	5000 photos
      //	200 todos
      //
    }
  },
})

interface RequestConfig {
  body?: {[key: string]: any}
  method: string
  headers: {[key: string]: string}
  url: string
  query?: string
}
