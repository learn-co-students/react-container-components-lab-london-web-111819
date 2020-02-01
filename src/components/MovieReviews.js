// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
    return <ul className="review-list">
        {props.reviews.map( review => <li className="review" className="review">{review.headline}</li> )}
    </ul>
}

export default MovieReviews
