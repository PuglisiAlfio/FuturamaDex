# FuturamaDex

FuturamaDex è una webapp in **React + TypeScript** che consente di esplorare i personaggi della serie animata **Futurama**, utilizzando una REST API pubblica.

---

## Stack Tecnologico

- **React 18 + TypeScript**
- **Vite** – build tool ultrarapido
- **TailwindCSS** – per uno styling modulare e moderno
- **React Router** – gestione routing lato client
- **Framer Motion** – animazioni fluide e accessibili

---

## Stato attuale del progetto

### Setup iniziale

- Progetto inizializzato con Vite, React, TypeScript e TailwindCSS
- Configurato il routing con React Router

### Pagina `Home`

- Recupero dei dati dei personaggi tramite API pubblica Futurama
- Gestione dello stato di caricamento e degli errori
- Visualizzazione dei personaggi in una **griglia responsive**

### Componenti UI

- `Card.tsx` – componente riutilizzabile per ogni personaggio
- `CharacterModal.tsx` – modale con dettagli aggiuntivi (frase, immagine, bio)
- Aggiunte animazioni fluide al modale tramite Framer Motion

### Gestione dei Preferiti

- Creato `FavoritesContext.tsx` con **Context API**
- Favoriti salvati in `localStorage` per persistenza
- Integrazione dei pulsanti "aggiungi/rimuovi dai preferiti" nella `Card`
- Creata pagina `Favorites.tsx` per mostrare solo i personaggi preferiti
- Layout responsive anche nella pagina preferiti
- Possibilità di rimuovere i preferiti direttamente dalla pagina
- Aggiunta funzionalità di ricerca o filtro

---

## Prossimi Step

- Miglioramento UI/UX delle card (hover effects, info brevi)