import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../styles/DetalleArtista.css"

export function DetalleArtista(){
    const { id } = useParams();
    const token = localStorage.getItem("spotify_token");
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;

    const obtainData = (id) => {
        axios
            .get(`https://api.spotify.com/v1/artists/${id}`)
            .then((data) => {
                console.log(data.data)
            })
            .catch((error) => {
                console.log("Error!:", error)
            })
    }
    useEffect(() =>{
        obtainData(id)
      }, []);

    return(
        <div>
            <span className='artistnameimg-cnt'>    

            </span>
        </div>
    )

}