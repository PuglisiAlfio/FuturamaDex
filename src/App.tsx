import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useAppSelector } from './store/hooks.ts';
import AppRoutes from './routes/AppRoutes.tsx'
import Navbar from './components/Navbar.tsx'
import './App.css'


function App() {
  // Leggiamo il tema dallo store Redux
  const theme = useAppSelector((state) => state.theme.mode);

  // Aggiorniamo la classe 'dark' sull'HTML quando cambia il tema
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  console.log(theme)
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App
