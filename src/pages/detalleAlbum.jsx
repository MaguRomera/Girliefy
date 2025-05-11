import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import "../styles/DetalleAlbum.css"
import { ShowAlbumInfo } from '../components/AlbumDetails';
import { SongCards } from '../components/SongCards';
import { BackButton } from '../components/BackButton_ToArtist';
import { GoToFavSongs } from '../components/GoToFavSongs';

export function AlbumDetails(props){
    const { id_alb } = useParams();
    const { id } = useParams();
    const { name } = useParams();
    const [albumInfo, setAlbumInfo] = useState(null)
    const [albumSongs, setAlbumSongs] = useState([])

    function handleAlbumInfo() { //para obtener la INFO de UN artista
        axios
          .get(`https://api.spotify.com/v1/albums/${id_alb}`)
          .then((data) => {
            console.log("info album", data.data) //SACAR ANTES DE DEPLOYAR
            setAlbumInfo(data.data)
          })
          .catch((error) => {
            console.log("Error!:", error)
        })
    }
    function handleAlbumSongs() { //para obtener la INFO de UN artista
        axios
          .get(`https://api.spotify.com/v1/albums/${id_alb}/tracks`)
          .then((data) => {
            console.log("canciones del album", data.data.items) //SACAR ANTES DE DEPLOYAR
            setAlbumSongs(data.data.items)
          })
          .catch((error) => {
            console.log("Error!:", error)
        })
    }

    useEffect(() =>{
        if (!props.token) {
            props.requestToken();
        } else{
            handleAlbumInfo();
            handleAlbumSongs();
        }
    }, [props.token]);

    if (!albumInfo) return <div className='loading-sign'><h3>Loading album...</h3></div>;
    return(
        <div className='principal-cnt'>
            <header>
                <BackButton
                id={id}
                name={name}
                />
                <GoToFavSongs />
            </header>
            <div className='secondary-cnt'>
                <ShowAlbumInfo
                    albumInfo = {albumInfo}
                />

                <div className='songs-prinp-cnt'>
                    {albumSongs.map((song) => (
                        <SongCards 
                            key={song.id} 
                            song={song} 
                            albumname={albumInfo.name} 
                            albumid={albumInfo.id}
                        />
                    ))}
                </div>
            </div>
            
        </div>
    )

}