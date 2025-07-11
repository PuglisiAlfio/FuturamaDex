import type { FuturamaCharacter } from "../types.ts";

type CardProps = {
  characters: FuturamaCharacter[];
};

export default function Card({ characters }: CardProps) {
  return (
    <>
      {characters.map((char) => (
        <div key={char.id} className="bg-white p-4 rounded-xl shadow">
          <img
            src={char.images.main}
            alt={char.name.first}
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
