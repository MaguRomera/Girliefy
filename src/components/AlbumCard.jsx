export function AlbumCard(props){
    return(
        <span className="album-card">
            <img src={props.album.images[0]?.url} alt={props.album.name} />
            <h3>{props.album.name}</h3>
            <section className="album-extra-info">
                <p>{props.album.release_date.slice(0, 4)}</p>
                <p>{props.album.album_type}</p>
            </section>
        </span>
    )

}