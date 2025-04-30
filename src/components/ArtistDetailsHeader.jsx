export function ArtistDetails(props){
        
    return(
        <section className='artistinfo-cnt'> 
            <img src={props.artistInfo.images[0]?.url} alt="Artist image" className='artistinfo-img'/> 
            <div className='text-cnt'>
                <h3>{props.artistInfo.name.toUpperCase()}</h3>
                <p>{props.artistInfo.followers.total.toLocaleString()} followers</p> 
            </div>
        </section>
    )   
}