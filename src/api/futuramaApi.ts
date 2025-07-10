import axios from "axios";
import type { FuturamaCharacter } from "../types.ts"; //interfaccia

const BASE_URL = "https://api.sampleapis.com/futurama"; //url di partenza per tutte le chiamate

//funzione asincrona che recupera i dati dei personaggi
export const getCharacters = async(): Promise<FuturamaCharacter[]> => {
    const response = await axios.get(`${BASE_URL}/characters`);
    return response.data // Ritorniamo solo i dati che verrano "lavorati" in seguito
}