import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addFavorite, removeFavorite } from "../store/favoriteSlice";
import type { FuturamaCharacter } from "../types";

type FavoriteButtonProps = {
  character: FuturamaCharacter;
  className?: string;
};

export default function FavoriteButton({ character, className = "" }: FavoriteButtonProps) {
  // Hook Redux per inviare azioni
  const dispatch = useAppDispatch();

  // Recupera dal Redux store la lista dei preferiti
  const favorites = useAppSelector((state) => state.favorites.items);

  // Verifica se il personaggio è già tra i preferiti
  const isFavorite = favorites.some((fav) => fav.id === character.id);


  // Ferma la propagazione per evitare eventi sul genitore
  // Se il personaggio è già preferito → lo rimuove, altrimenti → lo aggiunge ai preferiti
  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      dispatch(removeFavorite(character.id));
    } else {
      dispatch(addFavorite(character));
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`cursor-pointer transition hover:scale-110 text-3xl ${
        isFavorite ? "text-yellow-400" : "text-gray-300"
      } ${className}`}
      aria-label={isFavorite ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
    >
      ★
    </button>
  );
}
