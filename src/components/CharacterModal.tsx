import type { FuturamaCharacter } from "../types";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  character: FuturamaCharacter;
  onClose: () => void;
};

// Varianti per animazioni del contenuto del modal
const modalVariants = {
  hidden: { opacity: 0, y: "-50%", scale: 0.9 },
  visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: "-50%", scale: 0.9, transition: { duration: 0.2 } },
};

// Varianti per l'overlay sfondo
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function CharacterModal({ character, onClose }: Props) {
  return (
    <AnimatePresence>
      {/* Overlay con animazione */}
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose} // Clic sullo sfondo chiude il modal
      >
        {/* Blocchiamo la propagazione del click per non chiudere cliccando il contenuto */}
        <motion.div
          className="bg-white rounded-xl p-6 relative max-w-sm w-full shadow-lg"
          onClick={(e) => e.stopPropagation()}
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl font-bold"
            aria-label="Chiudi Modal"
          >
            &times;
          </button>
          <img
            src={character.images.main}
            alt={character.name.first}
            className="w-full h-48 object-contain"
          />
          <h2 className="text-xl font-bold mt-4">{`${character.name.first} ${character.name.last}`}</h2>
          <p className="text-gray-600 italic mb-2">{character.sayings[0]}</p>
          <p className="text-sm text-gray-500">
            {character.species} – {character.occupation}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
