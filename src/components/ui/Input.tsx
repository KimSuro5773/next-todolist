import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder?: string;
}

export default function Input({ type, placeholder, className = "", ...props }: InputProps) {
  const baseStyles =
    "py-4 px-6 rounded-3xl border-slate-900 border-2 w-full text-slate-900 bg-slate-100 shadow-[4px_3.5px_0_0_rgb(15_23_42)] outline-none";

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${baseStyles} ${className}`}
      {...props}
    />
  );
}
