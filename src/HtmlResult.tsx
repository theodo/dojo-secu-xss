import React from "react";
import DOMPurify from "dompurify";

interface Props {
  htmlToInject?: string;
}

const HtmlResult = ({ htmlToInject = "" }: Props) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlToInject);

  return (
    <>
      <h2>Result</h2>
      <div className="htmlResultContainer" dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </>
  );
};

export default HtmlResult;
