import {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
} from "@radix-ui/react-select";

import { SelectOption } from "../../types/common";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Select";

interface Props extends SelectProps {
  selectOptions: SelectOption<string>[];
  placeholder: SelectValueProps["placeholder"];
  className?: SelectTriggerProps["className"];
}

export function CustomSelect({
  selectOptions,
  placeholder,
  className,
  ...rest
}: Props) {
  return (
    <Select {...rest}>
      <SelectTrigger className={className}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
