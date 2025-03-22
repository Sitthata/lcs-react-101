import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My App</h1>
      <div className="flex gap-4">
        <Link className="hover:text-blue-500" to="/">Home</Link>
        <Link className="hover:text-blue-500" to="/about">About</Link>
      </div>
    </nav>
  );
}
