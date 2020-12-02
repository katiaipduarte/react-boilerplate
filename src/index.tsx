import React from "react";
import { render } from "react-dom";
import Hello from "./components/Hello";

const App = (): JSX.Element => {
  return (
    <div>
      <Hello compiler="parcel" framework="123" />
    </div>
  );
};

render(<App />, document.getElementById("app"));
