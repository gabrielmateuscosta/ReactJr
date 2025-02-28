import { JSX } from "react";
import styles from "./Navbar.module.css";
import { Text } from "./Text";
import { routing } from "../utils/routing";

const Navbar = (): JSX.Element => {
  return (
    <header className={styles.navContainer}>
      <nav className={styles.nav}>
        <div>
          <img
            className={styles.logo}
            src="https://agenciapnz.com/wp-content/uploads/Logo-Google-G.png"
            alt=""
          />
        </div>
        <div className={styles.navLinks}>
          {routing.map(val => {
            return (
              <Text key={val.link} textLink={val.link} />
            )
          })}
        </div>
      </nav>
    </header>
  );
};

export { Navbar };