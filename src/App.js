import React, { useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { reduxstore } from "./Store/Store";
import Main from "./Components/Main";

function App() {
  useEffect(() => {
    document.title = "akshay";
  }, []);
  return (
    <Provider store={reduxstore}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
