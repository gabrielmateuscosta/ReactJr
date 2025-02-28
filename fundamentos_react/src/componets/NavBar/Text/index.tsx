import { JSX } from "react";
import styles from "./Text.module.css";

interface TextProps {
    textLink: string
}

export function Text({ textLink }: TextProps): JSX.Element {
  return (
      <a href="#" className={styles.link}>
        {textLink}
      </a>
  );
}