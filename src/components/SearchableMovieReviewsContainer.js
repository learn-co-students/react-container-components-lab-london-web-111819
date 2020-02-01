import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = { 
        reviews: [],
        searchTerm: 'dog'
    }

    handleSubmit = e => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`).then(resp => resp.json())
        .then(data => 
            this.setState({
                reviews: data.results
            })
        )
    }

    captureInput = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="which movie?" onChange={this.captureInput}></input>
                </form>
                < MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer