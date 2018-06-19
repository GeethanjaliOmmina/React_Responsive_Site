import React from 'react';
import './Tile.css';
function Tile(props){
    return(
        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 column">
        <div class="image-container">
        <img src={props.imgUrl} alt={props.name}/>
        </div>
        <div class="skill-name">
        {props.name}
        </div>
        <div class="skill-written">
        {props.description}
        </div>
        </div>

    )
}
export default Tile;
