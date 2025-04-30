import axios from "axios"
import { useState } from "react"

export function SearchingBar(props) {
  const [artist, setArtist] = useState("")

  function searchArtist(query) {
    axios
      .get(`https://api.spotify.com/v1/search?q=${query}&type=artist&limit=12`)
      .then((data) => {
        console.log(data.data.artists.items)
        props.setArtists(data.data.artists.items)
      })
      .catch((error) => {
        console.log("Error!:", error)
      })
  }

  return (
    <input
      type="text"
      value={artist}
      className="search-input"
      placeholder="Search an artist..."
      onChange={(event) => {
        const value = event.target.value;
        setArtist(value);  
        if (value.trim() === "") {
          props.setArtists([]);
          return; //ver si puedo agregar un botón de eliminar para no tener q usar esto
        }
        searchArtist(value); 
      }}
    />
  )
}