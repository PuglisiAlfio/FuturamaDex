import { Link } from "react-router-dom";
import ToggleThemeButton from "./ToggleThemeButton";

export default function Navbar() {
  return (
    <nav className="p-4 flex gap-4 bg-gray-400 text-gray-900 dark:bg-gray-900 dark:text-amber-200">
      <Link to="/" className="hover:bg-gray-300 dark:hover:bg-gray-800 rounded-2xl p-2">
        Home
      </Link>
      <Link to="/favorites" className="hover:bg-gray-300 dark:hover:bg-gray-800 rounded-2xl p-2">
        Favoriti
      </Link>
      <ToggleThemeButton />
    </nav>
  );
}
