interface InputProps {
  type: string;
  placeholder?: string;
}

export default function Input({ type, placeholder }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="py-4 px-6 rounded-3xl border-slate-900 border-2 w-full text-slate-900 shadow-[4px_3.5px_0_0_rgb(15_23_42)] outline-none"
    ></input>
  );
}
