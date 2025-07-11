import type { FuturamaCharacter } from "../types";

type Props = {
  character: FuturamaCharacter;
  onClose: () => void;
};

export default function CharacterModal({ character, onClose }: Props) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-xl max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()} // Evita la chiusura cliccando dentro la modale
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-800 hover:text-red-500 text-3xl font-bold hover:cursor-pointer"
        >
          &times;
        </button>
        <img
          src={character.images.main}
          alt={`${character.name.first} ${character.name.last}`}
          className="w-full h-48 object-contain mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">{`${character.name.first} ${character.name.last}`}</h2>
        <p className="text-sm text-gray-600 mb-1">
          Specie: {character.species}
        </p>
        <p className="text-sm text-gray-600 mb-1">
          Occupazione: {character.occupation}
        </p>
        <p className="text-sm text-gray-600 mb-4">Genere: {character.gender}</p>
        <blockquote className="italic text-gray-700">
          “{character.sayings[0] || "Nessuna citazione disponibile."}”
        </blockquote>
      </div>
    </div>
  );
}
