export function ArtistDetails(props){
    function handleSongs() {
        axios
          .get(`https://api.spotify.com/v1/artists/${id}/songs`)
          .then((data) => {
            console.log(data.data) //SACAR ANTES DE DEPLOYAR
            setArtistInfo(data.data)
          })
          .catch((error) => {
            console.log("Error!:", error)
          })
    }
    return(
        <section className='artistinfo-cnt'> 
            <img src={props.artistInfo.images[0]?.url} alt="Artist image" className='artistinfo-img'/> 
            <div className='text-cnt'>
                <h3>{props.artistInfo.name}</h3>
                <p>{props.artistInfo.followers.total} followers</p> 
            </div>
        </section>
    )   
}