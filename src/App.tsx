import React from "react";
import "./App.css";
import EditorConvertToHTML from "./EditorConvertToHTML";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Dojo Sécu - XSS</h1>
      <br />
      <EditorConvertToHTML />
    </div>
  );
};

export default App;
