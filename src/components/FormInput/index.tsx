import React, { ChangeEvent, useState } from "react";
import { Input } from "../Input";
import { TFormInputs } from "@/app/react-form/constants";
import { DatePicker } from "../DatePicker";

export type TProps = {
  value: string | Date;
  onChange: (value: ChangeEvent<HTMLInputElement> | Date | undefined) => void;
  errorMessage: string;
} & TFormInputs;

const FormInput = ({ label, id, errorMessage, value, ...props }: TProps) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  const renderInput = () => {
    let currentInput;
    switch (props.type) {
      case "date":
        currentInput = <DatePicker onChange={props.onChange} />;
        break;
      default:
        currentInput = (
          <Input
            value={value as string}
            className="peer "
            onBlur={handleFocus}
            focused={focused.toString()}
            {...props}
          />
        );
        break;
    }
    return currentInput;
  };
  return (
    <fieldset className="grid gap-y-1.5">
      <label htmlFor="">{label}</label>
      {renderInput()}
      <span
        className={`text-red-500 text-xs peer-invalid:peer-data-[focused="true"]:block hidden
        `}
      >
        {" "}
        {errorMessage}{" "}
      </span>
    </fieldset>
  );
};

export default FormInput;
