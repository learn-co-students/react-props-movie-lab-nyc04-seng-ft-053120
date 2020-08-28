import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = (arg) => {
    // implement meeeee! See the readme for instructions
    
    return arg ? <img src={imgMapper[arg]} alt="stars"/> : <h4>No Rating Found</h4>
  }

  render() {
    const {title, genres, imdb} = this.props
    return (
      <div className="card-back">
        <h3 className="title"> {title} </h3>
        <span />
        {/* have to invoke in the render if in class just name it */}
        {this.generateRatingElement(imdb)}
        <span />
    <h5 className="genres">Genres: {genres.join(", ")}</h5>
      </div>
    )
  }
}
