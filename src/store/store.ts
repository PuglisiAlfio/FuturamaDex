import { configureStore } from "@reduxjs/toolkit"
import favoritesReducer from "./favoriteSlice.ts"


// Crea lo store Redux:
// Qui registriamo tutti i reducer della nostra app
// Attualmente abbiamo solo "favorites"
export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

// Tipi derivati dallo store:
// RootState: rappresenta la struttura completa dello stato globale
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch: il tipo del dispatch, utile per i custom hook
export type AppDispatch = typeof store.dispatch;