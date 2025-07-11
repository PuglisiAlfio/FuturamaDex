# FuturamaDex

FuturamaDex è una webapp in **React + TypeScript** che consente di esplorare i personaggi della serie animata **Futurama**, utilizzando una REST API pubblica.

## Stack Tecnologico

- React 18 + TypeScript
- Vite
- TailwindCSS
- React Router
- Framer Motion (per animazioni)

---

## Stato attuale del progetto

- Inizializzazione progetto con Vite, React, TypeScript e TailwindCSS
- Configurato il routing con React Router
- Creata pagina `Home` che:
  - Recupera i dati dei personaggi dall’API Futurama
  - Gestisce stati di caricamento ed errore
  - Mostra ogni personaggio in una griglia responsive
- Creato componente riutilizzabile `Card.tsx` per visualizzare ogni personaggio
- Creato componente `CharacterModal.tsx` per visualizzare i dettagli del personaggio cliccato
- Aggiunte animazioni al modal con Framer Motion

---

## Prossimi step

- Miglioramento UI/UX delle card e del modal
- Aggiunta funzionalità di ricerca o filtro
- Gestione dei preferiti con stato globale o localStorage
- Routing dinamico per pagina dettagliata per ogni personaggio (facoltativo)
