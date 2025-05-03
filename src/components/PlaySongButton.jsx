import play from "../media/play-circle.svg"
export function PlaySongButton(props){
    const handlePlay = () => {
        window.open(props.linktosong, "_blank")
    }

    return(
        <img 
            onClick={handlePlay}
            src={play} 
            title="Listen on Spotify"
            className="PlayButton"
        />
    )
}