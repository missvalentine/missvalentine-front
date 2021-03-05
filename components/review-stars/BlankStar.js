import React from "react";

const BlankStar = (props) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="49.404"
        height="47.347"
        viewBox="0 0 49.404 47.347"
        className="blank-star"
      >
        <path
          fill={props.fill}
          stroke="#000"
          d="M58.654 105.814l14-9 15 9-4-17 13-11-17-2-7-15-6 15-17 2 13 11z"
          transform="translate(-48.452 -59.556)"
        />
      </svg>
    </div>
  );
};
BlankStar.defaultProps = {
  fill: "black",
};
export default BlankStar;