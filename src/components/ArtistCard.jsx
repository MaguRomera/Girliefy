
export function ArtistInfo(props){
    return (
        <div className="artist-card">
            <h3>{props.artist.name}</h3>
            <img 
                src={props.artist.images[0]?.url} 
                alt={props.artist.name} 
                className="artist-img"
            />
        </div>
    )
}