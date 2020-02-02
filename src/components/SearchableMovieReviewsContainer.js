import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const BASRI_API_KEY = '37Z6GVXdpE2A2XZk5QAZEIHtSAAKmG6A'
// const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${BASRI_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {

    state = {
        searchTerm: 'madonna',
        searchResults: []
    }

    updateSearchTerm = (searchTerm) => {this.setState({ searchTerm })}

    initiateSearch = (event) => {
        event.preventDefault()
        let constructedURL = `${URL}&query=${this.state.searchTerm}`
        fetch(constructedURL)
        .then(response => response.json())
        .then(data => {this.setState({searchResults:data.results})})
    }

    render(){
        const {searchResults} = this.state
        return(
            <React.Fragment>
                <form onSubmit={(event)=>this.initiateSearch(event)}>
                    <input onChange={(e)=>this.updateSearchTerm(e.target.value)} type='text' placeholder='search term...'></input>
                    <button>Search!</button>
                </form>
                <div className='searchable-movie-reviews'>{searchResults.map((item,index)=><MovieReviews key={index} review={item}/>)}
                </div>
            </React.Fragment>
        )
    }
}

export default SearchableMovieReviewsContainer;
