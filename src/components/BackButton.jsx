import { Navigate, useNavigate } from 'react-router-dom';
import Back from "../media/back.svg"

export function BackButton(){

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(-1)
    }
    return(
        <img 
            src={Back} 
            title="Go back"
            onClick={handleNavigation}
            className="back-btn"
            alt="back button"
        />
    )
}