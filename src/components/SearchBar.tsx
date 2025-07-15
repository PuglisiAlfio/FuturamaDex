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

  const filtered = characters.filter(char => {
  if (searchTerm === '') return true;

  const firstName = char.name.first.toLowerCase();
  const lastName = char.name.last.toLowerCase();
  const search = searchTerm.toLowerCase();

  return firstName.startsWith(search) || lastName.startsWith(search);
})

  const openModal = (char: FuturamaCharacter) => {
    setSelectedCharacter(char);
    setIsOpen(false); // chiude la sidebar all'apertura del modal
  };

  const closeModal = () => setSelectedCharacter(null);

  return (
    <div>
      <button onClick={toggleSidebar}>
        {isOpen ? "Chiudi" : "Apri"} barra di ricerca
      </button>

      {isOpen && (
        <div>
          <label>
            Cerca:
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>

          <ul>
            {filtered.map((char) => (
              <li key={char.id}>
                <button onClick={() => openModal(char)}>
                  {char.name.first} {char.name.last}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Modal visibile solo se c'è un personaggio selezionato */}
      {selectedCharacter && (
        <CharacterModal character={selectedCharacter} onClose={closeModal} />
      )}
    </div>
  );
}
