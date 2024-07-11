import VideoJS from "./Videojs.jsx";
import React from "react";
import videojs from "video.js";

export function VideoRenderer({ src }: { src: string }) {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    // src,
    sources: [
      {
        src,
        type: "video/mp4", // TODO: implement this
      },
    ],
  };

  // const videoJsOptions = {
  //   autoplay: false,
  //   controls: true,
  //   width: 500,
  //   innerHeight: 500,
  //   responsive: true,
  //   fluid: true,
  //   src,
  //   // src: "http://vjs.zencdn.net/v/oceans.mp4",
  // };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />;
}
