import React, { Component } from 'react';
import MovieCard from './card-components/MovieCard.js'
import movieData from './data.js'

export default class MovieShowcase extends Component {

  generateMovieCards = () => {
    // map over your movieData array and return the correct
    // let data = movieData
    console.log(movieData[0].genres)
    // debugger
      return movieData.map(data => <MovieCard title={data.title} IMDBRating={data.IMDBRating} genres={data.genres} poster={data.poster}/>)
      // return movieData.map(data => {
      //   console.log(data.genres);
      //   return <MovieCard {...data}/>
      // })
  }

  render() {
    return (
      <div id="movie-showcase">
        {this.generateMovieCards()}
      </div>
    )
  }
}
