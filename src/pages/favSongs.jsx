import { useEffect, useState } from "react";
import { FavSongCard } from "../components/FavSongCard";
import "../styles/FavSongs.css"

export function FavSongs() {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const favList = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(favList);
  }, []);

  return (
    <div className="fav-songs-cnt">
      <h2>MY FAVOURITE SONGS</h2>
      {favs.length === 0 ? (
        <p>Oops, it seems like you don't have fav songs yet...</p>
      ) : (
        favs.map((song) => (
            <FavSongCard
                song={song}
            />
        ))
      )}
    </div>
  );
}