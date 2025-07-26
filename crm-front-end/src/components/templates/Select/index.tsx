import { cn } from "@/lib/utils";
import { SelectCN } from "@/components/ui";
import { useEffect, useState } from "react";

export type InputProps = {
  id?: string;
  label?: string;
  placeholder?: string;
  className?: string;
  classNameContent?: string;
  classNameItem?: string;
  disabled?: boolean;
  value: string;
  items: { id: string; label: string; }[];
  onChange?: (value: string) => void;
}

export const Select = ({ disabled, placeholder, value, onChange, className, items, id, classNameItem, classNameContent }: InputProps) => {
  const [values, setValues] = useState<string>("");

  const onSelect = (value: string) => {
    setValues(value);
    if (onChange) onChange(value);
  }

  useEffect(() => {
    setValues(value ?? "");
  }, [value]);

  return (
    <SelectCN.Select onValueChange={onSelect} value={values}>
      <SelectCN.SelectTrigger
        id={id}
        title={placeholder ?? "Selecione"}
        disabled={disabled}
        className={cn("min-w-[300px] py-6 text-xl rounded-lg border-2 border-[#207FE6] text-[#0f324f] cursor-pointer", className)}
      >
        <SelectCN.SelectValue placeholder={placeholder ?? "Selecione"} />
      </SelectCN.SelectTrigger>

      <SelectCN.SelectContent className={cn(classNameContent)}>
        <SelectCN.SelectGroup>
          {items.length > 0 &&
            items.map((item) => {
              return (
                <SelectCN.SelectItem
                  key={item.id}
                  value={item.id}
                  className={cn("text-xl text-[#0f324f] cursor-pointer", classNameItem)}
                >
                  {item.label}
                </SelectCN.SelectItem>
              )
            })
          }
        </SelectCN.SelectGroup>
      </SelectCN.SelectContent>
    </SelectCN.Select>
  )
}