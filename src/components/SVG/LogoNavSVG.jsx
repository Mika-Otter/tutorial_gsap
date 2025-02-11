import * as React from "react";
const LogoNavSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29 29"
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
    }}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M0 0h29v4.984H4.984v19.032H29V29H0V0Zm16.766 7.25h-4.532v4.984H7.25v9.516h4.984v-9.516h9.516V7.25h-4.984Z"
      clipRule="evenodd"
      style={{
        mixBlendMode: "difference",
      }}
    />
  </svg>
);
export default LogoNavSVG;
