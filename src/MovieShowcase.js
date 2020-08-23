import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return an array of the correct JSX

    // MovieCard components (which showcase a single movie) receive their individual movie information from MovieShowcase as four props: title, IMDBRating, genres, and poster. Following, the props are passed again to either CardFront or CardBack.

    return movieData.map((movieObj, idx) => < MovieCard key={idx} title={movieObj.title} IMDBRating={movieObj.IMDBRating} genres={movieObj.genres} poster={movieObj.poster} />)

  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
