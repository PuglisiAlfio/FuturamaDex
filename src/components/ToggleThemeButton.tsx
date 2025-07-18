import { useAppDispatch, useAppSelector } from "../store/hooks.ts";
import { toggleTheme } from "../store/themeSlice.ts";

export default function ToggleThemeButton() {

  // Hook Redux per inviare azioni
  const dispatch = useAppDispatch();

  // Recupera da Redux lo stato del tema
  const theme = useAppSelector((state) => state.theme.mode);

  const handleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleClick}
      className="px-3 py-1 text-sm rounded border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      aria-label="Cambia tema"
      title="Cambia tema"
      type="button"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
