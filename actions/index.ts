export const actionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  ERROR: 'ERROR',
  LOAD_POSTS: 'LOAD_POSTS'
}
import { Posts, Error } from './types'

export const fetchPosts = (data: Posts) => {
  return {
    type: actionTypes.FETCH_POSTS,
    payload: data
  }
}

export const loadPosts = () => {
  return { type: actionTypes.LOAD_POSTS }
}

export const errorHandler =  (err: Error) => {
  return {
    type: actionTypes.ERROR,
    payload: err
  }
}