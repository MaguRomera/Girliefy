import { useNavigate } from "react-router-dom";

export function FavSongCard({ song }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/artist/${song.artista}/${song.artistid}/album/${song.album}/${song.albumid}`);
  };

  return (
    <div className="fav-card" onClick={handleClick} title="Ver álbum">
      <h3>{song.name}</h3>
      <span className="extra-info-favsong">
        <p>{song.artista}</p>
        <p>|</p>
        <p>{song.album}</p>
      </span>
    </div>
  );
}