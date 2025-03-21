
type PictureProps = {
  src: string;
  alt: string;
};

export default function Picture({ src, alt }: PictureProps) {
  return (
    <div>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
