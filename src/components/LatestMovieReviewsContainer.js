import React from 'react';

import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code LatestMovieReviewsContainer Here

    const BASRI_API_KEY = '37Z6GVXdpE2A2XZk5QAZEIHtSAAKmG6A'
    // const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
    + `api-key=${BASRI_API_KEY}`;

class LatestMovieReviews extends React.Component {

    state = {
        latestReviews: []
    }

    componentDidMount(){
        this.initiateFetch()
    }

    initiateFetch = () => {
            fetch(URL)
            .then(response => response.json())
            .then(data => {
                this.setState({
                latestReviews: data.results
                })
            })
    }

    render(){
        return(
            <div className='review'>
                {this.state.latestReviews.map((review,index)=>
                <MovieReviews key={index} review={review}/>)}
            </div>
        )
    }

}

export default LatestMovieReviews;