import React from "react";
import { Form, Input as Field } from "antd";

interface props {
  name: string;
  label?: string;
  classes: string[];
}

export const Search: React.FC<props> = ({
  name,
  label,
  classes,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item name={name} label={label} className="w-full">
      <Field
        {...rest}
        className={`border-0 shadow-none text-body text-sm focus:outline-none ${classes[1]}`}
      />
    </Form.Item>
  );
};
