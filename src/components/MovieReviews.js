// Code MovieReviews Here
import React from 'react';

// const MovieReviews = (props) => {
    // <div className='review-list'>
    //             Headline: {props.review.headline}
    //             Timestamp: {props.review.date_updated ? props.review.date_updated : props.review.opening_date}
    //             Summary: {props.review.summary_short}
    // </div>
// }

class MovieReviews extends React.Component {

    render(){
        const {headline,date_updated,opening_date,summary_short} = this.props.review
        return(
            <div className='review-list'  style={{ border: 'solid 1px black', margin: 10, padding: 10 }}>
                Headline: {headline}
                Timestamp: {date_updated ? date_updated : opening_date}
                Summary: {summary_short}
            </div>
        )
    }
}

export default MovieReviews;
