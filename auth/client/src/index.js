import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import Welcome from "./components/Welcome";
import App from "./components/App";
import Singup from "./components/auth/Signup";
import reducers from "./reducers";
import Feature from "./components/Features";
import Signout from "./components/auth/Signout";
import Signin from "./components/auth/Signin";

const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem("token") }
  },
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" component={Singup} />
        <Route path="/signin" component={Signin} />
        <Route path="/signout" component={Signout} /> 
        <Route path="/feature" component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
