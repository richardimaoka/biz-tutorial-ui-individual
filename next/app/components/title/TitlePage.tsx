import { StepContainer } from "../step/StepContainer";
import styles from "./TitlePage.module.css";

interface Image {
  path: string;
  width: number;
  height: number;
}

interface Video {
  path: string;
  width: number;
  height: number;
}

interface Props {
  title?: string;
  subType?: "simple" | "image"; //| "video" | "markdown";
  image?: Image;
}

export function TitlePage(props: Props) {
  switch (props.subType) {
    case "image":
      return (
        <StepContainer>
          <h1
            className={styles.visuallyHidden}
            aria-label="Next.jsでドキュメント・サイトのリアルタイム検索ボックスを実装する"
          >
            Next.jsでドキュメント・サイトのリアルタイム検索ボックスを実装する
          </h1>
        </StepContainer>
      );
    default:
      return (
        <StepContainer>
          <h1>
            Next.jsでドキュメント・サイトのリアルタイム検索ボックスを実装する
          </h1>
        </StepContainer>
      );
  }
}
