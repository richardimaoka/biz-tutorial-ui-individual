import { StepContainer } from "../step/StepContainer";
import styles from "./VideoStep.module.css";

interface Video {
  path: string;
  width: number;
  height: number;
}

interface Props {
  video?: Video;
}

export function VideoStep(props: Props) {
  return (
    <StepContainer>
      <iframe
        className={styles.iframe}
        width="1080"
        height="1920"
        src="https://www.youtube.com/embed/k7IdJ90aQLA?si=SREkQdfS6sMCYvPY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </StepContainer>
  );
}
