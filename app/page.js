import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

import styles from "./page.module.css";

import Maintenance from "@/components/maintenance/maintenance";

export default function Home() {
  const isMaintenance = true;

  if (isMaintenance) {
    return (
      <main>
        <Maintenance />
      </main>
    );
  }

  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
