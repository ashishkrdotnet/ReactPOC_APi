import React from 'react';
import '../css/ImageList.css'
import ImageCard from './ImageCard';

class ImageList extends React.Component{   
    
    render(){
        const image = this.props.images.map((image) => {
            return <ImageCard key={image.id} image={image}/>
        })
        return <div className="image-list">{image}</div>;
    }
}

export default ImageList;