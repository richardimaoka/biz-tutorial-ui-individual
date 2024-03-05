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
    console.log("VideoStep useEffect called");
    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }
  });

  function onPlayerReady(e: any) {
    console.log("on player ready", e);
  }

  function onPlayerStateChange(e: any) {
    console.log("on player state change", e);
  }

  function onYouTubeIframeAPIReady() {
    console.log("onload called", YT);
    const player = new YT.Player("existing-iframe-example", {
      height: "1080",
      width: "1920",
      videoId: "k7IdJ90aQLA",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    console.log(onYouTubeIframeAPIReady);
  }

  return (
    <StepContainer>
      {/* [Violation] Added non-passive event listener to a scroll-blocking 'touchstart' event. Consider marking event handler as 'passive' to make the page more responsive. See https://www.chromestatus.com/feature/5745543795965952 */}
      {/* https://stackoverflow.com/questions/56780548/youtube-iframe-embed-violation-non-passive-event-listener-to-a-scroll-blocking */}

      <div id="existing-iframe-example" className={styles.iframe} />

      {/* Somehow writing <iframe> doesn't work with `new YT.Player()` although the document says it should
          https://developers.google.com/youtube/iframe_api_reference#Examples */}
      {/* <iframe
        id="existing-iframe-example"
        className={styles.iframe}
        width="1080"
        height="1920"
        src="https://www.youtube.com/embed/k7IdJ90aQLA?si=SREkQdfS6sMCYvPY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe> */}
      <Script src="https://www.youtube.com/iframe_api" />
    </StepContainer>
  );
}
