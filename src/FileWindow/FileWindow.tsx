import DefaultRenderer from "./DefaultRenderer";
import DocumentRenderer from "./DocumentRenderer";
import ErrorRenderer from "./ErrorRenderer";
import SpreadsheetRenderer from "./SpreadsheetRenderer";
import "./FileWindow.module.css";
import { FileType, guessFileType } from "../file.types";
export interface FileWindowInterface {
  fileName: string;
  fileExtension: string;
  fileUrl: string;
  className?: string;
}
export default function FileWindow({
  fileName,
  fileExtension,
  fileUrl,
  className,
}: FileWindowInterface) {
  if (!fileUrl || Boolean(fileUrl) === false) {
    return <ErrorRenderer />;
  }

  const computedFileType = guessFileType(fileExtension.trim());
  // get the file type  as pdf, doc, or whatever, and use the apt renderer
  switch (computedFileType as unknown as string) {
    case FileType.Image:
      return (
        <div>
          <img src={fileUrl} className={className} />
        </div>
      );

    case FileType.Document:
      return <DocumentRenderer />;

    case FileType.CSV:
      return <SpreadsheetRenderer />;

    case FileType.Video:
      return (
        <video controls preload="auto" className={className}>
          <source src={fileUrl} />
        </video>
      );

    case FileType.Audio:
      return (
        <audio controls preload="auto" className={className}>
          <source src={fileUrl} type="audio/mp3" />
        </audio>
      );

    default:
      return <DefaultRenderer />;
  }
}
