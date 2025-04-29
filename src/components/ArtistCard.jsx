
export function ArtistInfo(props){
    return (
        <div className="artist-card">
            <img 
                src={props.artist.images[0]?.url} 
                alt={props.artist.name} 
                className="artist-img"
            />
            <h3>{props.artist.name}</h3>
        </div>
    )
}