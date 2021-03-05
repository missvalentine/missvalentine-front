import React, { Component } from "react";
import RenderStars from "./review-stars/RenderStars";
import BasicFunction from "../services/extra/basicFunction"; //date
class ReviewPageCard extends Component {
  state = {
    review: this.props.reviews,
  };
  render() {
    const { review } = this.state;
    // console.log(review);
    const basicFunction = new BasicFunction();
    // console.log(this.renderFilled);
    return (
      <div className="review-page-card">
        <div className="review-page-card__user">
        {review.usermetaid &&   <h3 className="review-page-card__user-name">{`${review.usermetaid.firstname} ${review.usermetaid.lastname}`}</h3>}
          <div className="review-page-card__user-stars">
            <RenderStars rating={review.overall} />
          </div>
        </div>
        <div className="review-page-card__details">
          <h2 className="review-page-card__details-title">{review.title}</h2>
          <p className="review-page-card__details-review">{review.content}</p>
        </div>
        <div className="review-page-card__date">
          <h2>{basicFunction.dateTimeInMonthName(review.createdOn)}</h2>
        </div>
      </div>
    );
  }
}
export default ReviewPageCard;
