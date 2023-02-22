import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.center}>
      <h1>Next.Js!</h1>
      <p>Figuring out how to use the Next.js 13</p>
    </div>
  );
}
