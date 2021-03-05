import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { baseUrl, invoiceUrl } from "../../constants/projectSettings";
import BasicFunction from "../../services/extra/basicFunction"; //date
import { getProductImage } from "../../services/helpers/product"; // images
import Link from "next/link";
// ! image src, name, price, invoice link, reorder, view, write a review
export default class MySubscriptionCard extends Component {
  state = {
    subscription: this.props.subscriptions,
  };

  render() {
    const { subscription } = this.state;
    const basicFunction = new BasicFunction();
    const unReviewed = subscription && !subscription.reviewed;
    // subscriptions.map((item) => console.log(item));
    console.log(subscription);
    return (
      <div className="product-card">
        <LazyLoadImage
          src={`${baseUrl}/${getProductImage(subscription)}`}
          alt=""
          className="product-card__image-column"
        />
        <div className="product-card__content-column">
          <div className="product-card__content-column--top-row">
            <h4 className="product-name">{subscription.title}</h4>
            <h4 className="product-price">{subscription.subTotal}</h4>
            <div className="action-button-group">
              <button
              // onClick={()=>this.props.viewModal(subscription)}
              >
                View
              </button>
              <button onClick={() => this.props.openModify(subscription)}>
                Modify
              </button>
              <button>
                <img
                  src="/images/invoice-icon.png"
                  alt="invoice"
                  style={{ transform: "scale(0.8)" }}
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="breaker" />

        <div className="bottom-row">
          <h4 className="order-date">
            {basicFunction.dateTimeInMonthName(subscription.createdOn)}
          </h4>
          {unReviewed && (
            <Link href={`/submit-reviews/${subscription.orderId}`}>
              <span className="cursor-pointer write-a-review">
                Write a product review!
              </span>
            </Link>
          )}
        </div>
      </div>
    );
  }
}
