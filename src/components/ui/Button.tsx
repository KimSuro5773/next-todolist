import { ButtonHTMLAttributes, ReactNode } from "react";
import PlusIcon from "@/components/icons/PlusIcon";
import PlusAltIcon from "@/components/icons/PlusAltIcon";
import XIcon from "@/components/icons/XIcon";
import CheckIcon from "@/components/icons/CheckIcon";
import EditIcon from "@/components/icons/EditIcon";

type ButtonPreset =
  | "add" // 추가하기 - 흰색, 반응형 텍스트
  | "addPrimary" // 추가하기 - 보라색, 반응형 텍스트
  | "delete" // 삭제하기 - 빨간색, 텍스트 항상 표시
  | "complete" // 수정 완료 - 회색, 텍스트 항상 표시
  | "completeActive" // 수정 완료 - 연두색, 텍스트 항상 표시
  | "iconAdd" // 원형 추가 - PlusAlt 아이콘만
  | "iconEdit"; // 원형 수정 - Edit 아이콘만

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  preset: ButtonPreset;
  children?: ReactNode;
}

const presetConfig = {
  add: {
    icon: PlusIcon,
    baseStyle: "bg-slate-200 border-2 border-slate-900 shadow-[4px_3.5px_0_0_rgb(15_23_42)]",
    size: "py-4 px-4 sm:px-12",
    textStyle: "hidden sm:inline",
    iconOnly: false,
  },
  addPrimary: {
    icon: PlusIcon,
    baseStyle:
      "bg-violet-600 text-white border-2 border-slate-800 shadow-[4px_3.5px_0_0_rgb(15_23_42)]",
    size: "py-4 px-4 sm:px-12",
    textStyle: "hidden sm:inline",
    iconOnly: false,
  },
  delete: {
    icon: XIcon,
    baseStyle:
      "bg-rose-500 text-white border-2 border-slate-800 shadow-[4px_3.5px_0_0_rgb(15_23_42)]",
    size: "py-3 px-12",
    textStyle: "",
    iconOnly: false,
  },
  complete: {
    icon: CheckIcon,
    baseStyle: "bg-slate-200 border-2 border-slate-900 shadow-[4px_3.5px_0_0_rgb(15_23_42)]",
    size: "py-3 px-12",
    textStyle: "",
    iconOnly: false,
  },
  completeActive: {
    icon: CheckIcon,
    baseStyle: "bg-lime-300 border-2 border-slate-900 shadow-[4px_3.5px_0_0_rgb(15_23_42)]",
    size: "py-3 px-12",
    textStyle: "",
    iconOnly: false,
  },
  iconAdd: {
    icon: PlusAltIcon,
    baseStyle: "bg-slate-200 text-slate-500  border-gray-300",
    size: "w-12 h-12",
    textStyle: "",
    iconOnly: true,
  },
  iconEdit: {
    icon: EditIcon,
    baseStyle: "bg-slate-900/50 text-white border-2 border-slate-900",
    size: "w-12 h-12",
    textStyle: "",
    iconOnly: true,
  },
};

export default function Button({ preset, children, className = "", ...props }: ButtonProps) {
  const config = presetConfig[preset]; // 아이콘 자동 매핑
  const Icon = config.icon;

  const baseStyles =
    "inline-flex items-center justify-center gap-1 font-bold rounded-3xl cursor-pointer disabled:cursor-not-allowed";

  const styles = `${baseStyles} ${config.baseStyle} ${config.size} ${className}`;

  return (
    <button className={styles} {...props}>
      <Icon />
      {!config.iconOnly && children && <span className={config.textStyle}>{children}</span>}
    </button>
  );
}
