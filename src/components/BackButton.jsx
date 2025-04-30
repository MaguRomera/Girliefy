import { Navigate, useNavigate } from 'react-router-dom';

export function BackButton(){

    let navigate = useNavigate();
    const handleNavigation = () =>{
        navigate(`/`)
    }
    return(
        <img 
            src="https://unpkg.com/@mynaui/icons/icons-solid/arrow-left-circle.svg" 
            title="Go back"
            onClick={handleNavigation}
            className="back-btn"
            alt="back button"
        />
    )
}