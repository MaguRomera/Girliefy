import { Navigate, useNavigate } from 'react-router-dom';
import Back from "../media/back.svg"

export function BackButton(props){

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/artist/${props.name}/${props.id}`)
    }
    return(
        <img 
            src={Back} 
            title="Return to artist"
            onClick={handleNavigation}
            className="back-btn"
            alt="back button"
        />
    )
}