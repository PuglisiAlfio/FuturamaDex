import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { FuturamaCharacter } from "../types.ts";

// Chiave/costante che useremo per salvare i preferiti in localStorage
const FAVORITES = "favorites";

function loadFavorites(): FuturamaCharacter[] { // Carica i preferiti dal localStorage...
  try {
    const raw = localStorage.getItem(FAVORITES);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return []; // ...se c'è un errore o non esistono preferiti nel localStorage ritorna un array vuoto
  }
}

function saveFavorites(favs: FuturamaCharacter[]) { // Salva i preferiti nel localStorage
  try {
    localStorage.setItem(FAVORITES, JSON.stringify(favs));
  } catch {
    // ignora eventuali errori non bloccando l'app
  }
}

// Definiamo la struttura dello stato Redux per i preferiti
type FavoritesState = {
  items: FuturamaCharacter[];
};

// Stato iniziale: carichiamo i preferiti dal localStorage
const initialState: FavoritesState = {
  items: loadFavorites(),
};

// Crea lo slice Redux che comprende stato, reducers e azioni
const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    // aggiungiamo un personaggio ai preferiti se non è già presente
    addFavorite(state, action: PayloadAction<FuturamaCharacter>) {
      const exists = state.items.some((fav) => fav.id === action.payload.id);
      if (!exists) {
        state.items.push(action.payload);
        saveFavorites(state.items);
      }
    },
    // rimuoviamo un personaggio dai preferiti tramite il suo id
    removeFavorite(state, action: PayloadAction<number>) {
      const idx = state.items.findIndex((fav) => fav.id === action.payload);
      if (idx !== -1) {
        state.items.splice(idx, 1);
        saveFavorites(state.items);
      }
    },
    // utile se un domani vogliamo sostituire l’intero array
    setFavorites(state, action: PayloadAction<FuturamaCharacter[]>) {
      state.items = action.payload;
      saveFavorites(state.items);
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions; // Esportiamo le azioni per usarle nei componenti
export default favoritesSlice.reducer; // Esportiamo il reducer da aggiungere allo store