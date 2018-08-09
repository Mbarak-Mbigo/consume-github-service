import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import styled, { injectGlobal } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";

import store from "../src/app/store";

import Dashboard from "./app/dashboard/dashboard-container";

injectGlobal`
  body {
    margin: 0;
  };
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const App = () => (
  <AppContainer>
    <Dashboard />
  </AppContainer>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
