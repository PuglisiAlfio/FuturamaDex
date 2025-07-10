import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.tsx'
import Navbar from './components/Navbar.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-4">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App
