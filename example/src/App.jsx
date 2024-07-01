import FileWindow from "../../src/FileWindow/FileWindow";
import "./App.css";
import testImage from "../../test-files/test-image.png";
import testVideo from "../../test-files/test-video.mp4";
function App() {
  return (
    <>
      {/* <FileWindow fileUrl={testImage} fileType="image" className="" /> */}
      <FileWindow fileUrl={testVideo} fileType="video" className="" />
    </>
  );
}

export default App;
