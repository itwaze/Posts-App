import { takeLatest, put} from "redux-saga/effects";
import { actionTypes, fetchPosts, errorHandler } from "../actions";
import fetch from 'node-fetch'

function* fetchPostsSaga() {
  try {
    const res = yield fetch("https://jsonplaceholder.typicode.com/posts");
    const items = yield res.json();
    const limitedItems = items.slice(0, 5);
    
    yield put(fetchPosts(limitedItems));
  } catch (err) {
    yield put(errorHandler(err));
  }
}

function* rootSaga() {
  yield takeLatest(actionTypes.LOAD_POSTS, fetchPostsSaga)
}

export default rootSaga;
