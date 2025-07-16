import { useState } from "react";
import type { FuturamaCharacter } from "../types";
import CharacterModal from "./CharacterModal";

type Props = {
  characters: FuturamaCharacter[];
};

export default function SearchBar({ characters }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCharacter, setSelectedCharacter] =
    useState<FuturamaCharacter | null>(null);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  const filtered = characters.filter((char) => {
    if (searchTerm === "") return true;

    const firstName = char.name.first.toLowerCase();
    const lastName = char.name.last.toLowerCase();
    const search = searchTerm.toLowerCase();

    return firstName.startsWith(search) || lastName.startsWith(search);
  });

  const openModal = (char: FuturamaCharacter) => {
    setSelectedCharacter(char);
    setIsOpen(false); // Chiude sidebar
  };

  const closeModal = () => setSelectedCharacter(null);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className={`fixed top-0 left-0 z-40 text-[#ffbb38] ease-in-out duration-500
        transform
        ${isOpen ? "translate-x-72" : "translate-x-0"}
      `}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-14 w-14 bg-[#1c1c1c] hover:bg-[#2a2a2a] cursor-pointer rounded-tr-md rounded-br-md p-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-14 w-14 bg-[#1c1c1c] hover:bg-[#2a2a2a] cursor-pointer rounded-tr-md rounded-br-md p-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 flex flex-col space-y-2 border border-transparent bg-[#1c1c1c] p-2 text-white transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0 z-30" : "-translate-x-full z-0"
        }`}
      >
        <div className="flex items-center mb-5">
          <label className="mr-3">Cerca:</label>
          <input
            type="text"
            className="bg-transparent p-1 rounded-lg border border-gray-400 w-[60%]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-1 px-2 py-3 text-white">
          <span>Personaggi trovati - {filtered.length}</span>
        </div>

        <div className="overflow-auto max-h-[calc(100vh-150px)]">
          {filtered.map((char) => (
            <div
              key={char.id}
              className="flex items-center h-20 gap-5 text-slate-200 hover:bg-[#2a2a2a] cursor-pointer rounded-md px-2"
              onClick={() => openModal(char)}
            >
              <img
                src={char.images.main}
                alt={`${char.name.first} ${char.name.last}`}
                className="h-16 w-16 bg-cover bg-center object-contain"
              />
              <h3 className="font-bold text-sm">
                {char.name.first} {char.name.last}
              </h3>
            </div>
          ))}
        </div>
      </aside>

      {/* Modal */}
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </>
  );
}
