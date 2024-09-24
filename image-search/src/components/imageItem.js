import React from 'react'
//individual image to be rendered in a list

const ImageItem = (props) => {
    const {image} = props
    return <div>
        <img src={image.urls.small} alt={image.alt_description}/>
    </div>

}

export default ImageItem