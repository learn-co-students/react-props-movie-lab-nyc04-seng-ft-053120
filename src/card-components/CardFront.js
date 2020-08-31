import React, { Component } from 'react';

export default class CardFront extends Component {
// let split = (this.prop.poster) =>{


  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}
