"use client";

import { useEffect, useRef } from "react";
import styles from "./PageComponent.module.css";

interface Props {}

export function PageComponent(props: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function buttonCallback() {
    if (ref.current) {
      ref.current.requestFullscreen();
    }
  }

  return (
    <div ref={ref} className={styles.component}>
      page
      <button onClick={buttonCallback}>full screeen</button>
    </div>
  );
}
