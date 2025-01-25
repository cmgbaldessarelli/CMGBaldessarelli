import styles from "./checkbox.module.css";
import { forwardRef } from "react";

const Checkbox = forwardRef(({ label, id, required, ...props }, ref) => (
  <div className={styles.formGroupFlex}>
    <input id={id} type="checkbox" ref={ref} {...props} />
    <label htmlFor={id}>
      {label} {required && <span>*</span>}
    </label>
  </div>
));

Checkbox.displayName = "Checkbox";

export default Checkbox;