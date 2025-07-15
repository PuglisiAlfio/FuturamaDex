import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { FuturamaCharacter } from "../types";

// Definizione del tipo per il contesto
type FavoritesContextType = {
  favorites: FuturamaCharacter[];
  addToFavorites: (char: FuturamaCharacter) => void;
  removeFromFavorites: (id: number) => void;
};

// Creiamo il contesto con un valore iniziale nullo
export const FavoriteContext = createContext<FavoritesContextType | null>(null);

// Provider per avvolgere l'app
export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FuturamaCharacter[]>(() => {
    try {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Errore nel parsing dei preferiti da localStorage:", error);
      return [];
    }
  });

  // Carica i preferiti da localStorage al primo render
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Salva su localStorage ogni volta che cambia
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  //funzione per aggiungere un personaggio ai favoriti
  const addToFavorites = (char: FuturamaCharacter) => {
    if (!favorites.find((f) => f.id === char.id)) {
      setFavorites([...favorites, char]);
    }
  };
  //funzione per rimuovere un personaggio dai favoriti
  const removeFromFavorites = (id: number) => {
    setFavorites(favorites.filter((f) => f.id !== id));
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
