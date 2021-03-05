import classNames from "classnames";
import Flickity from "react-flickity-component";
import dynamic from "next/dynamic";
const ProductCard = dynamic(() => import("./ProductCard"));
import {
  getProductTitle,
  getProductImage,
  getProductShortDesc,
} from "../services/helpers/product";
import projectSettings from "../constants/projectSettings";
const ProductSlider = ({ products, parentClass, versions }) => {
  const componentClass = `c-product-slider`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });

  let flkty = undefined;
  return (
    <div className={className}>
      <div className={`${componentClass}__row row`}>
        <Flickity
          options={{
            initialIndex: 0,
            pageDots: false,
            cellAlign: "left",
            // groupCells:3,
            contain: true,
          }}
          flickityRef={(c) => (flkty = c)}
          disableImagesLoaded={false}
          reloadOnUpdate={true}
          className="c-category-products__slider"
        >
          {products
            .filter((product) => product.visibilitytype)
            .map((el, i) => {
              const title = getProductTitle(el);
              const image = getProductImage(el);
              const subTitle = getProductShortDesc(el);
              return (
                <div key={i} className=" col-lg-4 c-category-products__product">
                  <ProductCard
                    subTitle={subTitle}
                    product={el}
                    price={el.dsaleprice}
                    image={image && projectSettings.serverUrl + image}
                    title={title}
                    versions={["show-price", "full-height"]}
                    parentClass={componentClass}
                    mg={el.totalcbdmg}
                  />
                </div>
              );
            })}
        </Flickity>
      </div>
    </div>
  );
};

ProductSlider.defaultProps = {
  products: [],
  versions: [],
};
export default ProductSlider;