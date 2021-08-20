import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFasterThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.30778 19.284H19.6198C20.3638 18.18 20.9398 16.836 21.1558 15.468H20.6758C20.4838 16.668 20.0038 17.796 19.3558 18.804H4.57178C3.68378 17.436 3.15578 15.78 3.15578 14.028C3.15578 9.156 7.09178 5.196 11.9638 5.196C16.3318 5.196 19.9798 8.388 20.6758 12.588H21.1558C20.4598 8.124 16.6198 4.716 11.9638 4.716C6.82778 4.716 2.67578 8.892 2.67578 14.028C2.67578 15.972 3.29978 17.82 4.30778 19.284ZM11.7238 14.028C11.7238 14.172 11.8198 14.268 11.9638 14.268H21.3238V13.788H11.9638C11.8198 13.788 11.7238 13.884 11.7238 14.028Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFasterThin;