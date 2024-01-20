import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const basePATH =
    (typeof process !== "undefined" && process?.env?.BASE_URL_PATH) || "";
  return (
    <nav class={styles.nav}>
      <input type="checkbox" class={styles.hiddenCheckbox} />
      <div class={styles.hamburger}>
        <div class={styles.bar}></div>
      </div>
      <Link href="/">
        <h1 class={styles.icon}>Skylight</h1>
      </Link>
      <div class={styles.blur}></div>
      <ul class={styles.menu}>
        <li class={styles.menuItem}>
          <Link href={`${basePATH}/`} class={styles.link}>
            首頁
          </Link>
        </li>
        <li class={styles.menuItem}>
          <Link href={`${basePATH}/example`} class={styles.link}>
            裝修案例
          </Link>
        </li>
        <li class={styles.menuItem}>
          <Link href={`${basePATH}/contact`} class={styles.link}>
            聯絡我們
          </Link>
        </li>
      </ul>
    </nav>
  );
});
