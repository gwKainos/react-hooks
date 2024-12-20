import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  const links = [
    { path: "/", label: "Home" },
    { path: "useInput", label: "UseInput" },
    { path: "useTabs", label: "UseTabs" },
    { path: "useEffect", label: "UseEffect" },
    { path: "useTitle", label: "UseTitle" },
    { path: "useClick", label: "UseClick" },
    { path: "useConfirm", label: "UseConfirm" },
    { path: "usePreventLeave", label: "UsePreventLeave" },
    { path: "useBeforeLeave", label: "UseBeforeLeave" },
    { path: "useFadeIn", label: "UseFadeIn" },
    { path: "useNetwork", label: "UseNetwork" },
    { path: "useScroll", label: "UseScroll" },
    { path: "useFullscreen", label: "UseFullscreen" },
    { path: "useNotification", label: "UseNotification" },
  ];

  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          {links.map((link) => (
              <Link key={link.path} to={link.path} className={styles.link}>
                {link.label}
              </Link>
          ))}
        </nav>
      </header>
  );
}

export default Header;
