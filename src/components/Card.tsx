import type { FuturamaCharacter } from "../types";
import FavoriteButton from "./FavoriteButton";

type CardProps = {
  characters: FuturamaCharacter[];
  onSelectCharacter: (char: FuturamaCharacter) => void;
};

export default function Card({ characters, onSelectCharacter }: CardProps) {
  return (
    <>
      {characters.map((char) => (
        <div
          key={char.id}
          className="bg-gray-400 p-4 rounded-xl shadow relative cursor-pointer hover:shadow-lg transition dark:bg-gray-900"
          onClick={() => onSelectCharacter(char)}
        >
          <img
            src={char.images.main}
            alt={char.name.first}
            className="w-full h-32 object-contain"
          />
          <h2 className="font-bold mt-2 text-lg text-gray-800 dark:text-amber-200">{`${char.name.first} ${char.name.last}`}</h2>
          <p className="text-sm text-gray-700 dark:text-amber-200">
            {char.species} – {char.occupation}
          </p>

          <FavoriteButton
            character={char}
            className="absolute top-2 right-2 text-2xl"
          />
        </div>
      ))}
    </>
  );
}
