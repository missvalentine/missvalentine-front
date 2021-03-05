import dynamic from "next/dynamic";
import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Alert,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { connect } from "react-redux";
import Link from "next/link";
import classNames from "classnames";
import BasicFunction from "../../services/extra/basicFunction";
import onlyLogin from "../../components/hoc/onlyLogin";
import { Select } from "antd";
import { FullModal } from "../../components/modal";

const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
import {
  getOrders,
  getUserDetails,
  authorizeSubscriptionCancel,
  authorizeSubscriptionProfile,
} from "../../services/api";
import { Button, ButtonGroup } from "reactstrap";
const MyAccountSidebar = dynamic(
  () => import("../../components/MyAccountSidebar"),
  {
    ssr: false,
  }
);
const OrderReview = dynamic(() => import("./orderReview"), {
  ssr: false,
});
const Loader = dynamic(() => import("../../components/Loader"), {
  ssr: false,
});
import { addSlugToProduct } from "../../services/extra";
import { getCards } from "../../redux/actions";
import msgStrings from "../../constants/msgStrings";
import moment from "moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MySubscriptionCard from "../../components/myAccountCards/MySubscriptionCard";
const basicFunction = new BasicFunction();
const { Option } = Select;
class MySubscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subscriptionList: "",
      loginUserId: "",
      SpinnerToggle: true,
      modifyId: null,
      selectedSubs: null,
      subsDurationModified: "6",
      isModalMsg: false,
      openReviewPid: null,
      modal: false,
      orderSingle: "",
    };
    this.toggle = this.toggle.bind(this);
  }
  componentDidMount() {
    const { user, history, location } = this.props;
    // if (!user._id) {
    //   history.push("/" + location.countryCode + "/login");
    // }

    if (user._id) {
      // let userid = user._id;
      if (user.userMetaId) {
        this.props.getCards(user._id);
        getOrders(user.userMetaId)
          .then((res) => {
            const resJson = res.data;
            if (resJson.status) {
              const orderList = resJson.orders.sort(function(a, b) {
                return new Date(b.createdOn) - new Date(a.createdOn);
              });
              const orderList2 = orderList.map((el) =>
                el.products.map((elx) => ({
                  ...addSlugToProduct(elx),
                  orderId: el._id,
                  oldOrder: el,
                }))
              );
              const productList = flatten(orderList2);
              const subscriptionList = productList.filter(
                (el) => el.isSubscribed && !el.subscriptionFailed
              );
              this.setState(
                {
                  subscriptionList,
                  SpinnerToggle: false,
                },
                () => {
                  console.log({
                    subscriptionList,
                    orderList2,
                    productList,
                  });
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
              );
            } else {
              this.setState(
                {
                  SpinnerToggle: false,
                },
                () => {
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
              );
            }
          })
          .catch((err) => {
            console.log({ err });

            this.setState(
              {
                SpinnerToggle: false,
              },
              () => {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
              }
            );
          });
      } else {
        getUserDetails(user._id).then((resRaw) => {
          const res = resRaw.data;
          if (res.user && res.user._id) {
            this.props.getCards(user._id);
            getOrders(user.userMetaId)
              .then((res) => {
                const resJson = res.data;
                if (resJson.status) {
                  const orderList = resJson.orders.sort(function(a, b) {
                    return new Date(b.createdOn) - new Date(a.createdOn);
                  });
                  const orderList2 = orderList.map((el) =>
                    el.products.map((elx) => ({
                      ...addSlugToProduct(elx),
                      orderId: el._id,
                      oldOrder: el,
                    }))
                  );
                  const productList = flatten(orderList2);
                  const subscriptionList = productList.filter(
                    (el) => el.isSubscribed && !el.subscriptionFailed
                  );
                  this.setState(
                    {
                      subscriptionList,
                      SpinnerToggle: false,
                    },
                    () => {
                      document.body.scrollTop = document.documentElement.scrollTop = 0;
                    }
                  );
                } else {
                  this.setState(
                    {
                      SpinnerToggle: false,
                    },
                    () => {
                      document.body.scrollTop = document.documentElement.scrollTop = 0;
                    }
                  );
                }
              })
              .catch((err) => {
                console.log({ err });
                this.setState(
                  {
                    SpinnerToggle: false,
                  },
                  () => {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                  }
                );
              });
          }
        });
      }

      // subscriptionGetApi({ userid })
      //   .then(res => res.json())
      //   .then(resJson => {
      //     if (resJson.status) {
      //       this.setState({
      //         subscriptionList: resJson.subscribed,
      //         SpinnerToggle: false
      //       });
      //     }
      //   })
      //   .catch(err => {});

      document.body.scrollTop = document.documentElement.scrollTop = 0;
      this.setState({
        loginUserId: user._id,
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user && this.props.user._id) {
      const { user } = this.props;
      if (user._id) {
        // let userid = user._id;
        if (user.userMetaId) {
          this.props.getCards(user._id);
          getOrders(user.userMetaId)
            .then((res) => {
              const resJson = res.data;
              if (resJson.status) {
                const orderList = resJson.orders.sort(function(a, b) {
                  return new Date(b.createdOn) - new Date(a.createdOn);
                });
                const orderList2 = orderList.map((el) =>
                  el.products.map((elx) => ({
                    ...addSlugToProduct(elx),
                    orderId: el._id,
                    oldOrder: el,
                  }))
                );
                const productList = flatten(orderList2);
                const subscriptionList = productList.filter(
                  (el) => el.isSubscribed && !el.subscriptionFailed
                );
                this.setState(
                  {
                    subscriptionList,
                    SpinnerToggle: false,
                  },
                  () => {
                    console.log({
                      subscriptionList,
                      orderList2,
                      productList,
                    });
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                  }
                );
              } else {
                this.setState(
                  {
                    SpinnerToggle: false,
                  },
                  () => {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                  }
                );
              }
            })
            .catch((err) => {
              console.log({ err });

              this.setState(
                {
                  SpinnerToggle: false,
                },
                () => {
                  document.body.scrollTop = document.documentElement.scrollTop = 0;
                }
              );
            });
        } else {
          getUserDetails(user._id).then((resRaw) => {
            const res = resRaw.data;
            if (res.user && res.user._id) {
              getOrders(res.user._id)
                .then((res) => {
                  const resJson = res.data;
                  if (resJson.status) {
                    const orderList = resJson.orders.sort(function(a, b) {
                      return new Date(b.createdOn) - new Date(a.createdOn);
                    });
                    const orderList2 = orderList.map((el) =>
                      el.products.map((elx) => ({
                        ...addSlugToProduct(elx),
                        orderId: el._id,
                        oldOrder: el,
                      }))
                    );
                    const productList = flatten(orderList2);
                    const subscriptionList = productList.filter(
                      (el) => el.isSubscribed && !el.subscriptionFailed
                    );
                    this.setState(
                      {
                        subscriptionList,
                        SpinnerToggle: false,
                      },
                      () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                      }
                    );
                  } else {
                    this.setState(
                      {
                        SpinnerToggle: false,
                      },
                      () => {
                        document.body.scrollTop = document.documentElement.scrollTop = 0;
                      }
                    );
                  }
                })
                .catch((err) => {
                  console.log({ err });
                  this.setState(
                    {
                      SpinnerToggle: false,
                    },
                    () => {
                      document.body.scrollTop = document.documentElement.scrollTop = 0;
                    }
                  );
                });
            }
          });
        }

        // subscriptionGetApi({ userid })
        //   .then(res => res.json())
        //   .then(resJson => {
        //     if (resJson.status) {
        //       this.setState({
        //         subscriptionList: resJson.subscribed,
        //         SpinnerToggle: false
        //       });
        //     }
        //   })
        //   .catch(err => {});

        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.setState({
          loginUserId: user._id,
        });
      }
    }
  }
  openReviewCollapse = (openReviewPid) => {
    this.setState((prevState) => ({
      openReviewPid:
        openReviewPid === prevState.openReviewPid ? null : openReviewPid,
    }));
  };
  dismissReviewModal = () => {
    if (this.dismissReviewModal) clearTimeout(this.dismissReviewModal);

    this.openReviewCollapse(null);
  };
  generateSubsData = (el, details) => {
    const { subsDurationModified } = this.state;
    const customAmount = parseFloat(el.subTotal); // + (Math.random() * 100)
    const {
      billto,
      profileid,
      paymentid,
      cardnumber,
      cardcode,
      expiry,
    } = details;
    console.log({
      details,
    });
    const subsData = {
      amount: parseFloat(customAmount.toFixed(2)),
      name: billto.firstName + billto.lastName,
      schedule: {
        interval: {
          length: "1",
          unit: "months",
        },
        startDate: moment().format("YYYY-MM-DD"),
        totalOccurrences: subsDurationModified || "1",
      },
      billto: {
        firstName: billto.firstName,
        lastName: billto.lastName,
      },
    };
    if (profileid && paymentid) {
      return {
        ...subsData,
        profileid,
        paymentid,
      };
    }
    if (cardnumber && cardcode && expiry)
      return {
        ...subsData,
        cardnumber,
        cardcode,
        expiry,
      };
  };
  extendSubscription = (data) => {
    // authorizeSubscriptionCancel
    this.setState(
      {
        SpinnerToggle: true,
      },
      () => {
        const { selectedSubs } = this.state;
        const { cards } = this.props;
        console.log({
          selectedSubs,
          cards,
        });
        if (cards && cards.cards) {
          const defaultCard =
            cards.cards.find((card) => card.isDefault) || cards[0];
          if (defaultCard) {
            const firstName =
              (selectedSubs &&
                selectedSubs.oldOrder &&
                selectedSubs.oldOrder.userDetails &&
                selectedSubs.oldOrder.userDetails.firstname) ||
              "no name";
            const lastName =
              (selectedSubs &&
                selectedSubs.oldOrder &&
                selectedSubs.oldOrder.userDetails &&
                selectedSubs.oldOrder.userDetails.lastname) ||
              "no name";
            const { customerProfileId, customerPaymentProfileId } = defaultCard;
            const subscriptionid = selectedSubs.subscriptionId;
            console.log({
              subscriptionid,
              selectedSubs,
            });
            authorizeSubscriptionCancel({
              subscriptionid,
            })
              .then((res) => {
                // console.clear()
                console.log({
                  res,
                });
                const resJson = res.data;
                if (resJson.status) {
                  const subsData = this.generateSubsData(selectedSubs, {
                    billto: {
                      firstName,
                      lastName,
                    },
                    profileid: customerProfileId,
                    paymentid: customerPaymentProfileId,
                  });
                  authorizeSubscriptionProfile(subsData)
                    .then((reCreateRes) => {
                      console.log({
                        reCreateRes,
                      });
                      const newSubsRes = {
                        ...reCreateRes.data,
                      };
                      const newSubsPayload = {
                        ...subsData,
                      };
                      const oldSubs = {
                        ...selectedSubs,
                      };
                      this.setState({
                        isModalMsg: true,
                        successMessage: "Your Subscription has been updated!",
                        errorMessage: null,
                        SpinnerToggle: false,
                      });
                    })
                    .catch((err) => {
                      console.log({
                        err,
                      });
                      this.setState({
                        isModalMsg: true,
                        successMessage: null,
                        errorMessage: "Subscription Failed",
                        SpinnerToggle: false,
                      });
                    });
                } else {
                  this.setState({
                    isModalMsg: true,
                    successMessage: null,
                    errorMessage: resJson.message,
                    SpinnerToggle: false,
                  });
                }
              })
              .catch((err) => {
                this.setState({
                  isModalMsg: true,
                  successMessage: null,
                  errorMessage: "Subscription Failed",
                  SpinnerToggle: false,
                });
              });
          } else {
            this.setState({
              isModalMsg: true,
              successMessage: null,
              errorMessage: "No payment method added!",
              SpinnerToggle: false,
            });
          }
        } else {
          this.setState({
            isModalMsg: true,
            successMessage: null,
            errorMessage: "No payment method added!",
            SpinnerToggle: false,
          });
        }
      }
    );
  };
  dismissModal = () => {
    this.setState({
      modifyId: null,
      selectedSubs: null,
    });
  };
  openModify = (subs) => {
    this.setState({
      modifyId: subs._id,
      selectedSubs: subs,
      isModalMsg: false,
    });
  };
  toggle(order) {
    this.setState({
      modal: true,
      orderSingle: order,
    });
  }

  render() {
    const { location, className } = this.props;
    const { projectName, productDetailModalTitle } = msgStrings;
    // const subscriptions = this.state.subscriptionList;
    const {
      modifyId,
      subsDurationModified,
      errorMessage,
      successMessage,
      isModalMsg,
      openReviewPid,
    } = this.state;
    const productLink = (subs) => {
      // if (subs.productmeta) {
      //   if (subs.productmeta._id) {
      //     return (
      //       <Link to={"/" + location.countryCode + "/shop/" + subs.productSlug}>
      //         {subs.productid && subs.productid.producttitle}
      //       </Link>
      //     );
      //   }
      // }

      // if (subs.comboid) {
      //   if (subs.comboid._id) {
      //     return (
      //       <Link to={"/" + location.countryCode + "/shop/" + subs.productSlug}>
      //         {subs.comboid && subs.comboid.title}
      //       </Link>
      //     );
      //   }
      // }
      if (subs.title)
        return (
          <Link href={"/shop/" + subs.title.replace(/ /g, "-")}>
            <a className="my-order__t-link">{subs.title}</a>
          </Link>
        );

      return "-";
    };
    return (
      <Layout headerTheme="black" fixed={true}>
        <div
          className={classNames("my-order", {
            [className]: className,
          })}
        >
          {/* <Helmet>
          <title>{projectName} | My Subscriptions</title>
        </Helmet> */}
          {this.state.SpinnerToggle && <Loader />}
          <div className="container-fluid">
            <div className="my-order__heading">
              <h1>my account</h1>
            </div>
          </div>
          <div className="my-order__wrapper">
            <div className="container-fluid">
              <div className="row">
                <MyAccountSidebar activeLink="MY SUBSCRIPTION" />

                <div className="col-lg-10 ">
                  <h2 className="my-order-header">Your subscriptions</h2>
                  <br />
                  <Card className="panel-section my-order__panel">
                    <CardBody style={{ paddingLeft: "0px", paddingTop: "0px" }}>
                      <div
                        className="my-order__detail"
                        style={{ marginBottom: "20px" }}
                      >
                        <CardTitle style={{ paddingTop: "0px" }}>
                          <div
                            className="table-responsive"
                            style={{ overflowX: "hidden", paddingTop: "0px" }}
                          >
                            {this.state.subscriptionList.length > 0 ? (
                              <div className="my-subscription-card">
                                {this.state.subscriptionList.map((item) => (
                                  <MySubscriptionCard
                                    subscriptions={item}
                                    openModify={this.openModify}
                                    viewModal={this.toggle}
                                  />
                                ))}
                              </div>
                            ) : (
                              <div
                                className="row"
                                style={{
                                  justifyContent: "left",
                                  fontFamily: "futuraBT-book",
                                }}
                              >
                                <h1
                                  className="my-order__msg-title"
                                  style={{ color: "#aaa", marginLeft: "15px" }}
                                >
                                  You currently have not added any items to your
                                  subscription list.
                                </h1>
                              </div>
                            )}
                          </div>
                        </CardTitle>
                      </div>
                      <div
                        className="row continue-shopping-btn"
                        style={{ justifyContent: "center", width: "80%" }}
                      >
                        <Link href={"/shop"}>
                          <a className="btn or-btn  btn-icon c-btn c-btn--dark ">
                            Start Shopping
                          </a>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <FullModal toggle={this.dismissModal} isOpen={modifyId}>
            <ModalHeader toggle={this.dismissModal}>
              <div className="modal__logo-wrapper">
                <a className="c-logo  modal-footer__logo" href="/">
                  <img
                    src="/images/logo-new.png"
                    className="modal__logo-img"
                    alt={projectName}
                  />
                </a>
                <div className="modal__heading">
                  <h2 className="modal__heading-text">Modify Subscription</h2>
                </div>
              </div>
            </ModalHeader>
            <div className="row mt-4 mb-4">
              <div className="col-12 pt-5 pb-5 text-center">
                {isModalMsg ? (
                  <div>{errorMessage ? errorMessage : successMessage}</div>
                ) : (
                  <>
                    Extend your subscription for{" "}
                    <Select
                      onChange={(e) =>
                        this.setState({
                          subsDurationModified: e,
                        })
                      }
                      value={subsDurationModified}
                    >
                      <Option value="3">3 Months</Option>
                      <Option value="6">6 Months</Option>
                      <Option value="12">1 Year</Option>
                    </Select>{" "}
                    starting from today{" "}
                    <div className="d-inline-block">
                      <button
                        className="c-btn c-btn--dark"
                        onClick={this.extendSubscription}
                      >
                        Save
                      </button>
                    </div>
                  </>
                )}
              </div>
              {/* <div className="text-center">
                                      
                                    </div> */}
            </div>
          </FullModal>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle2}
            className={this.props.className + " order-view-modal full-modal"}
          >
            <ModalHeader toggle={this.toggle2}>
              {productDetailModalTitle}
            </ModalHeader>
            <ModalBody className="center-modal p-0">
              <div className="modal-inner">
                <Table className="new-res-table">
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.orderSingle &&
                    this.state.orderSingle.products.length > 0
                      ? this.state.orderSingle.products.map((itm, i) => {
                          console.log({
                            itm,
                            orderSingle: this.state.orderSingle,
                          });
                          return (
                            <tr key={i} className="table__repeated-row">
                              <td data-label="Title"> {itm.title}</td>
                              <td data-label="Rate" className="inline-data">
                                {" "}
                                {basicFunction.currancyAddWithNumber(
                                  parseFloat(itm.unitPrice)
                                )}
                              </td>
                              <td data-label="Quantity" className="inline-data">
                                {" "}
                                {itm.qty}
                              </td>
                              <td data-label="Price" className="inline-data">
                                {itm.subscribed ? (
                                  <div>
                                    <strike>
                                      {basicFunction.currancyAddWithNumber(
                                        itm.unitPrice * itm.qty
                                      )}
                                    </strike>
                                    <br />
                                    <span>
                                      {basicFunction.currancyAddWithNumber(
                                        itm.unitPrice * itm.qty -
                                          basicFunction.getParchantage(
                                            itm.subscribedDiscountPersent,
                                            itm.unitPrice * itm.qty
                                          )
                                      )}
                                    </span>
                                  </div>
                                ) : (
                                  basicFunction.currancyAddWithNumber(
                                    itm.subTotal
                                  )
                                )}
                              </td>
                            </tr>
                          );
                        })
                      : ""}

                    <br />
                    <br />
                    <tr className="order-view-bottom">
                      <td className="hide-in-res" colSpan="3">
                        Sub Total
                      </td>
                      <td data-label="Sub Total" className="inline-data">
                        {basicFunction.currancyAddWithNumber(
                          this.state.orderSingle.wholeSubtotal || 0
                        )}
                      </td>
                    </tr>
                    <tr className="order-view-bottom">
                      <td className="hide-in-res" colSpan="3">
                        Shipping Charge
                      </td>
                      <td data-label="Shipping Charge" className="inline-data">
                        {basicFunction.currancyAddWithNumber(
                          this.state.orderSingle.shippingCharge || 0
                        )}
                      </td>
                    </tr>
                    <tr className="order-view-bottom">
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
                    </tr>
                    {this.state.orderSingle.couponDisc ? (
                      <tr className="order-view-bottom">
                        <td className="hide-in-res" colSpan="3">
                          Coupon discount ( {this.state.orderSingle.couponDisc}
                          %)
                        </td>
                        <td
                          data-label="Coupon discount"
                          className="inline-data"
                        >
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
                        {basicFunction.currancyAddWithNumber(
                          this.state.orderSingle.grandTotal
                        )}
                      </td>
                    </tr>
                    {/* <tr>
                      <td className="hide-in-res" colSpan="3">
                        Payment Method
                      </td>
                      <td data-label="Payment Method" className="inline-data">
                        {this.state.orderSingle.paymentMethod}
                      </td>
                    </tr> */}
                  </tbody>
                </Table>

                {this.state.orderSingle.userdetails ? (
                  <div>
                    <h4>
                      <b>User Details</b>
                    </h4>
                    {this.state.orderSingle.userdetails.firstname ? (
                      <h5>
                        <b>Name : </b>
                        {this.state.orderSingle.userdetails.firstname}{" "}
                        {this.state.orderSingle.userdetails.lastname}
                      </h5>
                    ) : (
                      ""
                    )}
                    {this.state.orderSingle.userdetails.email ? (
                      <h5>
                        <b>Email : </b>
                        {this.state.orderSingle.userdetails.email}{" "}
                      </h5>
                    ) : (
                      ""
                    )}
                    {this.state.orderSingle.userdetails.phonenumber ? (
                      <h5>
                        <b>Phone : </b>
                        {this.state.orderSingle.userdetails.phonenumber}{" "}
                      </h5>
                    ) : (
                      ""
                    )}
                    <hr />
                    {this.state.orderSingle.userdetails.shippingaddress ? (
                      <p>
                        <b>Shipping Address: </b>
                        {this.state.orderSingle.userdetails.shippingaddress}
                      </p>
                    ) : (
                      ""
                    )}
                    {this.state.orderSingle.userdetails.billingaddress ? (
                      <p>
                        <b>Billing Address: </b>
                        {this.state.orderSingle.userdetails.billingaddress}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  ""
                )}
                {/* <hr /> */}
              </div>
            </ModalBody>
            {/* <ModalFooter>
              <Button color="secondary" onClick={this.toggle2}>
                Close
              </Button>
            </ModalFooter> */}
          </Modal>
        </div>
      </Layout>
    );
  }
}

function flatten(arr) {
  return arr.reduce(function(flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location,
  cards: state.cards,
});
export default connect(mapStateToProps, {
  getCards,
})(onlyLogin(MySubscription));

// subscription page
// 2nd date static
// prize in table
// action button
