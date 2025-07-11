import type { FuturamaCharacter } from "../types";

type Props = {
  characters: FuturamaCharacter[];
  onSelectCharacter: (character: FuturamaCharacter) => void;
};

export default function Card({ characters, onSelectCharacter }: Props) {
  return (
    <>
      {characters.map((char) => (
        <div
          key={char.id}
          className="bg-white p-4 rounded-xl shadow hover:cursor-pointer hover:scale-105 transition"
          onClick={() => onSelectCharacter(char)}
        >
          <img
            src={char.images.main}
            alt={`${char.name.first} ${char.name.last}`}
            className="w-full h-32 object-contain"
          />
          <h2 className="font-bold mt-2 text-lg">{`${char.name.first} ${char.name.last}`}</h2>
          <p className="text-sm text-gray-600">
            {char.species} – {char.occupation}
          </p>
        </div>
      ))}
    </>
  );
}
