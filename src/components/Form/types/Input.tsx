import React from "react";
import { Form, Input as Field } from "antd";

interface props {
  name: string;
  label?: string;
  classes: string[];
  rules?: {}[];
}

export const Input: React.FC<props> = ({
  name,
  label,
  classes,
  rules,
  ...rest
}): JSX.Element => {
  return (
    <Form.Item
      className={`mb-6 ${classes[0]}`}
      name={name}
      label={label}
      rules={rules}
    >
      <Field
        {...rest}
        className={`bg-primary-50 border border-typography-300 text-typography-900 text-sm rounded-lg focus:outline-none focus:border-secondary-3 focus:shadow-none hover:border-secondary-3 w-full ${
          classes[1] ? classes[1] : ""
        }`}
      />
    </Form.Item>
  );
};
