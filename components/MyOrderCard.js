import React, { Component } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { baseUrl, invoiceUrl } from "../constants/projectSettings";
import BasicFunction from "../services/extra/basicFunction"; //date
import { getProductImage } from "../services/helpers/product"; // images
import Link from "next/link";
// ! image src, name, price, invoice link, reorder, view, write a review
export default class MyOrderCard extends Component {
  state = {
    order: this.props.order,
    isModal:false
  };

  render() {
   // console.log(this.props.reorder);
    const { order,isModal } = this.state;
    const basicFunction = new BasicFunction();
    const unReviewed =
      order.products && order.products.filter((el) => !el.reviewed).length;
    return (
      <div className="product-card">
        {order.products &&
          order.products.length > 0 &&
          order.products.map((product) => {
            return (
              <>
                <LazyLoadImage
                  src={`${baseUrl}/${getProductImage(product)}`}
                  alt=""
                  className="product-card__image-column"
                />
                <div className="product-card__content-column">
                  <div className="product-card__content-column--top-row">
                    <h4 className="product-name">{product.title}</h4>
                    <h4 className="product-price">{product.subTotal}</h4>
                    <div className="action-button-group">
                      <button onClick={()=>this.setState({isModal:true})}>view</button>
                      <button onClick={() => this.props.reorder(order)}>reorder</button>
                      <button
                        onClick={() => {
                          window.open(`${invoiceUrl}${product._id}.pdf`);
                        }}
                      > 
                        invoice
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        <hr className="breaker" />
        <div className="bottom-row">
          <h4 className="order-date">
            {basicFunction.dateTimeInMonthName(order.products[0].createdOn)}
          </h4>
          {unReviewed && (
            <Link href={`/submit-reviews/${order._id}`}>
              <span className="cursor-pointer write-a-review">
                Write a product review!
              </span>
            </Link>
          )}
        </div>
        <Modal
          maskClosable={true}
          footer={null}
          onOk={() => {
            this.setState({isModal:false})
          }}
          onCancel={() => {
            this.setState({isModal:false})
          }}
          visible={isModal}
        >
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((el, key) => {
                return (
                  <tr key={i} className="table__repeated-row">
                    <td data-label="Title"> {itm.title}</td>
                    <td data-label="Rate" className="inline-data">
                      {"$ " + itm.unitPrice}
                    </td>
                    <td data-label="Quantity" className="inline-data">
                      {itm.qty}
                    </td>
                    <td data-label="Price" className="inline-data">
                      {itm.subscribed ? (
                        <div>
                          <strike>{"$ " + itm.unitPrice * itm.qty}</strike>
                          <br />
                          {/* <span>
                                      {basicFunction.currancyAddWithNumber(
                                        itm.unitPrice * itm.qty -
                                          basicFunction.getParchantage(
                                            itm.subscribedDiscountPersent,
                                            itm.unitPrice * itm.qty
                                          )
                                      )}
                                    </span> */}
                        </div>
                      ) : (
                        "$ " + itm.subTotal
                      )}
                    </td>
                  </tr>
                );
              })}

              <tr className="order-view-bottom">
                <td className="hide-in-res" colSpan="3">
                  Sub Total
                </td>
                <td data-label="Sub Total" className="inline-data">
                  $ {order.wholeSubtotal}
                </td>
              </tr>
              <tr className="order-view-bottom">
                <td className="hide-in-res" colSpan="3">
                  Shipping Charge
                </td>
                <td data-label="Shipping Charge" className="inline-data">
                  $ {order.shippingCharge}
                </td>
              </tr>
              {/* <tr className="order-view-bottom">
                            <td className="hide-in-res" colSpan="3">
                                Estimated Tax
                            </td>
                            <td data-label="Estimated Tax" className="inline-data">
                                {basicFunction.currancyAddWithNumber(
                                    basicFunction.getParchantage(
                                        parseFloat(this.state.orderSingle.countryTax),
                                        this.state.orderSingle.wholeSubtotal +
                                        this.state.orderSingle.shippingcharge
                                    ) ||
                                    (this.state.orderSingle.taxAmount &&
                                        this.state.orderSingle.taxAmount.toFixed(2)) ||
                                    0
                                )}
                            </td>
                        </tr> */}
              {this.state.orderSingle.couponDisc ? (
                <tr className="order-view-bottom">
                  <td className="hide-in-res" colSpan="3">
                    Coupon discount ( {this.state.orderSingle.couponDisc}
                    %)
                  </td>
                  <td data-label="Coupon discount" className="inline-data">
                    -{" "}
                    {basicFunction.currancyAddWithNumber(
                      basicFunction.getParchantage(
                        parseFloat(this.state.orderSingle.couponDisc),
                        this.state.orderSingle.wholeSubtotal
                      ) || 0
                    )}
                  </td>
                </tr>
              ) : (
                ""
              )}

              <tr className="order-view-bottom">
                <td className="hide-in-res" colSpan="3">
                  Grand Total
                </td>
                <td data-label="Grand Total" className="inline-data">
                  $ {order.grandTotal}
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      
      </div>
    );
  }
}
