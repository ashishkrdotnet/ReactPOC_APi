import React from 'react';

class ImageCard extends React.Component{
    
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
    };

    //componentDidMount(){
        //this.imageRef.current.addEventListner('load', this.setSpan);
    //}

    setSpan = () =>{
        
    }

    render(){

        const {description,urls} = this.props.image;

        return(
            <div>
                <img src={urls.regular} alt={description}/>
            </div>
        );
    };
};

export default ImageCard;