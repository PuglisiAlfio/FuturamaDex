// Interfaccia TypeScript che definisce la struttura dei dati dei personaggi Futurama
export interface FuturamaCharacter {
  id: number;

  name: {
    first: string;   // Nome
    middle?: string; // Secondo nome (opzionale, può non esserci)
    last: string;    // Cognome
  };

  images: {
    headShot: string; // Immagine piccola
    main: string;     // Immagine grande del personaggio
  };

  species: string;      // Specie
  age: string;          // Età
  homePlanet: string;   // Pianeta d'origine
  occupation: string;   // Professione o ruolo
  sayings: string[];    // Array di citazioni del personaggio
  gender: string;
}
