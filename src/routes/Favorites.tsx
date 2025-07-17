import { useAppSelector } from "../store/hooks";
import FavoriteButton from "../components/FavoriteButton";

export default function Favorites() {

  // Recupera la lista dei preferiti dallo stato Redux
  const favorites = useAppSelector((state) => state.favorites.items);

  // Se non ci sono preferiti, mostra un messaggio informativo
  if (favorites.length === 0) {
    return <p className="p-4">Nessun preferito ancora.</p>;
  }

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {favorites.map((char) => ( <>
        <li
          key={char.id}
          className="bg-white p-4 rounded-xl shadow relative"
        >
          <img
            src={char.images.main}
            alt={char.name.first}
            className="w-full h-32 object-contain"
          />
          <p className="mt-2 font-semibold text-gray-600">
            {char.name.first} {char.name.last}
          </p>
          <FavoriteButton character={char} className="absolute top-2 right-2 text-2xl" />
        </li>
        </>
      ))}
    </ul>
  );
}
