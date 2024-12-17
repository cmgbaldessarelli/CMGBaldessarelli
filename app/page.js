import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    </main>
  );
}
