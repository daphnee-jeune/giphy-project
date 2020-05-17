import React from 'react'

const Gif = ({url}) => {
    return (
            <li className="gif-wrap">
                <img src={url} alt="" />
            </li>
    )
}

export default Gif
