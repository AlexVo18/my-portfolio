import { DEFAULT_ICON_SIZE } from "@/constants";
import * as React from "react";

type Props = { size?: number } & React.SVGProps<SVGSVGElement>;

const ArrowUp = ({ size = DEFAULT_ICON_SIZE, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z" />
  </svg>
);
export default ArrowUp;
