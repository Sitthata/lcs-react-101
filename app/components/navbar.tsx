export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}
