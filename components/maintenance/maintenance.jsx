import Image from "next/image";

import styles from "./maintenance.module.css";

import cmgLogo from "@/assets/logo-partial-black.svg";

export default function Maintenance() {
  return (
    <section className={styles.maintenance}>
      <Image src={cmgLogo} alt="Logo" />
      <h1>In arrivo...</h1>
    </section>
  );
}
