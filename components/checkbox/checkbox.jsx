import styles from "./checkbox.module.css";
import { forwardRef } from "react";

const Checkbox = forwardRef(({ label, id, required, ...props }, ref) => (
  <div className={styles.formGroupFlex}>
    <input id={id} type="checkbox" ref={ref} {...props} />
    <label htmlFor={id}>
      <span className={styles.customCheckbox}></span>
      <div>{label} {required && <span>*</span>}</div>
    </label>
  </div>
));

Checkbox.displayName = "Checkbox";

export default Checkbox;
