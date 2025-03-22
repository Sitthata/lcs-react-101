type ProfileProps = {
  name: string;
  email: string;
  image?: string;
};

export default function Profile({
  name,
  email,
  image = "https://github.com/shadcn.png",
}: ProfileProps) {
  return (
    <div className="flex items-center gap-4">
      <img
        src={image}
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-xs text-gray-500">{email}</p>
      </div>
    </div>
  );
}

