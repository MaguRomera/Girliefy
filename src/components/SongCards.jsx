import { PlaySongButton } from "./PlaySongButton"

export function SongCards(props){
    
    return(
        <span className="song-cnt">
            <PlaySongButton
                linktosong = {props.song.uri}
            />
            <span className="song-info">
                <h3>{props.song.name}</h3>
                <p>{props.song.artists[0].name}</p>
            </span>
            
        </span>
    )
}

//acá iría el botón de favoritos del artista, abajo de song-info