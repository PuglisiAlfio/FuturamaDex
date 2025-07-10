import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex gap-4">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/favorites" className="hover:underline">
        Favoriti
      </Link>
    </nav>
  );
}
