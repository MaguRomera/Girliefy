import { Navigate, useNavigate } from 'react-router-dom';
import Back from "../media/back.svg"

export function BackButton(){

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/`)
    }
    return(
        <img 
            src={Back} 
            title="Go home"
            onClick={handleNavigation}
            className="back-btn"
            alt="back button"
        />
    )
}