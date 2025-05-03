import { Navigate, useNavigate } from 'react-router-dom';

export function AlbumCard(props){

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/artist/${props.name_art}/${props.id_art}/album/${props.album.name}/${props.album.id}`)
        
    }

    return(
        <span className="album-card" onClick={handleNavigation}>
            <img src={props.album.images[0]?.url} alt={props.album.name} className="album-img"/>
            <h3>{props.album.name}</h3>
            <section className="album-extra-info">
                <p>{props.album.release_date.slice(0, 4)}</p>
                <p>|</p>
                <p>{props.album.album_type}</p>
            </section>
        </span>
    )

}