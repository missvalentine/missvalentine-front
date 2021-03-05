import dynamic from 'next/dynamic'
const CartItem = dynamic(() => import("./CartItem"));
const Button = dynamic(() => import("./form-components/Button"));
import { connect } from "react-redux";
import {
  getProductTitle,
  getProductShortDesc,
  getProductImage,
} from "../services/helpers/product";
import { getGrandTotal } from "../services/helpers/cart";
import { numberFormat } from "../services/helpers/misc";
import { initialCart } from "../constants/reduxInitialStates";
import {
  modifyItem,
  removeFromCart,
  hideCartBar,
  setCoupon as setStateCoupon,
  removeCoupon,
} from "../redux/actions";
import Link from "next/link";
const Heading = dynamic(() => import("./Heading"));
const Input = dynamic(() => import("./form-components/Input"));
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { getCoupon } from "../services/apis/checkout";

const CartDrawer = ({
  complete,
  cart,
  modifyItem,
  removeFromCart,
  hideCartBar,
  setStateCoupon,
  removeCoupon,
}) => {
  const [coupon, setCoupon] = useState("");
  const handleInput = (e) => {
    setCoupon(e.target.value.toUpperCase());
    if (e.target.value === "" && cart.taxCouponCode != "") {
      removeCoupon(cart);
    }
  };
  useEffect(() => {
    if (cart.taxCouponDiscount != 0) {
      setCoupon(cart.taxCouponCode);
    }
  }, []);
  const handleDiscount = async () => {
    // e.preventDefault();
    const { data } = await getCoupon(coupon);
    if (data.status) {
      setStateCoupon(
        data.coupon.data.filter((data) => data.id === coupon)[0],
        cart
      );
    }
  };
  //console.log(cart);
  const qtyChange = (qty, oldItem) => {
    modifyItem({
      oldItem,
      newItem: {
        ...oldItem,
        qty,
      },
    });
  };
  const grandTotal = getGrandTotal(
    cart.subTotal,
    cart.taxPercent,
    cart.shippingCharge,
    cart.taxCouponDiscount
  );
  console.log(cart);
  const hasItems = cart.items.length > 0 ? true : false;
  const taxPrice = cart.taxCouponDiscount
    ? ((cart.taxCouponDiscount / 100) * cart.subTotal).toFixed(2)
    : 0;
  const shippingCharge = (cart.shippingCharge || 0).toFixed(2) || 0;
  console.log(taxPrice,cart.taxPercent);
  return (
    <div className="c-cart-drawer">
      {/* <p style={{ color: "#fff" }}></p> */}
      {hasItems && (
        <>
          {cart.items.map((el, i) => {
            // console.log(el);
            return (
              <CartItem
                key={i}
                title={getProductTitle(el)}
                image={getProductImage(el)}
                subTitle={getProductShortDesc(el)}
                price={`$${numberFormat(parseFloat(el.saleprice) * el.qty)}`}
                quantity={el.qty}
                onRemove={() => removeFromCart(el)}
                isDisabled={!cart.isEditable}
                onQtyChange={(e) => {
                  if (cart.isEditable) qtyChange(e, el);
                }}
              />
            );
          })}
          <div className="mt-auto"></div>
          {complete && (
            <>
              <CartItem
                small={true}
                title={"Subtotal"}
                price={`$${numberFormat(parseFloat(cart.subTotal))}`}
                total={true}
                versions={["small", "no-border"]}
              />
              <CartItem
                small={true}
                title={"Shipping"}
                price={`$${shippingCharge}`}
                total={true}
                // versions={cart.taxPercent ? ["small", "no-border"] : ["small"]}
                versions={["small", "no-border"]}
              />
              {taxPrice > 0 && (
                <CartItem
                  small={true}
                  title={"Discount"}
                  // price={`${(cart.taxPercent) ? cart.taxPercent : 0}`}
                  price={`-$${taxPrice}`}
                  total={true}
                  versions={["small", "no-border"]}
                />
              )}
              {cart.taxPercent > 0 && (
                <CartItem
                  small={true}
                  title={"Tax"}
                  // price={`${(cart.taxPercent) ? cart.taxPercent : 0}`}
                  price={`$${numberFormat(parseFloat(cart.taxPercent*cart.subTotal))}`}
                  total={true}
                  versions={["small", "no-border"]}
                />
              )}
              <CartItem
                title={"Total"}
                price={`$${grandTotal}`}
                total={true}
                versions={["no-border"]}
              />
              <div className="c-cart-drawer__discount-flex">
                {/* <Form onSubmit={handleDiscount}> */}
                <Input
                  value={coupon}
                  onChange={handleInput}
                  placeholder="Discount Code"
                  versions={["discount"]}
                />
                <Button
                  onClick={handleDiscount}
                  type="submit"
                  versions={["discount"]}
                  value="Apply"
                />
                {/* </Form> */}
              </div>
            </>
          )}

          {!complete && (
            <>
              <CartItem
                title={"subtotal"}
                price={`$${numberFormat(parseFloat(cart.subTotal))}`}
                total={true}
                versions={["no-border"]}
              />
              <div className="c-cart-drawer__btn-wrapper row justify-content-center">
                <Link href="/checkout">
                  <a
                    className="c-btn c-btn--block c-btn--dark mt-5"
                    style={{ marginBottom: "4rem" }}
                  >
                    Proceed to checkout
                  </a>
                </Link>
              </div>
            </>
          )}
        </>
      )}
      {!hasItems && (
        <>
          <div className="c-cart-drawer__emptyCart">
            {/* <ReactSVG src="/images/cart-icon-1.svg" /> */}
            <LazyLoadImage
              className="c-cart-drawer__emptyCart--icon"
              src="/images/empty-cart.png"
              alt="Empty Cart.."
            />
          </div>
          <Heading
            parentClass="c-cart-item"
            versions={["dark"]}
            style={{ textAlign: "center" }}
          >
            Your bag is empty
          </Heading>
          <div className="c-cart-drawer__btn-wrapper mt-auto mb-4 row justify-content-center">
            <Link href="/shop">
              <a
                onClick={hideCartBar}
                className="c-btn c-btn--block c-btn--dark"
              >
                Continue shopping
              </a>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

CartDrawer.defaultProps = {
  complete: false,
  cart: initialCart,
};
const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, {
  modifyItem,
  removeFromCart,
  hideCartBar,
  setStateCoupon,
  removeCoupon,
})(CartDrawer);
