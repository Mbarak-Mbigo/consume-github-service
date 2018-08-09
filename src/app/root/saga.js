// import sagas
import { all } from "redux-saga/effects";
import reposSaga from "../dashboard/saga";

export default function* rootSaga() {
  yield all([...reposSaga.map(saga => saga())]);
}
