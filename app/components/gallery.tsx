type GalleryProps = {
    children: React.ReactNode;
}

export default function Gallery({ children }: GalleryProps) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}