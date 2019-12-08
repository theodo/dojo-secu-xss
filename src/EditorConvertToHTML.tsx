import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

interface EditorProps {
  htmlContent: string;
  setHtmlContent: (htmlContent: string) => void;
}

const EditorConvertToHTML = ({ htmlContent, setHtmlContent }: EditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    setHtmlContent(draftToHtml(convertToRaw(editorState.getCurrentContent())));
  }, [editorState, setHtmlContent]);

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={(editorState: EditorState) => setEditorState(editorState)}
      />
      <br />
      <textarea className="textArea" value={htmlContent} />
    </div>
  );
};

export default EditorConvertToHTML;
