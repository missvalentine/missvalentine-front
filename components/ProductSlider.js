import classNames from 'classnames';
import Flickity from 'react-flickity-component';
import dynamic from 'next/dynamic';
const Product = dynamic(() => import('./Product'));
import {
  getProductTitle,
  getProductImage,
  getProductShortDesc,
} from '../services/helpers/product';
import projectSettings from '../constants/projectSettings';
import { useSelector, useDispatch } from 'react-redux';

const ProductSlider = ({ parentClass, versions, products }) => {
  const componentClass = `c-product-slider`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  // const products = useSelector((state) => state.products);

  let flkty = undefined;
  return (
    <div className={className}>
      <div className={`${componentClass}__row row`}>
        <Flickity
          options={{
            initialIndex: 0,
            pageDots: false,
            cellAlign: 'left',
            // groupCells:3,
            contain: true,
          }}
          flickityRef={(c) => (flkty = c)}
          // disableImagesLoaded={false}
          reloadOnUpdate={true}
          className="c-category-products__slider"
        >
          {products
            .filter((product) => product.hidden !== true)
            .map((el, i) => {
              return (
                <div key={i} className=" col-lg-4 c-category-products__product">
                  <Product data={el} />
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
