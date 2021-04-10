import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
import reducers from "./redux/reducers";
import App from "./App";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
