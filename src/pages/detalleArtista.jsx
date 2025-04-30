import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../styles/DetalleArtista.css"

import { ArtistDetails } from '../components/ArtistDetailsHeader';
import { AlbumCard } from '../components/AlbumCard';

export function DetalleArtista(props){
    const { id } = useParams();
    const [artistInfo, setArtistInfo] = useState(null)
    const [artistAlbums, setArtistAlbums] = useState([])

    function handleArtistInfo() { //para obtener la INFO de UN artista
        axios
          .get(`https://api.spotify.com/v1/artists/${id}`)
          .then((data) => {
            console.log("info artista", data.data) //SACAR ANTES DE DEPLOYAR
            setArtistInfo(data.data)
          })
          .catch((error) => {
            console.log("Error!:", error)
          })
    }

    function handleArtistAlbums() { //para obtener los ÁLBUMES de UN artista
        axios
          .get(`https://api.spotify.com/v1/artists/${id}/albums`)
          .then((data) => {
            console.log("ÁLBUMES", data.data.items) //SACAR ANTES DE DEPLOYAR
            setArtistAlbums(data.data.items)
          })
          .catch((error) => {
            console.log("Error!:", error)
          })
    }

    useEffect(() =>{
        if (!props.token) {
            props.requestToken();
        } else {
            handleArtistInfo();
            handleArtistAlbums();
        }
    }, [props.token]);

    if (!artistInfo) return <div>Cargando información del artista...</div>;
    return(
        <div>
            <ArtistDetails
                artistInfo={artistInfo}
            />  
           <section className='albums-cnt'>
                {artistAlbums.map((album) => (
                    <AlbumCard 
                        key={album.id} album={album} 
                    />
                ))}
            </section>
        </div>
    )

}