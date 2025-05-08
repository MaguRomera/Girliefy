import { PlaySongButton } from "./PlaySongButton"
import { MarkAsFav } from "./FavBtn"

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
            <MarkAsFav
                songname={props.song.name} 
                artistname={props.song.artists[0].name} 
                artistid={props.song.artists[0].id} 
                albumname={props.albumname}
                albumid={props.albumid}
            />
        </span>
    )
}

//acá iría el botón de favoritos del artista, abajo de song-info