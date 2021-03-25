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

    addToCart,
    showCartBar,
    bg,
    btnText,
  }
) => {
  const className = classNames('c-category-products', {
    [`c-category-products--${bg}`]: bg,
  });
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);

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

  const onCategoryChange = (index) => setActiveCategoryIndex(index);

  const products = useSelector((s) => s.products);
  console.log('pro', products);
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
            onCategoryChange(-1);
          }}
          className={classNames('c-category-products__list-item', {
            'c-category-products__list-item--active':
              activeCategoryIndex === -1,
          })}
          key={0}
        >
          All
        </span>

        {products.categories.map((el, i) => {
          if (el.products.length >= 1)
            return (
              <span
                onClick={() => {
                  onCategoryChange(i);
                }}
                className={classNames('c-category-products__list-item', {
                  'c-category-products__list-item--active':
                    activeCategoryIndex === i,
                })}
                className={`c-category-products__list-item 
            ${activeCategoryIndex === i &&
              'c-category-products__list-item--active'}
                `}
                key={i}
              >
                {el.name}
              </span>
            );
        })}
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
          {console.log('poooo', products.categories, activeCategoryIndex)}
          {activeCategoryIndex === -1
            ? products.products
                .filter((product) => product.hidden === false)
                .map((item, index) => (
                  <Product {...props} key={index} data={item} />
                ))
            : products.categories[activeCategoryIndex].products
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
        <Link href="/products">
          <button
            className="top-btn"
            style={{ fontSize: 'x-large', fontWeight: '500' }}
          >
            {'SEE ALL PRODUCTS '} &nbsp;
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
