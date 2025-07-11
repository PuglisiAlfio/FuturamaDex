import { useEffect, useState } from "react";
import { getCharacters } from "../api/futuramaApi.ts"; // La funzione che chiama l’API
import type { FuturamaCharacter } from "../types.ts";
import Card from "../components/Card.tsx";
export default function Home() {
  // Stato per salvare i personaggi
  const [characters, setCharacters] = useState<FuturamaCharacter[]>([]);

  // Stato per indicare se siamo in caricamento
  const [loading, setLoading] = useState(true);

  // Stato per eventuali errori nella chiamata
  const [error, setError] = useState("");

  // useEffect: eseguito al primo montaggio del componente
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCharacters(); // Chiamiamo la funzione che prende i dati dei personaggi
        setCharacters(data); // Salviamo i dati nello stato
      } catch (err) {
        console.log(err);
        setError("Errore nel caricamento dei personaggi");
      } finally {
        setLoading(false); // In ogni caso, fermiamo il caricamento
      }
    };

    fetchData();
  }, []);

  // Se stiamo ancora caricando, mostriamo un messaggio
  if (loading) return <p>Caricamento...</p>;

  // Se c'è stato un errore, lo mostriamo
  if (error) return <p>{error}</p>;

  // Altrimenti mostriamo la lista di personaggi (che al momento saranno soltanto delle card bianche)
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      <Card characters={characters} />
    </div>
  );
}
