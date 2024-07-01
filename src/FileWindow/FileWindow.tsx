import DefaultRenderer from "./DefaultRenderer";
import DocumentRenderer from "./DocumentRenderer";
import ErrorRenderer from "./ErrorRenderer";
import SpreadsheetRenderer from "./SpreadsheetRenderer";
import "./FileWindow.module.css";
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
      return (
        <figure>
          <img src={fileUrl} className={className} />
        </figure>
      );

    case "document":
      return <DocumentRenderer />;

    case "spreadsheet":
      return <SpreadsheetRenderer />;

    case "video":
      return (
        <video controls preload="auto" className={className}>
          <source src={fileUrl} />
        </video>
      );

    case "audio":
      return (
        <audio controls preload="auto" className={className}>
          <source src={fileUrl} type="audio/mp3" />
        </audio>
      );

    default:
      return <DefaultRenderer />;
  }
}
