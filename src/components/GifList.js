import React from 'react';

function GifList ({gifs}) {
    return (
        <ul>
            {gifs.map((gif, index) => <li key={gif.index}>
                <img src={gif} alt=""/>
                </li>)}
        </ul>
    )
}

export default GifList;