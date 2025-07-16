import { useContext } from "react";
import { FavoriteContext } from "../favorites/FavoritesContext";
import type { FuturamaCharacter } from "../types";

// Tipo dei props
type FavoriteButtonProps = {
  character: FuturamaCharacter; //interfaccia
  className?: string;
};

export default function FavoriteButton({
  character,
  className = "", //personalizzazione classi tramite props
}: FavoriteButtonProps) {
  const favCtx = useContext(FavoriteContext); //Recupero il context per gestire i preferiti

  if (!favCtx) return null; // Se il context non è disponibile, non mostro nulla

  const { favorites, addToFavorites, removeFromFavorites } = favCtx;
  const isFavorite = favorites.some((fav) => fav.id === character.id); // Verifico se il personaggio è già tra i preferiti

  //Funzione per aggiungere o rimuovere dai preferiti
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    return isFavorite
      ? removeFromFavorites(character.id)
      : addToFavorites(character);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`cursor-pointer transition hover:scale-110 text-3xl ${
        isFavorite ? "text-yellow-400" : "text-gray-300"
      } ${className}`}
      aria-label={
        isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"
      }
    >
      ★
    </button>
  );
}
