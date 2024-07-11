import VideoJS from "./Videojs";
import React from "react";
import videojs from "video.js";

export const VideoRenderer = (src) => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src:"http://vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4", // TODO: implement this
      },
    ],
  };

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

  return (
    <>
      <div>{src.toString() + " "} heheh</div>

      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </>
  );
};
