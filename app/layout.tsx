"use client";
import { Inter } from "next/font/google";
import styles from "@/app/page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <div className={styles.headerTitle}>Интерьер</div>
          <nav className={styles.navLinks}>
            <ul>
              <a className={styles.link} href="/">
             Каталог
              </a>
              <a className={styles.link} href="/cart">
                Корзина
              </a>
            </ul>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
