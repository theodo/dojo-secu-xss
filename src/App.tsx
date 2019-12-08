import React, { useState } from "react";
import "./App.css";
import EditorConvertToHTML from "./EditorConvertToHTML";
import HtmlResult from "./HtmlResult";

const App: React.FC = () => {
  const [htmlContent, setHtmlContent] = useState("");

  return (
    <div className="App">
      <h1>Dojo Sécu - XSS</h1>
      <br />
      <EditorConvertToHTML htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
      <HtmlResult htmlToInject={htmlContent} />
    </div>
  );
};

export default App;
