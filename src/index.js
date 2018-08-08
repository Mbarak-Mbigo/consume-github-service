import React from "react";
import ReactDOM from "react-dom";
import styled, { injectGlobal } from "styled-components";
import registerServiceWorker from "./registerServiceWorker";

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  };
`;

const AppContainer = styled.div`
  align-items: center;
  background-color: #e3e7ea;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const App = () => <AppContainer>React App.</AppContainer>;

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
