import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import projectSettings from '../../constants/projectSettings.js';
import classNames from 'classnames';
import {
  favouritesAlreadyProductIntoCartMessage,
  addToCartMessage,
} from '../../constants/constantMessage';
import { directAddToCart } from '../../services/helpers/product';
import {
  Card,
  CardBody,
  CardTitle,
  Alert,
  Table,
  ButtonGroup,
  Button,
} from 'reactstrap';
import {
  setFav,
  addToCart,
  setWishList,
  toggleCartBar,
  showCartBar,
} from '../../redux/actions';
import { Modal } from '../../components/modal';
import { variablePriceSet } from '../../services/extra/cartHealpers';
import {
  getWishList,
  deleteWishList,
  getProductById,
} from '../../services/api';

const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
import Link from 'next/link';
const MyAccountSidebar = dynamic(
  () => import('../../components/MyAccountSidebar'),
  {
    ssr: false,
  }
);
const Loader = dynamic(() => import('../../components/Loader'), {
  ssr: false,
});
import BasicFunction from '../../services/extra/basicFunction';
import onlyLogin from '../../components/hoc/onlyLogin';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MyFavouritesCard from '../../components/myAccountCards/MyFavouritesCard';
const basicFunction = new BasicFunction();
const { filePath } = projectSettings;
class Favourites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      wishList: '',
      err: false,
      errMsg: '',
      visible: false,
      SpinnerToggle: true,
      showModal: false,
      isLoading: false,
      modalData: {
        title: '',
        msg: '',
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.deleteWishList = this.deleteWishList.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    // this.getWishlist = this.getWishlist.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.reorder = this.reorder.bind(this);
  }
  componentDidMount() {
    const { user, location, history } = this.props;
    // if (!user._id) {
    //   history.push("/" + location.countryCode + "/favourites");
    // }
    if (user._id) {
      this.setState({
        user_id: user._id,
      });
      this.getWishlist();
    }
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user && this.props.user._id) {
      const { user } = this.props;
      if (user._id) {
        this.setState({
          user_id: user._id,
        });
        this.getWishlist();
      }
    }
  }
  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  getWishlist = () => {
    const { user } = this.props;
    if (user._id) {
      const userid = user._id;

      getWishList(userid)
        .then((res) => {
          const resJson = res.data;
          if (resJson.success) {
            const wishList = resJson.wishlist.filter((itm) => {
              if (itm.productid && itm.productmeta._id) return true;
              return false;
            });
            const wishListCombo = resJson.combo.filter((itm) => {
              if (itm.comboid._id) return true;
              return false;
            });

            const wishListBoth = wishList.concat(wishListCombo);

            const items = wishListBoth;

            document.body.scrollTop = document.documentElement.scrollTop = 0;

            const data = items.map((itm) => {
              if (itm.combo) {
                // const productSlug = encodeUrlFn(itm.comboid.title);
                return {
                  productid: itm.comboid._id,
                  productmeta: itm.comboid._id,
                  userid: userid,
                  wishListId: itm._id,
                  combo: true,
                  productDetails: {
                    ...itm,
                    comboid: {
                      ...itm.comboid,
                      //   productSlug: productSlug.toLowerCase()
                    },
                  },
                };
              } else {
                // const productSlug = encodeUrlFn(itm.productid.producttitle);
                return {
                  productid: itm.productid._id,
                  productmeta: itm.productmeta._id,
                  userid: userid,
                  wishListId: itm._id,
                  combo: false,
                  productDetails: {
                    ...itm,
                    productid: {
                      ...itm.productid,
                      //   productSlug: productSlug.toLowerCase()
                    },
                  },
                };
              }
            });

            this.setState(
              {
                wishList: data,
                SpinnerToggle: false,
              },
              () => {
                console.log({
                  props: this.props,
                  setWishList,
                });
                setTimeout(() => {
                  this.props.setFav(
                    0,
                    this.props.cart,
                    this.props.user.userMetaId
                  );
                  this.props.setWishList(data);
                }, 100);
              }
            );
          }
        })
        .catch((err) => {});

      this.setState({
        user_id: user._id,
      });
    }
  };

  addToCart(product, productSlug) {
    console.log();
    let id = product;
    console.log(id);
    directAddToCart(id);
    var flag = false;
    const {
      location,
      cart,
      history,
      toggleCartBar,
      isCartBarOpen,
    } = this.props;
    cart.items.map((key) => {
      if (key._id === id) {
        flag = true;
      }
      return null;
    });
    if (flag) {
      this.setState(
        {
          isLoading: true,
          // showModal: true,
          modalData: {
            title: '',
            msg: favouritesAlreadyProductIntoCartMessage,
          },
        },
        () => {
          if (!isCartBarOpen) {
            toggleCartBar();
          }
          // setTimeout(() => {
          //   this.setState({
          //     showModal: false
          //   });
          // }, 3000);
        }
      );
    } else {
      getProductById(id)
        .then((res) => {
          const resJson = res.data;

          if (resJson.product_details.producttype === 'variable') {
            if (
              resJson.product_details.attributes &&
              resJson.product_details.attributes.length === 1 &&
              resJson.product_details.attributes[0].values.length === 1
            ) {
              const { attributes } = resJson.product_details;
              if (attributes) {
                if (attributes.constructor === Array) {
                  const variablesArr = attributes
                    .filter((el) => el)
                    .map((el) => {
                      const { values, names } = el;
                      if (values) {
                        if (values.constructor === Array) {
                          if (values.length === 1) {
                            return {
                              [names]: {
                                label: values[0],
                                value: values[0],
                              },
                            };
                          }
                          return {
                            [names]: null,
                          };
                        }
                      }
                      return null;
                    })
                    .filter((el) => el);

                  const product = resJson.product_details;
                  var productItem = { ...product };
                  productItem = { ...productItem, ...variablesArr[0] };
                  const qty = 1;
                  productItem.qty = qty;
                  this.setState(
                    {
                      isLoading: true,
                      // showModal: true,
                      modalData: {
                        title: '',
                        msg: addToCartMessage,
                      },
                    },
                    () => {
                      if (!isCartBarOpen) {
                        toggleCartBar();
                      }
                      // setTimeout(() => {
                      //   this.setState({
                      //     showModal: false
                      //   });
                      // }, 3000);
                    }
                  );
                  this.props.addToCart(
                    variablePriceSet(productItem)
                    // this.props.cart,
                    // this.props.user.userMetaId
                  );
                }
              }
            } else {
              history.push(
                '/shop/' +
                  resJson.product_details.productid.producttitle.replace(
                    / /g,
                    '-'
                  )
              );
            }
          } else {
            const product = resJson.product_details;
            let productItem = { ...product };
            const qty = { label: 1, value: 1 };
            productItem.qty = qty;
            this.setState(
              {
                isLoading: true,
                // showModal: true,
                modalData: {
                  title: '',
                  msg: addToCartMessage,
                },
              },
              () => {
                if (!isCartBarOpen) {
                  toggleCartBar();
                }
                // setTimeout(() => {
                //   this.setState({
                //     showModal: false
                //   });
                // }, 3000);
              }
            );
            this.props.addToCart(
              variablePriceSet(productItem),
              this.props.cart,
              this.props.user.userMetaId
            );
          }
        })
        .catch((err) => {});
    }
  }

  deleteWishList = (itm) => {
    console.log(itm);
    this.setState({
      SpinnerToggle: true,
    });

    var wishListArray = [...this.props.wishList];
    const removeIndex = basicFunction.checkProductInWishList(
      wishListArray,
      itm.productid._id
    );
    if (removeIndex || removeIndex === 0) {
      if (this.props.user._id) {
        var id = wishListArray[removeIndex].wishListId;
        deleteWishList({ id })
          .then((res) => {
            let resJson = res.data;
            if (resJson.success) {
              wishListArray.splice(removeIndex, 1);
              this.props.setWishList(wishListArray);
              this.getWishlist();
            }
          })
          .catch();
      }
    }
    this.setState({
      SpinnerToggle: false,
    });
  };
  onDismiss() {
    this.setState({ visible: false });
  }
  reorder(order) {
    // this.setState({
    //   SpinnerToggle: true
    // });
    console.log(order);
    // order.products.map((itm, index) => {
    //   console.log({
    //     itm
    //   });
    getProductById(order.productmeta._id || order.comboId)
      .then((res) => {
        const resJson = res.data;
        console.log(resJson.product_details.producttype);
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
          console.log(product);
          productItem = { ...product };
          productItem.qty = 1;
          console.log({
            productItem,
          });
          this.props.addToCart(variablePriceSet(productItem));
          this.props.showCartBar();
          // this.setState({
          //   SpinnerToggle: false
          // });
        }
      })
      .catch((err) => {});
    return null;
    // });
  }
  render() {
    const { modalData, showModal, wishList, SpinnerToggle } = this.state;
    console.log(this.props);
    const { location, className } = this.props;
    // const {wishList} = this.props;

    return (
      <Layout headerTheme="black" fixed={true}>
        <div
          className={classNames('my-order', {
            [className]: className,
          })}
        >
          {/* <Helmet>
          <title>{projectName} | Favourites</title>
        </Helmet> */}
          {this.state.SpinnerToggle && <Loader />}

          <div className="container-fluid">
            <div className="my-order__heading">
              <h1>My Account</h1>
            </div>
          </div>

          <div className="my-order__wrapper">
            <div className="container-fluid">
              <div className="row">
                <MyAccountSidebar activeLink="FAVOURITES" />

                <div className="col-lg-10">
                  <div
                    style={{
                      paddingBottom: '2rem',

                      widht: '80%',
                    }}
                    className="border-my-order"
                  >
                    <h2
                      className="my-order-header"
                      style={{ display: 'inline-block' }}
                    >
                      Your favourites
                    </h2>
                    {!(wishList && wishList.length > 0) && (
                      <h2
                        className="my-order__msg-title-fav"
                        style={{
                          fontFamily: 'futuraBT-book',
                          color: '#aaa',
                          display: 'inline-block',
                          // padding: '0 20px',
                        }}
                      >
                        You currently have not added any items to your
                        favourites.
                      </h2>
                    )}
                  </div>
                  <Card className="panel-section my-order__panel">
                    <CardBody className="my-order__card-body">
                      <div className="my-order__detail">
                        <div className="my-order__alert"></div>

                        <CardTitle>
                          <Alert
                            color="info"
                            isOpen={this.state.visible}
                            toggle={this.onDismiss}
                          >
                            {this.state.errMsg}
                          </Alert>
                          <div
                            className="table-responsive middletable"
                            rerender={SpinnerToggle ? 1 : 0}
                          >
                            {SpinnerToggle ? (
                              <Loader />
                            ) : (
                              <>
                                {wishList && wishList.length > 0 && (
                                  <div className="my-favourites-card">
                                    {wishList.map((item) => (
                                      <MyFavouritesCard
                                        wishlist={item}
                                        reorder={this.reorder}
                                        delete={this.deleteWishList}
                                        buy={this.addToCart}
                                      />
                                    ))}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </CardTitle>
                      </div>
                      <div
                        className="row continue-shopping-btn"
                        style={{ justifyContent: 'center', width: '80%' }}
                      >
                        <Link href={'/shop'}>
                          <a className="mt-5 btn or-btn  btn-icon c-btn c-btn--dark">
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
          <Modal
            isOpen={showModal}
            heading={modalData.title}
            toggle={this.toggleModal}
          >
            {/* <p className="text-center MCItemCarouselIntro-title">
            {modalData.title}
          </p> */}
            <p className="text-center title-80 p-3">{modalData.msg}</p>
          </Modal>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  cart: state.cart,
  location: state.location,
  wishList: state.wishList,
  isCartBarOpen: state.drawers.isCartOpen,
});
export default connect(mapStateToProps, {
  setFav,
  addToCart,
  setWishList,
  toggleCartBar,
  showCartBar,
})(onlyLogin(Favourites));
