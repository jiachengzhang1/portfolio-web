import React from "react";

const Statement = ({ statement }) => {
  const sentences = statement.split(".");
  const statementCompoment = sentences.map((sentence) => (
    <div key={sentence} className="mb-2">
      {sentence}
    </div>
  ));
  return (
    <h5 className="mb-5 text-center font-weight-light ubuntu">
      {statementCompoment}
    </h5>
  );
};

export default Statement;
