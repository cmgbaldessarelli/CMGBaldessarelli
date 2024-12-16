import styles from "./input.module.css";

import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type, id, textarea, options, ...props },
  ref
) {
  let Tag = "";

  if (options) {
    Tag = "select";
    options = [{ name: "Seleziona un'opzione", value: "" }, ...options];
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id}>{label}</label>
        <Tag id={id} ref={ref} {...props}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.name}
            </option>
          ))}
        </Tag>
      </div>
    );
  }

  Tag = textarea ? "textarea" : "input";

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>
        {label} <span>*</span>
      </label>
      <Tag id={id} type={type} ref={ref} {...props} />
    </div>
  );
});

export default Input;
