import dynamic from 'next/dynamic';
const Checkbox = dynamic(() => import('./form-components/Checkbox'));
const Heading = dynamic(() => import('./Heading'));
import { Icon, Select, Rate } from 'antd';
import Router from 'next/router';
const Button = dynamic(() => import('./form-components/Button'));
const Quantity = dynamic(() => import('./form-components/Quantity'));
import { getBasicPrice, directAddToCart } from '../services/helpers/product';
import { numberFormat } from '../services/helpers/misc';
import { addToCart } from '../redux/actions/cart';
import { showCartBar } from '../redux/actions/drawers';
import { connect } from 'react-redux';
import { getProductImageArray } from '../services/helpers/product';
import projectSettings from '../constants/projectSettings';
import BasicFunction from '../services/extra/basicFunction';
import { addToWishList, deleteWishList, getWishList } from '../services/api';
import { setWishList } from '../redux/actions';
const ImageZoom = dynamic(() => import('./ImageZoom'), {
  ssr: false,
});
import { Collapse } from 'reactstrap';
const Drawer = dynamic(() => import('./Drawer'));
const Login = dynamic(() => import('./popups/Login'));
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { toggleRegBar } from '../redux/actions/drawers';
import Heart from '../assets/images/wishlist-heart';

const basicFunction = new BasicFunction();
class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
      isSubscribed: false,
      subsDuration: '3',
      isAllIngredient: false,
      isFavourite: false,
    };
  }

  componentDidMount() {
    this.getWishListAtStart();
  }

  async getWishListAtStart() {
    const response = await getWishList(this.props.user._id);
    const wishlist = response.data.wishlist;
    let wishlist1 = [];
    wishlist.map((wishListRes) => {
      if (wishListRes.combo) {
        let wishlist = {
          combo: wishListRes.combo,
          productid: wishListRes.comboid,
          productmeta: wishListRes.comboid,
          userid: this.props.user._id,
          wishListId: wishListRes._id,
        };
        wishlist1.push(wishlist);
      } else {
        let wishlist = {
          combo: wishListRes.combo,
          productid: wishListRes.productid._id,
          productmeta: wishListRes.productmeta,
          userid: this.props.user._id,
          wishListId: wishListRes._id,
        };
        wishlist1.push(wishlist);
      }
    });
    this.props.setWishList(wishlist1);
    const removeIndex = basicFunction.checkProductInWishList(
      wishlist1,
      this.props.product.productid._id
    );
    if (removeIndex || removeIndex === 0) {
      this.setState({ isFavourite: true });
    }
  }

  hartState = async (_id, productmainId, productDetails, productSlug) => {
    if (!this.props.user._id) {
      this.props.toggleRegBar();
    } else {
      // console.log(this.props.wishList)
      const removeIndex = basicFunction.checkProductInWishList(
        this.props.wishList,
        productmainId
      );
      //  console.log(removeIndex);
      var wishListArray = [...this.props.wishList];
      if (removeIndex || removeIndex === 0) {
        if (this.props.user._id) {
          var id = wishListArray[removeIndex].wishListId;
          deleteWishList({ id })
            .then((resJson) => {
              if (resJson.success) {
              }
            })
            .catch();
        }
        wishListArray.splice(removeIndex, 1);
        this.props.setWishList(wishListArray);
        this.setState({
          SpinnerToggle: false,
        });
        this.setState({ isFavourite: false });
      } else {
        // console.log(this.props.user._id);
        this.setState({ isFavourite: true });
        if (this.props.user._id) {
          const userid = this.props.user._id;
          addToWishList(userid, productmainId, _id, productSlug)
            .then((resJson) => {
              const resJson2 = resJson.data;
              if (resJson2.status) {
                var wishlist = '';
                const wishListRes = resJson2.wishlist;
                //  console.log(wishListRes);
                if (wishListRes.combo) {
                  wishlist = {
                    combo: wishListRes.combo,
                    productid: wishListRes.comboid,
                    productmeta: wishListRes.comboid,
                    userid: userid,
                    wishListId: wishListRes._id,
                    productSlug,
                  };
                } else {
                  wishlist = {
                    combo: wishListRes.combo,
                    productid: wishListRes.productid,
                    productmeta: wishListRes.productmeta,
                    userid: userid,
                    wishListId: wishListRes._id,
                    productSlug,
                  };
                }
                // console.log(wishlist)
                this.props.setWishList([...wishListArray, wishlist]);
                this.setState({
                  SpinnerToggle: false,
                });
              }
            })
            .catch((err) => {});
        } else {
          const wishListDetails = {
            productmeta: _id,
            productid: productmainId,
            productDetails: productDetails,
            productSlug,
          };
          // console.log(wishListDetails);
          this.props.setWishList([...wishListArray, wishListDetails]);
        }
      }
    }
  };

  getAvg = (reviews) => {
    if (reviews) {
      const newArr = reviews.map((el) => el.overall);
      const sum = newArr.reduce((a, b) => a + b, 0);
      return sum / reviews.length;
    }
    return 0;
  };

  render() {
    // console.log(this.state.isFavourite)
    // console.log(this.props.wishList)
    //  console.log(this.state.displayDrawer);
    const className = this.state.isFavourite
      ? 'c-product-info__btn-wrap__wishlist__active'
      : 'c-product-info__btn-wrap__wishlist';
    const { qty, isSubscribed, subsDuration, isAllIngredient } = this.state;
    const {
      image,
      product,
      productAttr,
      addToCart,
      cart,
      showCartBar,
      allProducts,
    } = this.props;
    const basePrice = getBasicPrice(product);
    const price = parseFloat(basePrice.sale_price || 0) * qty;
    const { subsPercent } = projectSettings;
    const cutPrice = basicFunction.getParchantage(
      parseFloat(subsPercent),
      basePrice.sale_price
    );
    const disPrice = (
      (parseFloat(basePrice.sale_price) - parseFloat(cutPrice)) *
      qty
    ).toFixed(2);
    const { _id: productId, combo, productid, title } = product;
    const productName =
      combo === true ? title : productid ? productid.producttitle : title || '';

    const addToCartFn = () => {
      if (isSubscribed) {
        addToCart(
          directAddToCart(
            {
              ...product,
              subscribed: isSubscribed,
              subscribedTime: subsDuration,
              subscribedDiscountPersent: subsPercent,
            },
            qty
          )
        );
      } else {
        addToCart(
          directAddToCart(
            {
              ...product,
            },
            qty
          )
        );
      }
      showCartBar();
    };
    const { Option } = Select;
    const gallery = getProductImageArray(product);
    console.log(this.props.reviews);
    const avgReviews = this.getAvg(this.props.reviews).toFixed(1);
    // console.log(this.props);
    const reviewsLength = this.props.reviews ? this.props.reviews.length : 0;
    const headingAndReviews = () => (
      <div>
        <div className="d-flex flex-wrap c-product-info__title-wrapper">
          <div className="c-product-info__title-col">
            <Heading
              versions={['default', 'product']}
              parentClass="c-product-info"
            >
              {product &&
                (product.title ||
                  (product.productid && product.productid.producttitle))}
            </Heading>
            <Heading
              style={{
                fontFamily: 'futuraBT-book',
                opacity: 0.5,
                fontWeight: '600',
                color: '#000000',
              }}
              subHeading="true"
              parentClass="c-product-info"
              versions={['product']}
            >
              {product &&
                (product.sdescription ||
                  (product.productid && product.productid.sdescription))}
            </Heading>
          </div>

          <div className="c-product-info__heart-and-rate ">
            <div className={className}>
              <Button
                style={{ color: 'black' }}
                onClick={() => {
                  this.hartState(
                    productId,
                    productid ? productid._id : productId,
                    {
                      productName,
                      image,
                    }
                    // productSlug
                  );
                }}
                versions={['wishlist']}
                parentClass="border-left-0 c-product-info"
                //theme="outline"
              >
                {/* <Icon type="heart" theme="filled" /> */}
                {/* {heart()} */}
                <Heart />
              </Button>
            </div>
            <div
              className="c-product-info__rating-wrapper "
              style={{ cursor: 'pointer' }}
            >
              {reviewsLength > 0 && (
                <div
                  className="c-product-info__rate"
                  onClick={() => Router.push(`/reviews/${product._id}`)}
                >
                  <Rate
                    style={{ color: '#000' }}
                    className="c-product-info__stars c-product-info__stars--sm "
                    disabled
                    value={avgReviews}
                    allowHalf={true}
                  />
                  <p className="c-product-info__review">
                    {reviewsLength} Reviews({avgReviews})
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
    // console.log(this.props.wishList)
    return (
      <div className="c-product-info container">
        <Drawer
          onClose={this.props.toggleRegBar}
          title={'Login'}
          visible={this.props.isRegOpen}
        >
          <Login />
        </Drawer>
        <div className="c-product-info__row">
          <div className="c-product-info__image-col">
            {/* <div className="c-product-info__mobile-sec">
              <div className="c-product-info__title-wrap">
                {headingAndReviews()}
              </div>
            </div> */}
            <div className="c-product-info__img-wrapper">
              {gallery && gallery.length > 0 && <ImageZoom images={gallery} />}
              {gallery && gallery.length <= 0 && (
                <LazyLoadImage
                  src={image}
                  alt="product"
                  className="img-fluid c-product-info__img"
                />
              )}
              {/* <p className="c-product-info__size">1 oz/30 ml</p> */}
            </div>
          </div>
          <div className="">
            <div className="c-product-info__title-wrap">
              {headingAndReviews()}
            </div>
            <div className="c-product-info__description">
              <Heading
                subHeading="true"
                className="c-product-info__description-heading"
                versions={['default', 'product']}
                parentClass="c-product-info"
              >
                {product &&
                  (product.description ||
                    (product.productid && product.productid.description))}
              </Heading>
            </div>
            <div className="c-product-info__list">
              <h2 className="c-sub-heading c-sub-heading--default">
                <b>What is it?</b>
              </h2>

              {productAttr.map((el, i) => (
                <h4
                  key={i}
                  className="c-product-info__description-heading"
                  style={{ lineHeight: '1.8' }}
                >
                  {el.description}
                </h4>
              ))}
              <br />

              {!product.combo && (
                <div>
                  <h2
                    className="c-sub-heading c-sub-heading--default"
                    onClick={() => {
                      this.setState((prevState) => ({
                        isAllIngredient: !prevState.isAllIngredient,
                      }));
                    }}
                    style={{ cursor: 'pointer' }}
                  >
                    <b>
                      {isAllIngredient ? 'All' : 'Key'} Ingredients{' '}
                      <Icon
                        type={isAllIngredient ? 'minus' : 'plus'}
                        style={{ verticalAlign: '0.1em' }}
                      />{' '}
                    </b>{' '}
                  </h2>

                  <Collapse isOpen={!isAllIngredient}>
                    <h4
                      parentClass="c-product-info "
                      className="c-product-info__description-heading"
                      style={{ lineHeight: '1.8', marginBottom: '20px' }}
                    >
                      {' '}
                      {product.keyingredients}{' '}
                    </h4>
                  </Collapse>
                  <Collapse isOpen={isAllIngredient}>
                    <h4
                      parentClass="c-product-info "
                      className="c-product-info__description-heading"
                      style={{ lineHeight: '1.8', marginBottom: '20px' }}
                    >
                      {' '}
                      {product.allingredients}{' '}
                    </h4>
                  </Collapse>
                </div>
              )}
            </div>

            <div className="c-product-info__atc-wrapper">
              <div className="c-product-info__price-and-qty">
                <div
                  style={{ paddingRight: '10px' }}
                  className="c-product-info__price-wrapper"
                >
                  {isSubscribed ? (
                    <p
                      style={{ paddingRight: '10px' }}
                      className="c-product-info__price"
                    >
                      <strike style={{ opacity: 0.7, marginLeft: '3px' }}>
                        ${numberFormat(price)}
                      </strike>
                      <span> ${numberFormat(disPrice)}</span>
                    </p>
                  ) : (
                    <p
                      style={{ paddingRight: '10px' }}
                      className="c-product-info__price"
                    >
                      ${numberFormat(price)}
                    </p>
                  )}
                </div>

                <div
                  className="c-product-info__qty-wrapper"
                  style={{ borderLeft: '1px solid #aaaaaa' }}
                >
                  <Quantity
                    value={qty}
                    onChange={(e) => this.setState({ qty: e })}
                    min={1}
                    parentClass="c-product-info"
                  />
                </div>
              </div>
              <div className="c-product-info__subscribe-wrapper d-flex">
                <Checkbox
                  checked={isSubscribed}
                  onChange={() => {
                    this.setState((prevState) => ({
                      isSubscribed: !prevState.isSubscribed,
                    }));
                  }}
                  versions={['light']}
                  id={product && product._id}
                  label={`Subscribe & save ${subsPercent}%`}
                />

                {isSubscribed && (
                  <div
                    style={{
                      padding: '15px 20px',
                      fontFamily: 'futuraBT-medium',
                      fontWeight: '700',
                    }}
                  >
                    <Select
                      style={{ width: '100px' }}
                      onChange={(e) => this.setState({ subsDuration: e })}
                      value={subsDuration}
                    >
                      <Option value="3">3 Months</Option>
                      <Option value="6">6 Months</Option>
                      <Option value="12">1 Year</Option>
                    </Select>
                    <br />
                  </div>
                )}
              </div>
            </div>
            <div className="c-product-info__btn-wrapper">
              <div className="c-product-info__btn-wrap">
                <Button
                  onClick={addToCartFn}
                  parentClass="c-product-info"
                  // theme="dark"
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
        <center className="d-flex justify-content-center floating-btn">
          <Button
            onClick={addToCartFn}
            parentClass="c-product-info"
            // theme="dark"
          >
            Add to cart
          </Button>
        </center>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  wishList: state.wishList,
  user: state.user,
  isRegOpen: state.isRegOpen,
});
export default connect(mapStateToProps, {
  addToCart,
  showCartBar,
  setWishList,
  toggleRegBar,
})(ProductInfo);
