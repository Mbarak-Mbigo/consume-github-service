import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";

// rootReducer
import { rootReducer, configureSagas } from "../app/root";
// appSagas
const appSagas = configureSagas();

// create sagaMiddleWare
const sagaMiddleWare = createSagaMiddleWare();

// mount it on the store
const store = createStore(
  //rootReducer
  rootReducer,
  applyMiddleware(sagaMiddleWare)
);

// run the saga
sagaMiddleWare.run(appSagas);

export default store;
