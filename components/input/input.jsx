import styles from "./input.module.css";
import { forwardRef } from "react";

const Input = forwardRef(({ label, type, id, textarea, error, required, ...props }, ref) => {
  const Tag = textarea ? "textarea" : "input";

  return (
    <div className={styles.formGroup}>
    <label htmlFor={id}>
      {label} {required && <span>*</span>}
    </label>
    <Tag
      id={id}
      type={type}
      ref={ref}
      {...props}
      className={error ? styles.errorInput : ""}
    />
    </div>
  );
});

Input.displayName = "Input";

export default Input;