import React from 'react'
import Gif from './Gif'
import NotFound from './NotFound'

const Gifs = ({data}) => {
    let results = data

    let gifs 
    results.length > 0 ? gifs = results.map(gif => {
            return <Gif 
                        key={gif.id}
                        url={gif.images.fixed_height.url}
                        />
    }) : gifs = <NotFound />

    return (
        <ul className="gif-list">
          {gifs}  
        </ul>
    )
}

export default Gifs
