import { createSlice } from "@reduxjs/toolkit";

// Definiamo un tipo specifico perché in questo caso può essere soltanto light o dark
type ThemeMode = "light" | "dark";

//Stato iniziale tipizzato
type InitialThemeState = {
  mode: ThemeMode;
};

const initialTheme: InitialThemeState = {
  mode: "light", // Il tema iniziale è già in modalità light
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toggleTheme(state) { //Azione per alternare tra dark e light mode
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions; //Esportiamo l'azione per modificare il tema
export default themeSlice.reducer;
