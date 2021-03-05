import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
} from 'reactstrap';
import Link from 'next/link';
import onlyLogin from '../../components/hoc/onlyLogin';
import classNames from 'classnames';
import { connect } from 'react-redux';
import msgStrings from '../../constants/msgStrings';
const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
import { addToCart } from '../../redux/actions/cart';
import { showCartBar } from '../../redux/actions/drawers';
import { variablePriceSet } from '../../services/extra/cartHealpers';
import { getUserDetails, getOrders, getProductById } from '../../services/api';
import Icon from 'react-icons-kit';
import BasicFunction from '../../services/extra/basicFunction';
const MyAccountSidebar = dynamic(
  () => import('../../components/MyAccountSidebar'),
  {
    ssr: false,
  }
);
import { ic_error_outline } from 'react-icons-kit/md';
import { addSlugToProduct } from '../../services/extra';
import projectSettings from '../../constants/projectSettings';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import MyOrderCard from '../../components/myAccountCards/MyOrderCard';
const basicFunction = new BasicFunction();
class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: '',
      loginUserId: '',
      orderSingle: '',
      conformShow: false,
      conformSucess: false,
      conformFail: false,
      ConformClose: false,
      failShow: false,
      deleteOrderId: null,
      SpinnerToggle: true,
      reorderDetails: '',
      openReviewPid: null,
    };
    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.sweetAlert = this.sweetAlert.bind(this);
    this.reorder = this.reorder.bind(this);
  }
  componentDidMount() {
    const { user, history, location } = this.props;
    if (!user._id) {
      if (history) history.push('/' + location.countryCode + '/login');
    }
    if (user._id) {
      this.setState({
        loginUserId: user._id,
      });
    }
    getOrders(this.props.user.userMetaId)
      .then((res) => {
        const resJson = res.data;
        if (resJson.status) {
          const orderList = resJson.orders.sort(function(a, b) {
            return new Date(b.createdOn) - new Date(a.createdOn);
          });
          console.log(orderList);
          this.setState(
            {
              orderList: orderList.map((el) => ({
                ...el,
                products: el.products.map((el) => addSlugToProduct(el)),
              })),
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
      });
  }
  componentDidUpdate(prevProps) {
    // console.log({
    //   props: this.props,
    // });
    if (prevProps.user !== this.props.user && this.props.user._id) {
      console.log({
        userProps: this.props.user,
      });
      getUserDetails(this.props.user._id).then((res) => {
        if (res && res.data && res.data.user) {
          const userMetaId = res.data.user._id;
          this.setState(
            {
              userMetaId,
            },
            () => {
              getOrders(userMetaId)
                .then((res) => {
                  const resJson = res.data;
                  if (resJson.status) {
                    const orderList = resJson.orders.sort(function(a, b) {
                      return new Date(b.createdOn) - new Date(a.createdOn);
                    });
                    this.setState(
                      {
                        orderList: orderList.map((el) => ({
                          ...el,
                          products: el.products.map((el) =>
                            addSlugToProduct(el)
                          ),
                        })),
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
                });
            }
          );
        }
      });
    }
  }
  componentWillUnmount() {
    if (this.dismissTimeout) clearTimeout(this.dismissTimeout);
  }
  toggle(order = '') {
    this.setState({
      modal: true,
      orderSingle: order,
    });
  }
  toggle2(order = '') {
    this.setState({
      modal: false,
    });
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
  sweetAlert(type) {
    switch (type) {
      case 'openFirst':
        this.setState({
          conformShow: true,
        });
        break;
      case 'openSecond':
        if (this.state.deleteOrderId) {
          const id = this.state.deleteOrderId;
          this.setState({
            SpinnerToggle: true,
          });
          orderDelete({ id })
            .then((res) => {
              const resJson = res.data;
              if (resJson.status) {
                this.setState({
                  conformShow: false,
                  conformSucess: true,
                  deleteOrderId: null,
                });
              }
              getOrders(this.props.user.userMetaId)
                .then((res) => {
                  resJson = res.data;
                  if (resJson.status) {
                    const revArr = resJson.orders;
                    revArr.sort(function(a, b) {
                      return new Date(b.createdOn) - new Date(a.createdOn);
                    });
                    // revArr.sort((a,b) => a.orderdate - b.orderdate);
                    this.setState({
                      orderList: revArr.map((el) => ({
                        ...el,
                        products: el.products.map((el) => addSlugToProduct(el)),
                      })),
                      SpinnerToggle: false,
                    });
                  }
                })
                .catch((err) => {});
            })
            .catch((err) => {});
        }
        this.setState({
          conformShow: false,
          conformSucess: true,
        });
        break;
      case 'closeFirst':
        this.setState({
          conformShow: false,
          conformSucess: false,
        });
        break;
      case 'closeSecond':
        this.setState({
          conformSucess: false,
          conformShow: false,
        });
        break;
      case 'openThird':
        this.setState({
          failShow: true,
          conformShow: false,
        });
        break;
      case 'closeThird':
        this.setState({
          failShow: false,
        });
        break;
      default:
        break;
    }
  }

  deleteOrder(orderId) {
    this.setState({
      deleteOrderId: orderId,
    });
    this.sweetAlert('openFirst');
  }
  getEstimateTotal() {}
  getCouponCodeDiscountTotal() {}

  reorder(order) {
    this.setState({
      SpinnerToggle: true,
    });
    order.products.map((itm, index) => {
      console.log({
        itm,
      });
      getProductById(itm.productMeta || itm.comboId)
        .then((res) => {
          const resJson = res.data;
          console.log({
            resJson,
          });
          if (resJson.product_details.producttype === 'variable') {
            const product = resJson.product_details;
            var productItem = { ...product };
            productItem.qty = itm.qty;
            resJson.product_details.attributes.map((key, index) => {
              const attribute = key.names;

              const labelValue = {
                label: itm.attribute[attribute],
                value: itm.attribute[attribute],
              };
              productItem = { ...productItem, [attribute]: labelValue };
              return null;
            });
            console.log({
              productItem,
            });
            this.props.addToCart(variablePriceSet(productItem));
            this.props.showCartBar();
          } else {
            const product = resJson.product_details;
            productItem = { ...product };
            productItem.qty = itm.qty;
            console.log({
              productItem,
            });
            this.props.addToCart(variablePriceSet(productItem));
            this.props.showCartBar();
          }
        })
        .catch((err) => {});
      return null;
    });
  }

  render() {
    const {
      cancelOrder,
      myOrderPageFooterDetails,
      warningText,
      productDetailModalTitle,
      projectName,
    } = msgStrings;
    const { invoiceUrl } = projectSettings;
    var countVal = 0;
    const { location, className } = this.props;
    const { openReviewPid } = this.state;
    this.state.orderList &&
      this.state.orderList.map((order, i) => {
        // console.log({
        //   orderId: order.userId,
        //   loginUserId: this.state.loginUserId,
        // });
        return order.userId === this.state.loginUserId ? (countVal = 1) : '';
      });

    var serNo = 0;
    return (
      <Layout headerTheme="black" fixed={true}>
        <div
          className={classNames('my-order', {
            [className]: className,
          })}
        >
          {/* <Helmet>
          <title>{projectName} | My Account</title>
        </Helmet> */}
          {/* {this.state.SpinnerToggle && <Loader />} */}
          <div className="container-fluid">
            <div className="my-order__heading">
              <h1>My Account</h1>
            </div>
          </div>
          <div className="my-order__wrapper">
            <div className="container-fluid">
              <div className="row">
                <MyAccountSidebar activeLink="MY ACCOUNT" />

                <div className="col-lg-10 ">
                  <h2 className="my-order-header">Recent Purchases</h2>
                  <Card className="panel-section my-order__panel">
                    <CardBody className="my-order__card-body">
                      <div className="my-order__detail">
                        <CardTitle style={{ border: 'none' }}>
                          <div className="panel-section__descp">
                            {this.state.orderList &&
                            this.state.orderList.length > 0 ? (
                              <div className="my-order-card">
                                {this.state.orderList.map((order) => (
                                  <MyOrderCard
                                    order={order}
                                    reorder={this.reorder}
                                    openModal={this.toggle}
                                  />
                                ))}
                              </div>
                            ) : (
                              <h3
                                className="my-order__msg-title"
                                style={{ color: '#aaa', margin: '0px' }}
                              >
                                You currently don't have any purchases.
                              </h3>
                            )}
                          </div>
                        </CardTitle>
                      </div>
                      <CardSubtitle className="my-order__subtitle">
                        <em>From here you can:</em>
                        {myOrderPageFooterDetails &&
                        myOrderPageFooterDetails.length > 0 ? (
                          <ul className="myAccount-recent-parchase-ul my-order__list-wrap ">
                            {myOrderPageFooterDetails.map((det, i) => (
                              <li className="my-order__listing" key={i}>
                                <em>{det.details}</em>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          ''
                        )}
                      </CardSubtitle>

                      <Link href={'/shop'}>
                        <div style={{ margin: 'auto' }}>
                          <a className="c-btn c-btn--dark">Start Shopping</a>
                        </div>
                      </Link>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle2}
              className={this.props.className + ' order-view-modal full-modal'}
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
                                  {' '}
                                  {basicFunction.currancyAddWithNumber(
                                    parseFloat(itm.unitPrice)
                                  )}
                                </td>
                                <td
                                  data-label="Quantity"
                                  className="inline-data"
                                >
                                  {' '}
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
                        : ''}

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
                        <td
                          data-label="Shipping Charge"
                          className="inline-data"
                        >
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
                            Coupon discount ({' '}
                            {this.state.orderSingle.couponDisc}
                            %)
                          </td>
                          <td
                            data-label="Coupon discount"
                            className="inline-data"
                          >
                            -{' '}
                            {basicFunction.currancyAddWithNumber(
                              basicFunction.getParchantage(
                                parseFloat(this.state.orderSingle.couponDisc),
                                this.state.orderSingle.wholeSubtotal
                              ) || 0
                            )}
                          </td>
                        </tr>
                      ) : (
                        ''
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
                          {this.state.orderSingle.userdetails.firstname}{' '}
                          {this.state.orderSingle.userdetails.lastname}
                        </h5>
                      ) : (
                        ''
                      )}
                      {this.state.orderSingle.userdetails.email ? (
                        <h5>
                          <b>Email : </b>
                          {this.state.orderSingle.userdetails.email}{' '}
                        </h5>
                      ) : (
                        ''
                      )}
                      {this.state.orderSingle.userdetails.phonenumber ? (
                        <h5>
                          <b>Phone : </b>
                          {this.state.orderSingle.userdetails.phonenumber}{' '}
                        </h5>
                      ) : (
                        ''
                      )}
                      <hr />
                      {this.state.orderSingle.userdetails.shippingaddress ? (
                        <p>
                          <b>Shipping Address: </b>
                          {this.state.orderSingle.userdetails.shippingaddress}
                        </p>
                      ) : (
                        ''
                      )}
                      {this.state.orderSingle.userdetails.billingaddress ? (
                        <p>
                          <b>Billing Address: </b>
                          {this.state.orderSingle.userdetails.billingaddress}
                        </p>
                      ) : (
                        ''
                      )}
                    </div>
                  ) : (
                    ''
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

          <div>
            <Modal
              isOpen={this.state.conformShow}
              toggle={() => this.sweetAlert('openThird')}
              className={'full-modal'}
            >
              <ModalHeader toggle={() => this.sweetAlert('openThird')}>
                {warningText}
              </ModalHeader>
              <div className="Modal-body center-modal">
                <div className="modal-inner">
                  <div className="modal-content p-3">
                    <Icon
                      icon={ic_error_outline}
                      className="text-center"
                      size="64"
                    />
                    <br />
                    <p className="text-center title-80">{cancelOrder}</p>
                    <div className="row">
                      <div className="col-md-6 ">
                        <button
                          className=" btn btn-info btn6 mx-auto"
                          onClick={() => this.sweetAlert('openSecond')}
                        >
                          Yes, Cancel it!
                        </button>
                      </div>
                      <div className="col-md-6">
                        <button
                          className="btn btn-info btn7 mx-auto"
                          onClick={() => this.sweetAlert('openThird')}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location,
});
export default connect(mapStateToProps, { addToCart, showCartBar })(
  onlyLogin(MyAccount)
);
