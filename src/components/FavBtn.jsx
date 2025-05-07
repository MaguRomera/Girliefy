import Favbtnicon from "../media/heart.svg"
import Favbtniconnofill from "../media/no-fill-heart.svg"
import { useState } from "react"

export function MarkAsFav(){

    const [isMarked, setIsMarked] = useState(false)
    const handleFav = () => {
        let marked = (!isMarked)
        setIsMarked(marked)
    }

    return(
        <button onClick={handleFav} className="FavBtn">
            <img className="FavBtnIcon"
                src={isMarked ? Favbtnicon:Favbtniconnofill} 
                title={isMarked ? "Mark as favourite":"Quit favourite"}
                />
        </button>
    )
}