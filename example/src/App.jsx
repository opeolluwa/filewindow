import FileWindow from "../../src/FileWindow/FileWindow";
import "./App.css";
import testImage from "../test-files/test-image.png";
import testVideo from "../test-files/test-video.mp4";
import testAudio from "../test-files/test-audio.mp3";

function App() {
  return (
    <>
      <FileWindow fileUrl={testImage} fileExtension="png" className="" />
      <FileWindow
        fileUrl="http://vjs.zencdn.net/v/oceans.mp4"
        // fileUrl="../test-files/test-video.mp4"
        fileExtension="mp4"
        className=""
      />
      {/* <FileWindow fileUrl={testAudio} fileType="audio" className="" /> */}
    </>
  );
}

export default App;
