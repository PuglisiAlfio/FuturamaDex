import { useContext } from "react";
import { FavoriteContext } from "../favorites/FavoritesContext";
import type { FuturamaCharacter } from "../types";

// Tipo dei props accettati da Card
type CardProps = {
  characters: FuturamaCharacter[];
  onSelectCharacter: (char: FuturamaCharacter) => void;
};

export default function Card({ characters, onSelectCharacter }: CardProps) {
  const favCtx = useContext(FavoriteContext);

  if (!favCtx) return null; // fallback in caso il context non sia disponibile

  const { favorites, addToFavorites, removeFromFavorites } = favCtx;

  const isFavorite = (id: number) => favorites.some((char) => char.id === id);

  return (
    <>
      {characters.map((char) => (
        <div
          key={char.id}
          className="bg-white p-4 rounded-xl shadow relative cursor-pointer hover:shadow-lg transition"
          onClick={() => onSelectCharacter(char)}
        >
          <img
            src={char.images.main}
            alt={char.name.first}
            className="w-full h-32 object-contain"
          />
          <h2 className="font-bold mt-2 text-lg">{`${char.name.first} ${char.name.last}`}</h2>
          <p className="text-sm text-gray-600">
            {char.species} – {char.occupation}
          </p>

          {/* ⭐ Icona per gestire i preferiti */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // impedisce apertura della modale
              if (isFavorite(char.id)) {
                removeFromFavorites(char.id);
              } else {
                addToFavorites(char);
              }
            }}
            className={`absolute top-2 right-2 text-2xl cursor-pointer ${
              isFavorite(char.id) ? "text-yellow-400" : "text-gray-300"
            } hover:scale-110 transition`}
            aria-label="toggle favorite"
          >
            ★
          </button>
        </div>
      ))}
    </>
  );
}
