import React from 'react';

function GifSearch({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" />
            <button type="submit">Search</button>
        </form>
    )
}

export default GifSearch;