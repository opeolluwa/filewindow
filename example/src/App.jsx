import FileWindow from "../../src/FileWindow/FileWindow";
import "./App.css";
import testImage from "../test-files/test-image.png";
import testVideo from "../test-files/test-video.mp4";
import testAudio from "../test-files/test-audio.mp3";

function App() {
  return (
    <>
      <FileWindow fileUrl={testImage} fileType="image" className="" />
      <FileWindow fileUrl={testVideo} fileType="video" className="" />
      <FileWindow fileUrl={testAudio} fileType="audio" className="" />
    </>
  );
}

export default App;
