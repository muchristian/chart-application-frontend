import React from "react";
import { Input } from "./types/Input";
import { Search } from "./types/Search";
import { Select } from "./types/Select";
import { Date } from "./types/Date";
import { TextArea } from "./types/TextArea";
import { categoryTypes } from "../../pages/transaction";

interface props {
  element: string;
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  classes: string[];
  rules?: {}[];
  prefix?: JSX.Element;
  children?: JSX.Element;
  rows?: number;
  showSearch?: boolean;
  onChange?: (value: any) => any;
  value?: string;
  defaultValue?: string;
}

export const FormControl: React.FC<props> = ({
  element,
  children,
  onChange,
  ...rest
}): JSX.Element | null => {
  switch (element) {
    case "input":
      return <Input {...rest} />;
    case "search-input":
      return <Search {...rest} />;
    case "select":
      return (
        <Select {...rest} onChange={onChange}>
          {children}
        </Select>
      );
    case "date":
      return <Date {...rest} />;
    case "textarea":
      return <TextArea {...rest} />;
    default:
      return null;
  }
};
