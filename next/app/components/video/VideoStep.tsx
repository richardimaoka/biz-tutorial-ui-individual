"use client";

import Script from "next/script";
import { StepContainer } from "../step/StepContainer";
import styles from "./VideoStep.module.css";
import { useEffect } from "react";

interface YTType {
  Player(args: any): any;
}

declare var YT: any;

interface Video {
  path: string;
  width: number;
  height: number;
}

interface Props {
  video?: Video;
}

declare var window: any;

export function VideoStep(props: Props) {
  useEffect(() => {
    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  });

  function onPlayerStateChange() {
    console.log("on player state change");
  }

  function onYouTubeIframeAPIReady() {
    console.log("onload called", YT);
    const player = new YT.Player("player", {
      height: "360",
      width: "640",
      videoId: "M7lc1UVf-VE",
    });
    console.log(onYouTubeIframeAPIReady);
  }

  return (
    <StepContainer>
      {/* [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952 */}
      {/* https://stackoverflow.com/questions/56780548/youtube-iframe-embed-violation-non-passive-event-listener-to-a-scroll-blocking */}
      <iframe
        id={"player"}
        className={styles.iframe}
        width="1080"
        height="1920"
        src="https://www.youtube.com/embed/k7IdJ90aQLA?si=SREkQdfS6sMCYvPY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <Script src="https://www.youtube.com/iframe_api" />
    </StepContainer>
  );
}
