import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <RotatingLines
        visible={true}
        height="56"
        width="56"
        strokeWidth="5"
        strokeColor="#AD46FF"
        animationDuration="0.25"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Spinner;
