import { actionTypes } from '../actions'
import { HYDRATE } from 'next-redux-wrapper'
import { Action } from './types'

const initialState = {
  items: [],
  error: {}
}

const rootReducer = (state = initialState, action: Action) => {
  
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }

    default:
      return state
  }
}

export default rootReducer