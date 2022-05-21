import React from "react";
import Routing from "./routers";
import { Provider } from "react-redux";
import store from "./Store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
