import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/favorites" className="hover:underline">
        Favoriti
      </Link>
      <ToggleThemeButton />
    </nav>
  );
}
