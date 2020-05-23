import React from "react";

const PageLayout = ({ header, content }) => {
  return (
    <div className="mb-5">
      <div className="row mt-5">
        <div className="col col-12">{header}</div>
      </div>
      <div className="row mt-3">
        <div className="col col-12">{content}</div>
      </div>
    </div>
  );
};

export default PageLayout;
