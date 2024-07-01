import { Component, ReactNode } from "react";
import AudioRenderer from "./AudioRenderer";
import DefaultRenderer from "./DefaultRenderer";
import DocumentRenderer from "./DocumentRenderer";
import ErrorRenderer from "./ErrorRenderer";
import ImageRenderer from "./ImageRenderer";
import SpreadsheetRenderer from "./SpreadsheetRenderer";
import VideoRenderer from "./VideoRenderer";

export interface FileProps {
  src: string;
  className?: string;
}

export interface FileWindowInterface {
  fileName: string;
  fileType:
    | "image"
    | "document"
    | "spreadsheet"
    | "video"
    | "audio"
    | "pdf"
    | "unknown";
  fileUrl: string;
  className?: string;
}
export default function FileWindow({
  fileName,
  fileType,
  fileUrl,
  className,
}: FileWindowInterface) {
  if (!fileUrl || Boolean(fileUrl) === false) {
    return <ErrorRenderer />;
  }
  // get the file type  as pdf, doc, or whatever, and use the apt renderer
  switch (fileType.trim()) {
    case "image":
      return <ImageRenderer src={fileUrl} className={className} />;

    case "document":
      return <DocumentRenderer />;

    case "spreadsheet":
      return <SpreadsheetRenderer />;

    case "video":
      return <VideoRenderer src={fileUrl} />;

    case "audio":
      return <AudioRenderer />;

    default:
      return <DefaultRenderer />;
  }
}

// export abstract class FileViewer extends Component {
//   render(): ReactNode {
//     return <></>;
//   }
// }
