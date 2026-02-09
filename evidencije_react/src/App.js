import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Pocetna from "./pages/Pocetna";
import Predmeti from "./pages/Predmeti";
import Predaje from "./pages/Predaje";
import Zadaci from "./pages/Zadaci";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/login" element={<Login />} />
        <Route path="/predmeti" element={<Predmeti />} />
        <Route path="/predaje" element={<Predaje />} />
        <Route path="/zadaci" element={<Zadaci />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
