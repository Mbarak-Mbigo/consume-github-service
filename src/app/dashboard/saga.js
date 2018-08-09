import { takeLatest, put } from "redux-saga/effects";

import { FETCH_REPOS, fetchReposSucceeded, fetchReposFailed } from "./actions";

function* fetchRepos() {
  try {
    yield put(fetchReposSucceeded({ data: "data" }));
  } catch (error) {
    console.log("error", error);
    yield put(fetchReposFailed());
  }
}

function* watchFetchRepos() {
  yield takeLatest(FETCH_REPOS, fetchRepos);
}

export default [watchFetchRepos];
