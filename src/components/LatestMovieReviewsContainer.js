import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends React.Component {
  state = {
    reviews: []
  }

  componentWillMount() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({ reviews: data.results }))
  }

  renderReviews = () => {
    return <MovieReviews reviews={this.state.reviews} />
  }

  render() {
    return(
      <div className="latest-movie-reviews">
        {this.renderReviews()}
      </div>
    )
  }
}
