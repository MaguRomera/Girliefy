import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../styles/DetalleArtista.css"

import { ArtistDetails } from '../components/ArtistDetailsHeader';

export function DetalleArtista(props){
    const { id } = useParams();
    const [artistInfo, setArtistInfo] = useState(null)
    //PREGUNTAR POR QUÉ CUANDO REFRESCO LA PÁGINA, ME DICE 401 - UNAUTHORIZED
    function handleArtistInfo() {
        axios
          .get(`https://api.spotify.com/v1/artists/${id}`)
          .then((data) => {
            console.log(data.data) //SACAR ANTES DE DEPLOYAR
            setArtistInfo(data.data)
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
          }
    }, [props.token]);

    if (!artistInfo) return <div>Cargando información del artista...</div>;
    return(
        <div>
            <ArtistDetails
                artistInfo={artistInfo}
            />
                
           <section className='albums-cnt'>
            </section>
        </div>
    )

}