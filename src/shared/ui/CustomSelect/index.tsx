import { SelectOption } from "../../types/common";
import { SelectProps, SelectValueProps } from "@radix-ui/react-select";
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
}

export function CustomSelect({ selectOptions, placeholder, ...rest }: Props) {
  return (
    <Select {...rest}>
      <SelectTrigger>
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
