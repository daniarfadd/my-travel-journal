function Card(props) {
  
    
    return (
        
        <div className='card--container'>
            <img src={props.item.imageUrl} className='place--img' alt="place image"/>
            <div className='card--info'>
                <div className='place--location'>
                    <img src='../assets/placeholder.png' className='nav-logo' alt="placeholder logo"/>
                    <h2>{props.item.location}</h2>
                    <a href={props.item.googleMapsUrl}>View On Google Maps</a>
                </div>
            <h1>{props.item.title}</h1>
            <h3>{props.item.date}</h3>
            <p>{props.item.description}</p>
            </div>
        </div>
    );
}

export default Card;