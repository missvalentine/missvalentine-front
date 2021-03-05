import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('./Heading'));
const Button = dynamic(() => import('./form-components/Button'));
import classNames from 'classnames';
import { connect } from 'react-redux';
import projectSettings from '../constants/projectSettings';
import Flickity from 'react-flickity-component';
import Link from 'next/link';
import { addToCart } from '../redux/actions/cart';
import { directAddToCart, getProductTitle } from '../services/helpers/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { showCartBar } from '../redux/actions/drawers';

const CategoryProducts = ({
  heading,
  subHeading,
  categoryList,
  activeCategory,
  addToCart,
  onCategoryChange,
  showCartBar,
  products,
  bg,
  btnText,
}) => {
  const className = classNames('c-category-products', {
    [`c-category-products--${bg}`]: bg,
  });
  const flickityInit = () => {
    setTimeout(() => {
      if (flkty) {
        flkty.on('scroll', (progress) => {
          if (!isNaN(progress)) {
            let pos = `${progress * 80}%`;
            //  sliderLine.current.style.left = pos
          }
        });
      }
    }, 200);
  };
  const flResize = () => {
    if (flkty) flkty.resize();
  };

  const addToCartFn = (product) => {
    if (product) {
      addToCart(directAddToCart(product));
      showCartBar();
    }
  };

  let flkty = undefined;
  return (
    <div className={className}>
      <div className="c-category-products__heading-wrapper">
        <Heading
          parentClass="c-category-products"
          versions={['default', 'upper']}
        >
          {heading}
        </Heading>
        {subHeading && (
          <Heading
            subHeading={true}
            parentClass="c-category-products"
            versions={['default', 'lft-br']}
          >
            {subHeading}
          </Heading>
        )}
      </div>
      <div className="c-category-products__list">
        {categoryList.map((el, i) => (
          <span
            onClick={() => {
              onCategoryChange(el);
            }}
            className={classNames('c-category-products__list-item', {
              'c-category-products__list-item--active':
                activeCategory === el.title,
            })}
            key={i}
          >
            {el.title}
          </span>
        ))}
      </div>
      <div className="row c-category-products__product-list">
        <Flickity
          options={{
            initialIndex: 0,
            pageDots: false,
            cellAlign: 'left',
            contain: true,
            on: {
              ready: () => {
                flickityInit();
              },
            },
          }}
          flickityRef={(c) => (flkty = c)}
          disableImagesLoaded={false}
          reloadOnUpdate={true}
          className="c-category-products__slider "
        >
          {products
            .filter((product) => product.visibilitytype)
            .map((el, i) => {
              // console.log(el);
              return (
                <div className="col-lg-4 col-sm-12 col-xs-12 c-category-products__product" key={i}>
                  <Link
                    key={i}
                    href={`/shop/${getProductTitle(el).replace(/ /g, '-')}`}
                  >
                    <div>
                      <LazyLoadImage
                        src={projectSettings.serverUrl + el.productImage}
                        alt={el.title ? el.title : 'product'}
                        onLoad={() => {
                          flResize();
                        }}
                        className="c-category-products__img img-fluid d-flex mx-auto"
                      />
                      <span className="w-100 text-center">
                        {getProductTitle(el).replace(/ /g, '-')}
                      </span>
                    </div>
                  </Link>
                  <Button
                    onClick={() => addToCartFn(el)}
                    parentClass="c-product-card"
                    theme="dark"
                  >
                    Add to Cart
                  </Button>
                </div>
              );
            })}
        </Flickity>
      </div>
      <div
        className="consult-doc-banner-wrapper"
        style={{ padding: '0rem 0 0rem 0' }}
      >
        <Link href="/shop">
          <button
            className="top-btn"
            style={{ fontSize: 'x-large', fontWeight: '500' }}
          >
            {btnText}{' '}
            <LazyLoadImage
              className="top"
              style={{ height: '20px', marginBottom: '5px' }}
              src="/images/right-arrow-32px.png"
              alt="to-top"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

CategoryProducts.defaultProps = {
  categoryList: [],
  products: [],
  activeCategory: '',
  onCategoryChange: () => {},
};

export default connect(null, { addToCart, showCartBar })(CategoryProducts);
