import { Navigate, useNavigate } from 'react-router-dom';


export function ArtistInfo(props){    

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/artist/${props.artist.name}/${props.artist.id}`)
    }
    
    return (
        <div className="artist-card" onClick={handleNavigation}>
            <img 
                src={props.artist.images[0]?.url} 
                alt={props.artist.name} 
                className="artist-img"
            />
            <h3>{props.artist.name}</h3>
        </div>
    )
}