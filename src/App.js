import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  }

  return {value};
}

const App = () => {
  const name = useInput("Mr. ");

  return (
      <div className="App">
        <h1>Hello</h1>
        <input placeholder="Name" {...name} />
      </div>
  );
};

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // createRoot 사용
root.render(<App />);

export default App;
