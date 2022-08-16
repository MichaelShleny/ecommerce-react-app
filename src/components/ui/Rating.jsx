import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Rating = ({rating}) => {
    
    return (
        <div className = "book__ratings">
            {
                //book.rating to make sure its not a hard coded value, and math.floor
                //so server doesnt crash when it sees a decimal
                new Array(Math.floor(rating)).fill(0).map((_,index) => (
                    <FontAwesomeIcon icon = "star" key={index}/>))
            }
            {
                //do not need key = {index} like above because we are not mapping anything
                Number.isInteger(rating) ? '' : 
                    <FontAwesomeIcon icon = "star-half-alt"/>
            }
        </div>
    );
}

export default Rating;
