import React from "react";
import { useField, splitFormProps } from "react-form";
import { css } from "@emotion/react";

const Select = (props) => {
  const [
    field,
    fieldOptions,
    { options, emptyOptionText = "- Select an option -", ...rest },
  ] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched },
  } = useField(field, fieldOptions);

  const handleSelectChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <select {...rest} value={value} onChange={handleSelectChange}>
        <option disabled value="">
          {emptyOptionText}
        </option>
        {options.map((option) => (
          <option key={`${field}-${option.label}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? (
        <span
          css={css`
            color: red;
          `}
        >
          <em>{error}</em>
        </span>
      ) : null}
    </>
  );
};

export default Select;
