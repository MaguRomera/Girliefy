import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import { DetalleArtista } from "./pages/detalleArtista.jsx";
import "./styles/App.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:id" element={<DetalleArtista/>}/>
    </Routes>
  );
}

export default App;
