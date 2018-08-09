import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleWare from "redux-saga";

import { rootReducer } from "../app/root";
import rootSaga from "./root/saga";

// create sagaMiddleWare
const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleWare.run(rootSaga);

export default store;
