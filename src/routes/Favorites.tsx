import { useContext } from "react";
import { FavoriteContext } from "../favorites/FavoritesContext";

export default function Favorites() {
  const favCtx = useContext(FavoriteContext);

  if (!favCtx) return <p>Context non disponibile.</p>;

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Preferiti</h1>
      {favCtx.favorites.length === 0 ? (
        <p>Nessun preferito ancora.</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
          {favCtx.favorites.map((char) => (
            <li
              key={char.id}
              className="bg-white p-4 rounded-xl shadow relative hover:shadow-lg transition"
            >
              <button
                onClick={() => favCtx.removeFromFavorites(char.id)}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl font-bold"
                aria-label={`Rimuovi ${char.name.first} dai preferiti`}
              >
                ×
              </button>
              <img
                src={char.images.main}
                alt={char.name.first}
                className="w-full h-32 object-contain"
              />
              <p className="text-sm text-gray-600">
                {char.name.first} {char.name.last}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
