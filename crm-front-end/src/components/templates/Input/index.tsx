import { cn } from "@/lib/utils";
import * as React from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  value: string;
  hasIcon?: boolean;
  disabledBtnIcon?: boolean;
  icon?: React.ReactNode;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickIcon?: () => void;
}

export const Input = ({ disabled, onClickIcon, placeholder, maxLength, value, onChange, className, type, icon, hasIcon, disabledBtnIcon }: InputProps) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        value={value}
        className={cn("border-2 w-full rounded-sm text-lg py-1 px-2 disabled:cursor-not-allowed", className)}
        maxLength={maxLength}
      />
        {hasIcon &&
          <button
            onClick={onClickIcon}
            className="text-2xl text-zinc-600 absolute top-2 right-2 cursor-pointer disabled:cursor-not-allowed"
            disabled={disabledBtnIcon}
          >{icon}</button>}
    </div>
  )
}