import About from "@/components/about/about";
import Hero from "@/components/hero/hero";

import styles from "./page.module.css";
import Pills from "@/components/pills/pills";
import News from "@/components/news/news";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Pills />
      <News />
    </main>
  );
}
