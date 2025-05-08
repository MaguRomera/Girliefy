import fav from "../media/heart.svg"
import { Navigate, useNavigate } from "react-router-dom"

export function GoToFavSongs(){
    let navigate = useNavigate();
    const handleNavigation = () => {
        navigate(`/favsongs`)
    }

    return(
        <img 
            src={fav} 
            title="Go to fav songs"  
            className="FavSongsRedirect"
            onClick={handleNavigation}
        />

    )
}