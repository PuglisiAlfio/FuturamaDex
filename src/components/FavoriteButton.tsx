import { useContext } from "react";
import { FavoriteContext } from "../favorites/FavoritesContext";
import type { FuturamaCharacter } from "../types";

type FavoriteButtonProps = {
  character: FuturamaCharacter;
  className?: string;
};

export default function FavoriteButton({ character, className = "" }: FavoriteButtonProps) {
  const favCtx = useContext(FavoriteContext);
  if (!favCtx) return null;

  const { favorites, addToFavorites, removeFromFavorites } = favCtx;

  const isFavorite = favorites.some((char) => char.id === character.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFavorites(character.id);
    } else {
      addToFavorites(character);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`text-2xl cursor-pointer hover:scale-110 transition ${
        isFavorite ? "text-yellow-400" : "text-gray-300"
      } ${className}`}
      aria-label={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      ★
    </button>
  );
}
