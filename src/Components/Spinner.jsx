import { RotatingLines } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const Spinner = ({ width, height }) => {
  return (
    <span className="flex items-center justify-center h-screen bg-[#0e0a18]">
      <RotatingLines
        visible={true}
        height={height}
        width={width}
        strokeWidth="5"
        backgroundColor="transparent"
        strokeColor="#AD46FF"
        animationDuration="0.25"
        ariaLabel="rotating-lines-loading"
      />
    </span>
  );
};

export default Spinner;
