import React from "react";

const SecTitile = ({ heading, subHeading }) => {
  return (
    <div className="md:w-3/12 mx-auto text-center my-8">
      <p className="mb-2 text-yellow-500">---{subHeading}---</p>
      <h3 className="text-3xl border-y-4 uppercase py-4">{heading}</h3>
    </div>
  );
};

export default SecTitile;
