import React from "react";

const Heart = (color) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="37"
      viewBox="0 0 38 37"
    >
      <path
        fill={color}
        d="M31.55 4a11.2 11.2 0 0 0-9 5 11.2 11.2 0 0 0-9-5 9.854 9.854 0 0 0-10 10 21.158 21.158 0 0 0 4 12c5.5 7.523 15 15 15 15a112.207 112.207 0 0 0 14-15c2.888-3.949 5-8.618 5-12a9.854 9.854 0 0 0-10-10z"
        transform="translate(-3.55 -4)"
      />
    </svg>
  );
};

Heart.defaultProps = { color: "#aaa" };
export default Heart;
