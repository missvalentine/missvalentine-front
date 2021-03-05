import dynamic from "next/dynamic";
import classNames from "classnames";
const Heading = dynamic(() => import("./Heading"));
import Quantity from "./form-components/Quantity";
import { Icon } from "antd";
import ProjectSetting from "../constants/projectSettings";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CartItem = ({
  title,
  subTitle,
  price,
  image,
  quantity,
  onRemove,
  onQtyChange,
  total,
  parentClass,
  versions,
  isDisabled,
  isSearch,
  clearSearch,
  ...props
}) => {
  const componentClass = "c-cart-item";
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  if (total) {
    return (
      <div className="c-cart-item__total">
        <h2 className="c-cart-item__total-title">{title}</h2>
        <h2 className="c-cart-item__total-price">{price}</h2>
      </div>
    );
  }

  if (isSearch) {
    return (
      <div
        onClick={clearSearch}
        // href={`/shop/${title.replace(/ /g, "-")}`}
      >
        <div className="c-cart-item__search">
          <div className="c-cart-item__search--img-wrapper">
            <LazyLoadImage
              width="100"
              height="100"
              src={`${ProjectSetting.serverUrl}${image}`}
            />
          </div>
          <div className="c-cart-item__search--content">
            <h2 className="c-cart-item__search--content-title">
              {title.split(/(\d+)/)[0]}
            </h2>
            <div className="c-cart-item__search--strength-and-price">
              <h2 className="c-cart-item__search--strength-and-price-strength">
                {subTitle} mg
              </h2>
              <h2 className="c-cart-item__search--strength-and-price-price">
                {price}
              </h2>
            </div>
          </div>

          {/* <div className="c-search-cart-item__img">
            <LazyLoadImage
              width="100"
              height="100"
              src={`${ProjectSetting.serverUrl}${image}`}
            />
          </div>
          <div className="c-search-cart-item__content">
            <Heading parentClass="c-cart-item" versions={["dark", "search"]}>
              {title.split(/(\d+)/)[0]}
            </Heading>
            <div className="c-search-cart-item__content-strength-and-price">
              <h3
                style={
                  {
                    // marginBottom: "10px",
                    // marginTop: "10px",
                  }
                }
              >
                {subTitle} mg
              </h3>
              <Heading
                parentClass="c-cart-item"
                versions={["default", "dark", "search"]}
              >
                {price}
              </Heading>
            </div>
          </div> */}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="c-cart-item__img-wrapper">
        <LazyLoadImage src={`${ProjectSetting.serverUrl}${image}`} />
      </div>
      <div className="c-cart-item__rightSpan">
        <div className="c-cart-item__details">
          <h2 className="c-cart-item__details--product-name">{title}</h2>
          <div className="c-cart-item__details--remove-btn">
            <Icon
              onClick={onRemove}
              className="c-cart-item__close"
              type="close"
            />
          </div>
        </div>
        <div className="c-cart-item__price-wrapper">
          <div className="c-cart-item__price-wrapper--quantity-wrapper">
            <Quantity
              min={1}
              isDisabled={isDisabled}
              onChange={onQtyChange}
              value={quantity}
              parentClass="c-cart-item"
            />
          </div>
          <h2 className="c-cart-item__price-wrapper--price">{price}</h2>
        </div>
      </div>

      {/* <div className="c-cart-item__card">
        <div className="row c-cart-item__row">
          <div className="c-cart-item__img-wrapper">
            <LazyLoadImage src={`${ProjectSetting.serverUrl}${image}`} />
          </div>
          <div className="col c-cart-item__title-wrapper">
            <Heading parentClass="c-cart-item" versions={["dark"]}>
              {title}
            </Heading>
           
            <div className="col c-cart-item__quantity-wrapper">
              <Quantity
                min={1}
                isDisabled={isDisabled}
                onChange={onQtyChange}
                value={quantity}
                parentClass="c-cart-item"
              />
            </div>
          </div>
          <div className="c-cart-item__actions">
            <div className="col c-cart-item__close-wrapper  flex-grow-0">
              <Icon
                onClick={onRemove}
                className="c-cart-item__close"
                type="close"
              />
            </div>
            <div className="col c-cart-item__price-wrapper flex-grow-0 c-cart-item__price-wrapper--position">
              <Heading
                parentClass="c-cart-item"
                versions={["dark"]}
                subHeading={true}
              >
                {price}
              </Heading>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

CartItem.defaultProps = {
  versions: [],
  isDisabled: false,
};
export default CartItem;
