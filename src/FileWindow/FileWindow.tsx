import AudioRenderer from "./AudioRenderer";
import DefaultRenderer from "./DefaultRenderer";
import DocumentRenderer from "./DocumentRenderer";
import ErrorRenderer from "./ErrorRenderer";
import ImageRenderer from "./ImageRenderer";
import SpreadsheetRenderer from "./SpreadsheetRenderer";
import VideoRenderer from "./VideoRenderer";

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
}
export default function FileWindow({
  fileName,
  fileType,
  fileUrl,
}: FileWindowInterface) {
  if (!fileUrl || Boolean(fileUrl) === false) {
    return <ErrorRenderer />;
  }
  // get the file type  as pdf, doc, or whatever, and use the apt renderer
  switch (fileType.trim()) {
    case "image":
      return <ImageRenderer />;

    case "document":
      return <DocumentRenderer />;

    case "spreadsheet":
      return <SpreadsheetRenderer />;

    case "video":
      return <VideoRenderer />;

    case "audio":
      return <AudioRenderer />;

    default:
      return <DefaultRenderer />;
  }
}
