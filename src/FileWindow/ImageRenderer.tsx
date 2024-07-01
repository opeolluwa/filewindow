import { FileProps } from "./FileWindow";

export default function ImageRenderer({ src, className }: FileProps) {
  return (
    <figure>
      <img src={src} className={className} />
    </figure>
  );
}
