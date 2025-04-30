import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import { DetalleArtista } from "./pages/detalleArtista.jsx";
import "./styles/App.css"
import { useEffect } from "react";
import axios from "axios";

function App() {

  function requestToken() {
    axios.post("https://accounts.spotify.com/api/token",
      {
        grant_type:"client_credentials",
        client_id: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
        client_secret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }, 
      }).then((data) => {
        localStorage.setItem("spotify_token", data.data.access_token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + data.data.access_token;
      }).catch((error) => {
        console.log(`Error: ${error}`)
        console.log(error)
      })
  }

  useEffect(() =>{
    requestToken()
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artist/:id" element={<DetalleArtista/>}/>
    </Routes>
  );
}

export default App;
