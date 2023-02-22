import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <>
      <h1>こんにちは</h1>
      <p>お元気ですか</p>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
