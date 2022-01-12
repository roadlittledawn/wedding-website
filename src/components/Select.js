import React from "react";
import { useField, splitFormProps } from "react-form";
import { css } from "@emotion/react";

const Select = (props) => {
  const [
    field,
    fieldOptions,
    {
      options,
      emptyOptionText = "- Select an option -",
      disableEmptyOption = true,
      ...rest
    },
  ] = splitFormProps(props);

  const {
    value = "",
    setValue,
    meta: { error, isTouched },
  } = useField(field, fieldOptions);

  const handleSelectChange = (e) => {
    props.onInputChange(props.guestIdx, e.target.value);
    setValue(e.target.value);
  };

  return (
    <>
      <select
        value={value}
        css={css`
          outline: ${error ? "1px solid red" : "none"};
        `}
        onChange={handleSelectChange}
        {...rest}
      >
        <option disabled={disableEmptyOption} value="">
          {emptyOptionText}
        </option>
        {options.map((option) => (
          <option key={`${field}-${option.label}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>{" "}
      {isTouched && error ? (
        <div
          css={css`
            color: red;
          `}
        >
          <em>{error}</em>
        </div>
      ) : null}
    </>
  );
};

export default Select;
