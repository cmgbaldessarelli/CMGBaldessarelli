import Image from "next/image";

import styles from "./maintenance.module.css";

import partialLogoBlack from "@/assets/logo-partiaL-black.svg";

export default function Maintenance() {
  return (
    <section className={styles.maintenance}>
      <Image src={partialLogoBlack} alt="Logo" />
      <h1>In arrivo...</h1>
    </section>
  );
}
