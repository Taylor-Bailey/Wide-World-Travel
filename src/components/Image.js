import React from 'react';
import './Image.css';

function Image(props){
    return (
        <div className="Image-div">
        <img src={props.bg} className="Background-image" alt="this is a background image of a fantastic and far away place" />
        </div>
    )
        
}

export default Image;