import React, { Component } from "react";
import BlankStar from "./BlankStar";

export default class RenderStars extends Component {
  reviewStars = () => {
    var rating = this.props.rating;
    let blankStars = 5 - rating;
    let arrayOfStars = [];
    // ! render filled stars
    for (let i = 0; i < rating; i++) {
      arrayOfStars.push(this.renderFilled());
    }
    // ! render blank stars
    for (let i = 0; i < blankStars; i++) {
      arrayOfStars.push(this.renderBlank());
    }
    return arrayOfStars;
  };
  renderFilled = () => {
    return <BlankStar />;
  };
  renderBlank = () => {
    return <BlankStar fill="white" />;
  };
  render() {
    return <>{this.reviewStars()}</>;
  }
}
