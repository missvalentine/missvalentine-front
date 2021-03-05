import dynamic from 'next/dynamic'
import classNames from "classnames";
const Button = dynamic(() => import("./form-components/Button"));
import { connect } from "react-redux";
import { addToCart } from "../redux/actions/cart";
import { directAddToCart, getProductTitle } from "../services/helpers/product";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { showCartBar } from "../redux/actions/drawers";
const ProductCard = ({
  versions,
  parentClass,
  image,
  title,
  addToCart,
  product,
  showCartBar,
  mg,
}) => {
  const componentClass = `c-product-card`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  const addToCartFn = (product) => {
    if (product) {
      addToCart(directAddToCart(product));
      showCartBar();
    }
  };
  
  const CardUpper = () => (
    <div>
      <div className={`${componentClass}__img-wrapper`}>
        <LazyLoadImage className={`${componentClass}__img img-fluid`} src={image} alt={title} />
      </div>
      <div className={`${componentClass}__info`}>
        <p
         
          className={`${componentClass}__title`}
        >
          {title.split(/(\d+)/)[0]}
        </p>
       {mg && <p
         
          className={`${componentClass}__sub-title`}
        >
          {mg} mg
        </p>}
      </div>
    </div>
  );
  return (
    <div
     
      className={className}
    >
      {product && product._id ? (
        <Link href={`/shop/${getProductTitle(product).replace(/ /g, "-")}`}>
          <a className={`${componentClass}__overlay-link`}>
            <CardUpper />
          </a>
        </Link>
      ) : (
        <CardUpper />
      )}
      <div className={`${componentClass}__btn-wrapper`}>
        {/* {price && <p className={`${componentClass}__price`}>
                    ${price}
                </p>} */}
       {versions  && !versions.some(x=>x=='bundle') && <Button
          onClick={() => addToCartFn(product)}
          parentClass={componentClass}
          theme="dark"
        >
          Add to Cart
        </Button>}
      </div>
    </div>
  );
};
ProductCard.defaultProps = {
  versions: [],
};
export default connect(null, { addToCart, showCartBar })(ProductCard);
