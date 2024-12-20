import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <Link to="useInput" className={styles.link}>
            UseInput
          </Link>
        </nav>
      </header>
  );
}

export default Header;