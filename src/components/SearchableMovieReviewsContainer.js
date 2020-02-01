import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            reviews: [],
            searchTerm: null
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const url = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=${this.state.searchTerm}`
        return fetch(url)
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }

    changeSearchTerm = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleFormSubmit}>
                    <input onChange={this.changeSearchTerm} placeholder="search review..." type="text" name="review"></input>
                    <input type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}