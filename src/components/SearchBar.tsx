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
        className={`fixed top-0 right-0 z-40 text-[#ffbb38] dark:text-slate-800 ease-in-out duration-500
        transform
        ${isOpen ? "-translate-x-72" : "translate-x-0"}
      `}
      >
        {!isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-18 w-18 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-tl-md rounded-bl-md p-4 dark:bg-gray-400 dark:hover:bg-gray-200"
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
            className="h-18 w-18 bg-gray-900 hover:bg-gray-800 cursor-pointer rounded-tl-md rounded-bl-md p-4 dark:bg-gray-400 dark:hover:bg-gray-200"
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
        className={`fixed top-0 right-0 h-full w-72 flex flex-col bg-gray-900 p-2 text-white transition-transform duration-500 ease-in-out dark:bg-gray-400  ${
    isOpen ? "translate-x-0 z-30" : "translate-x-full z-30"
  }`}
      >
        <div className="flex items-center mb-5">
          <label className="mr-3 dark:text-slate-800">Cerca:</label>
          <input
            type="text"
            className="bg-transparent p-1 rounded-lg border border-gray-600 w-[60%] dark:text-slate-800"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex items-center space-x-1 px-2 py-3 text-white dark:text-slate-800">
          <span>Personaggi trovati - {filtered.length}</span>
        </div>

        <div className="overflow-auto max-h-[calc(100vh-150px)]">
          {filtered.map((char) => (
            <div
              key={char.id}
              className="flex items-center h-20 gap-5 text-slate-200 hover:bg-gray-800 cursor-pointer rounded-md px-2 dark:text-slate-800 dark:hover:bg-gray-200"
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
