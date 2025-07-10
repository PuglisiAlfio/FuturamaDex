import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Favorites from "./Favorites.tsx";

export default function AppRoutes(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};