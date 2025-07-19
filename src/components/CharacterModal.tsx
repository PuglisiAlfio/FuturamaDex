import { motion, AnimatePresence } from "framer-motion";
import type { FuturamaCharacter } from "../types";
import FavoriteButton from "./FavoriteButton";

type Props = {
  character: FuturamaCharacter;
  onClose: () => void;
};
// Varianti per le animazioni del modal (Framer Motion)
const modalVariants = {
  hidden: { opacity: 0, y: "-50%", scale: 0.9 }, // Modal nascosto
  visible: { opacity: 1, y: "0%", scale: 1, transition: { duration: 0.3 } }, // Animazione entrata
  exit: { opacity: 0, y: "-50%", scale: 0.9, transition: { duration: 0.2 } }, // Animazione uscita
};

export default function CharacterModal({ character, onClose }: Props) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
        onClick={onClose}
      >
        {/*Card Modal*/}
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-400 dark:bg-gray-900 rounded-xl p-6 relative max-w-sm w-full shadow-lg flex flex-col items-center"
        >
          {/* FavoriteButton a sinistra */}
          <div className="absolute top-2 left-2">
            <FavoriteButton character={character} className="text-4xl" />
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-800 dark:text-amber-200 hover:text-red-500 text-3xl font-bold"
            aria-label="Close Modal"
          >
            &times;
          </button>

          <img
            src={character.images.main}
            alt={character.name.first}
            className="w-full h-48 object-contain"
          />
          <h2 className="text-xl font-bold mt-4 text-gray-800 dark:text-amber-200">{`${character.name.first} ${character.name.last}`}</h2>
          <p className="text-gray-800 dark:text-amber-200 italic mb-2">{character.sayings[0]}</p>
          <p className="text-sm text-gray-800 dark:text-amber-200">
            {character.species} – {character.occupation}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
