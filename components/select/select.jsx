import styles from "./select.module.css";
import { forwardRef } from "react";

const Select = forwardRef(({ label, id, options, ...props }, ref) => {
  options = [{ name: "Seleziona un'opzione", value: "" }, ...options.map((option) => ({ name: option.name, value: option.name }))];

  console.log(options);

  return (
    <div className={styles.formGroup}>
      <label htmlFor={id}>{label}</label>
      <select id={id} ref={ref} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
});

Select.displayName = "Select";

export default Select;