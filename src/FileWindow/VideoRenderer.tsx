import videojs from "video.js";
import "video.js/dist/video-js.css";
import { FileProps } from "./FileWindow";

export default function VideoRenderer({ src, className }: FileProps) {
  return (
    <figure>
      <video
        id="my-video"
        className={"videjs" + " " + className}
        controls
        preload="auto"
        width="640"
        height="264"
        poster="MY_VIDEO_POSTER.jpg"
        data-setup="{}"
      >
        <source src={src} type="video/mkv" />

        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video>
    </figure>
  );
}
