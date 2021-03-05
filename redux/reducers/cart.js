import {
  ADD_ITEM,
  REMOVE_ITEM,
  MODIFY_ITEM,
  CLEAR_CART,
  SET_SHIPPING_CHARGE,
  SET_SHIPPING_TYPE,
  SET_TAX_VALUE,
  SET_COUPON_CODE_DISCOUNT_VALUE,
  SET_FAV_COUNTITY,
  SET_CART,
  SET_CART_NULL_ITEM,
  SET_CART_EDITABLE,
  REMOVE_COUPON_CODE_DISCOUNT_VALUE,
} from "../actions/type";
import {
  modifyProduct,
  addItem,
  removeItem,
  setSlugInCart,
} from "../../services/helpers/cart";
import { initialCart } from "../../constants/reduxInitialStates";

export default (state = initialCart, action) => {
  const { payload, type } = action;
  switch (type) {
    case ADD_ITEM:
      if (payload) {
        return setSlugInCart(addItem(state, payload));
      }
      return state;

    case REMOVE_ITEM:
      return setSlugInCart(removeItem(state, payload));

    case MODIFY_ITEM:
      if (payload.newItem && payload.oldItem) {
        const { newItem, oldItem } = payload;
        return setSlugInCart(modifyProduct(oldItem, newItem, state));
      }
      return state;
    // break;
    case CLEAR_CART:
      return initialCart;

    case SET_SHIPPING_CHARGE:
      return {
        ...state,
        shippingCharge: payload,
      };
    case SET_SHIPPING_TYPE:
      return {
        ...state,
        shippingType: payload,
      };
    case SET_TAX_VALUE:
      return {
        ...state,
        taxPercent: payload.taxPercent,
        taxCountry: payload.taxCountry,
      };

    case SET_COUPON_CODE_DISCOUNT_VALUE:
      return {
        ...state,
        taxCouponCode: payload.id,
        taxCouponDiscount: payload.percent_off,
      };

    case REMOVE_COUPON_CODE_DISCOUNT_VALUE:
      return {
        ...state,
        taxCouponCode: "",
        taxCouponDiscount: 0,
      };

    case SET_FAV_COUNTITY:
      return {
        ...state,
        setFav: payload.setFav,
      };
    case SET_CART_NULL_ITEM:
      return {
        ...state,
        hasNulled: payload,
      };
    case SET_CART:
      return payload;
    case SET_CART_EDITABLE:
      return {
        ...state,
        isEditable: payload,
      };
    default:
      return state;
  }
};
