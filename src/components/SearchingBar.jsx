import axios from "axios"
import { useState } from "react"

export function SearchingBar(props) {
  const [artist, setArtist] = useState("")

  function searchArtist(query) {
    if (!query) return;  
    axios
      .get(`https://api.spotify.com/v1/search?q=${query}&type=artist&limit=10`)
      .then((data) => {
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
      placeholder="Search an artist..."
      onChange={(event) => {
        const value = event.target.value;
        setArtist(value);  
        searchArtist(value); 
      }}
    />
  )
}