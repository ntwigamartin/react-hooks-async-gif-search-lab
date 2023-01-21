import React, {useEffect, useState} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";


function GifListContainer(){
    const [gif_url, setGifUrl] = useState("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=TAUS9XQlSp69HgwT8UssLvsUXT6GPjZ2&rating=g")

    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        fetch(gif_url)
        .then(response => response.json())
        .then(obj => setGifs([
            obj.data[0].images.original.url,
            obj.data[1].images.original.url,
            obj.data[2].images.original.url
        ]))
           
    },[gif_url])
    
    function handleSubmit(e){
        e.preventDefault();
        setGifUrl(`https://api.giphy.com/v1/gifs/search?q=${e.target.value}&api_key=TAUS9XQlSp69HgwT8UssLvsUXT6GPjZ2&rating=g`)
    }
    return(
        <div className="container-fluid" style={{display: "flex", justifyContent: "space-between"}}>
            <GifList gifs={gifs} />
            <GifSearch handleSubmit={handleSubmit} />
        </div>
        
    )
}

export default GifListContainer;