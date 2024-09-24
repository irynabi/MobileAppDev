import React from 'react'
import ImageItem from './imageItem'

const ImageList = (props) => {
    const {images} = props
    return <div>
        {images.map((img) => {
            return <ImageItem key={img.id} image={img} />
        })}
    </div>

}

export default ImageList