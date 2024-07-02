// render the folder icon

export enum FileType {
  Image = "image",
  Audio = "audio",
  PDF = "pdf",
  CSV = "csv",
  Presentation = "presentation",
  Video = "video",
  Archive = "archive",
  Document = "document",
  Text = "text",
  SVG = "svg",
  Default = "default",
}

export function guessFileType(fileExtension: string): string {
  const imageExtensions = [
    "jpg",
    "jpeg",
    "png",
    "gif",
    "bmp",
    "tiff",
    "raw",
    "svg",
    "ai",
    "eps",
    "psd",
    "xcf",
    "ico",
    "webp",
    "jxr",
    "hdr",
    "tif",
    "exif",
    "pgm",
    "ppm",
    "pbm",
    "pnm",
    "heic",
    "heif",
    "dng",
    "cr2",
    "nef",
    "arw",
    "orf",
    "rw2",
    "sr2",
    "raf",
    "mrw",
    "pef",
    "x3f",
    "3fr",
    "kdc",
    "srw",
    "nrw",
    "rwz",
    "rwl",
    "iiq",
    "rw1",
    "r3d",
    "fff",
    "yuv",
    "cin",
    "dpx",
    "jp2",
    "j2k",
    "jpf",
    "jpx",
    "jpm",
    "mj2",
    "wdp",
    "hdp",
    "dds",
    "pvr",
    "tga",
    "cur",
    "icl",
    "thm",
    "sai",
    "ora",
    "pdn",
    "kra",
    "cpt",
    "pdd",
    "mng",
    "apng",
    "svgz",
    "emf",
    "wmf",
  ];
  const documentExtensions = [
    "doc",
    "docx",
    "rtf",
    "odt",
    "ods",
    "odp",
    "odg",
    "odp",
    "fodp",
    "otp",
    "doc",
    "dot",
    "docx",
    "docm",
    "dotx",
    "dotm",
    "docb",
    "odt",
    "fodt",
  ];
  const svgExtensions = ["svg"];
  const textExtensions = ["txt"];
  const audioExtensions = [
    "3gp",
    "aa",
    "aac",
    "aax",
    "act",
    "aiff",
    "alac",
    "amr",
    "ape",
    "au",
    "awb",
    "dss",
    "dvf",
    "flac",
    "gsm",
    "iklax",
    "ivs",
    "m4a",
    "m4b",
    "m4p",
    "mmf",
    "movpkg",
    "mp3",
    "mpc",
    "msv",
    "nmf",
    "ogg",
    "oga",
    "mogg",
    "opus",
    "ra",
    "rm",
    "raw",
    "rf64",
    "sln",
    "tta",
    "voc",
    "vox",
    "wav",
    "wma",
    "wv",
    "webm",
    "8svx",
    "cda",
  ];
  const pdfExtensions = ["pdf"];
  const csvExtensions = ["csv"];
  const presentationExtensions = [
    "ppt",
    "pot",
    "pps",
    "pptx",
    "pptm",
    "potx",
    "potm",
    "ppam",
    "ppsx",
    "ppsm",
    "sldx",
    "sldm",
    "thmx",
  ];
  const videoExtensions = [
    "mp4",
    "mkv",
    "webm",
    "flv",
    "vob",
    "ogv",
    "ogg",
    "drc",
    "gif",
    "gifv",
    "mng",
    "avi",
    "MTS",
    "MT2S",
    "TS",
    "mov",
    "qt",
    "wmv",
    "yuv",
    "rm",
    "rmvb",
    "viv",
    "asf",
    "amv",
    "m4p",
    "m4v",
    "mpg",
    "mp2",
    "mpeg",
    "mpe",
    "mpv",
    "m2v",
    "svi",
    "3gp",
    "3g2",
    "mxf",
    "roq",
    "nsv",
    "f4v",
    "f4p",
    "f4a",
    "f4b",
  ];
  const archiveExtensions = ["zip", "rar", "tar", "gz"];
  const extension = fileExtension.toLocaleLowerCase().trim();

  switch (true) {
    case imageExtensions.includes(extension):
      return FileType.Image;
    case audioExtensions.includes(extension):
      return FileType.Audio;
    case pdfExtensions.includes(extension):
      return FileType.PDF;
    case csvExtensions.includes(extension):
      return FileType.CSV;
    case presentationExtensions.includes(extension):
      return FileType.Presentation;
    case videoExtensions.includes(extension):
      return FileType.Video;
    case archiveExtensions.includes(extension):
      return FileType.Archive;
    case documentExtensions.includes(extension):
      return FileType.Document;
    case textExtensions.includes(extension):
      return FileType.Text;
    case svgExtensions.includes(extension):
      return FileType.SVG;
    default:
      return FileType.Default;
  }
}
