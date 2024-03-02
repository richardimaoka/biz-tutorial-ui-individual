import styles from "./PageComponent.module.css";

interface Props {}

export function PageComponent(props: Props) {
  return (
    <div className={styles.component}>
      <h1>Next.jsでドキュメント・サイトのリアルタイム検索ボックスを実装する</h1>
    </div>
  );
}
