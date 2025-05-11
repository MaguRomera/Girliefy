import Favbtnicon from "../media/heart.svg";
import Favbtniconnofill from "../media/no-fill-heart.svg";
import { useState, useEffect } from "react";

export function MarkAsFav(props) {
  const [isMarked, setIsMarked] = useState(false);

  const { songid, songname, artistname, artistid, albumname, albumid } = props;

  const favSong = {
    id: songid,
    name: songname,
    artista: artistname,
    artistid: artistid,
    album: albumname,
    albumid: albumid,
  };

  // Verificar q esté marcada
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const exists = favs.some(song => song.id === favSong.id);
    setIsMarked(exists);
  }, []);

  const handleFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];

    if (isMarked) {
      // Sacar de favoritos
      const updated = favs.filter(song => song.id !== favSong.id);
      localStorage.setItem("favs", JSON.stringify(updated));
      setIsMarked(false);
    } else {
      // Agregar a favoritos
      favs.push(favSong);
      localStorage.setItem("favs", JSON.stringify(favs));
      setIsMarked(true);
    }
  };

  return (
    <button onClick={handleFav} className="FavBtn">
      <img
        className="FavBtnIcon"
        src={isMarked ? Favbtnicon : Favbtniconnofill}
        title={isMarked ? "Quitar de favoritos" : "Agregar a favoritos"}
      />
    </button>
  );
}