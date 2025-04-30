import { SearchingBar } from "../components/SearchingBar";
import { ArtistInfo } from "../components/ArtistCard";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Home.css"

export default function Home() {

  const [artists, setArtists] = useState([])

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
        console.log(`Token received, it is: ${data.data.access_token}`)
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
    <div className="father-cnt">
      <span className="title-cnt">
        <h3>WELCOME TO</h3>
        <h1>Girliefy</h1>
      </span>
      <SearchingBar  
        artists = {artists}
        setArtists = {setArtists}
      />
      <div className="artists-cnt">
        {artists.length > 0 && artists.map((artist) => (
          <ArtistInfo 
            key={artist.id} artist={artist} 
          />
        ))} 
      </div>
    </div>
  );
}

