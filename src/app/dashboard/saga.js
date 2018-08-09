import { call, takeLatest, put } from "redux-saga/effects";

import { getReposRequest } from "../API";
import { FETCH_REPOS, fetchReposSucceeded, fetchReposFailed } from "./actions";

function* fetchRepos({ username }) {
  try {
    const { body } = yield call(getReposRequest, { username });

    yield put(fetchReposSucceeded(body));
  } catch (error) {
    console.log("error", error);
    yield put(fetchReposFailed());
  }
}

function* watchFetchRepos() {
  yield takeLatest(FETCH_REPOS, fetchRepos);
}

export default [watchFetchRepos];
