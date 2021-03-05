import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { baseUrl, invoiceUrl } from "../../constants/projectSettings";

import { getProductImage,getProductTitle } from "../../services/helpers/product"; // images

import Link from "next/link";
// ! image src, name, price, invoice link, reorder, view, write a review
export default class MyFavouritesCard extends Component {
  state = {
    wishlist: this.props.wishlist.productDetails,
  };
 
  render() {
    const { wishlist } = this.state;
    return (
      <div className="product-card">
        {/* First product */}
        <LazyLoadImage
          src={`${baseUrl}/${getProductImage(wishlist)}`}
          alt=""
          className="product-card__image-column"
        />
        <div className="product-card__content-column">
          <div className="product-card__content-column--top-row">
            <h4 className="product-name">{getProductTitle(wishlist)}</h4>
            <h4 className="product-price"></h4> 

            <div className="action-button-group">
            <Link href={{
            pathname: '/shop/[pid]',
            query: { pid:getProductTitle(wishlist).replace(/ /g, "-")  },
          }} ><a style={{color:"black"}}>View</a></Link>  
              <button onClick={()=>this.props.delete(wishlist)}>Delete</button>
              <button onClick={()=>this.props.reorder(wishlist)}>Buy</button>
            </div>
          </div>
        </div>
        <hr />
        {/* date and review row */}
        <div className="bottom-row">
          <h4 className="order-date"></h4>
          {/* {unReviewed && (
            <Link href={`/submit-reviews/${order._id}`}>
              <span className="cursor-pointer write-a-review">
                Write a product review!
              </span>
            </Link>
          )} */}
        </div>
      </div>
    );
  }
}
