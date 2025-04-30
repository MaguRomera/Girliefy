import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import { DetalleArtista } from "./pages/detalleArtista.jsx";
import "./styles/App.css"
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [token, setToken] = useState(null)
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
        let token = data.data.access_token;
        console.log(`The token is: ${token}`) //BORRAR ANTES DE DEPLOYAR
        localStorage.setItem("spotify_token", token);
        axios.defaults.headers.common['Authorization'] = "Bearer " + token;
        setToken(token)
        
      }).catch((error) => {
        console.log(`Error al obtener el token: ${error}`)
      })
  }

  useEffect(() =>{
    if(!token){
      requestToken();
    }
    
  },[]);


  return (
    <Routes>
      <Route path="/" element={<Home token={token}/>} />
      <Route path="/artist/:name/:id" element={<DetalleArtista token={token} requestToken={requestToken}/>}/>
    </Routes>
  );
}

export default App;
