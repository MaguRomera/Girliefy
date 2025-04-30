import { SearchingBar } from "../components/SearchingBar";
import { ArtistInfo } from "../components/ArtistCard";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "../styles/Home.css"

export default function Home() {

  const [artists, setArtists] = useState([])

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

