import { IconProps } from "./types";

interface CheckIconProps extends IconProps {
  checked: boolean;
}

export default function CheckBoxIcon({ checked, size = 32 }: CheckIconProps) {
  return checked ? <CheckedBoxIcon size={size} /> : <UnCheckedBoxIcon size={size} />;
}

function UnCheckedBoxIcon({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="15" fill="#FEFCE8" stroke="#0F172A" strokeWidth="2" />
    </svg>
  );
}

function CheckedBoxIcon({ size }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="#7C3AED" />
      <path
        d="M8 16.2857L13.8182 22L24 12"
        stroke="#FEFCE8"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
