export function ShowAlbumInfo(props){
    return(
        <span className="album-info-cnt">
            <img src={props.albumInfo.images[0]?.url} alt="" />
            <h3>{props.albumInfo.name}</h3>
            <p>{props.albumInfo.release_date.slice(0, 4)}</p>
        </span>
    )
}