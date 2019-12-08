import React from "react";

interface Props {
  htmlToInject?: string;
}

const HtmlResult = ({ htmlToInject = "" }: Props) => {
  return (
    <>
      <h2>Result</h2>
      <div className="htmlResultContainer" dangerouslySetInnerHTML={{ __html: htmlToInject }} />
    </>
  );
};

export default HtmlResult;
