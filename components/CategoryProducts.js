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
import Product from './Product';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
const CategoryProducts = (
  props,
  {
    heading,
    subHeading,
    // categoryList,
    // activeCategory,
    addToCart,
    // onCategoryChange,
    showCartBar,
    // products,
    bg,
    btnText,
  }
) => {
  const className = classNames('c-category-products', {
    [`c-category-products--${bg}`]: bg,
  });
  const [activeCategory, setActiveCategory] = useState('0');

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

  const onCategoryChange = (id) => setActiveCategory(id);

  const products = useSelector((s) => s.products);

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
        <span
          onClick={() => {
            onCategoryChange('0');
          }}
          className={classNames('c-category-products__list-item', {
            'c-category-products__list-item--active': activeCategory === '0',
          })}
          key={0}
        >
          All
        </span>

        {products.categories.map((el, i) => (
          <span
            onClick={() => {
              onCategoryChange(el._id);
            }}
            className={classNames('c-category-products__list-item', {
              'c-category-products__list-item--active':
                activeCategory === el._id,
            })}
            key={i}
          >
            {el.name}
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
          {products.products
            .filter((product) => product.hidden === false)
            .map((item, index) => (
              <Product {...props} key={index} data={item} />
            ))}
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
            {'See all products '} &nbsp;
            <img
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

export default connect(null, { addToCart, showCartBar })(CategoryProducts);
