import { ReactNode } from "react";
import styles from "./StepContainer.module.css";

interface Props {
  children: ReactNode;
}

export function StepContainer(props: Props) {
  return <div className={styles.component}>{props.children}</div>;
}
