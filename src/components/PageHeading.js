import React from "react";

function PageHeading({ children }) {
  return (
    <div>
      <p className="heading mt-5 text-center sm:text-left sm:ml-5 mb-5">
        {children}
      </p>
    </div>
  );
}

export default PageHeading;
