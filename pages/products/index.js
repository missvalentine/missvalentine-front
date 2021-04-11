import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';
import Fade from 'react-reveal/Fade';

import banner1 from '../../assets/images/homeSlides/slider1.webp';
const Banner = dynamic(() => import('../../components/Banner'), {
  ssr: false,
});
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Heading = dynamic(() => import('../../components/Heading'), {
  ssr: false,
});

const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
import { getProducts, getCategories } from '../../redux/actions';

import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <Layout headerVersions={['bg-dark']} headerTheme="black">
      <Banner
        image={banner1}
        mobileImage={banner1}
        versions={['black-heading', 'shop']}
      ></Banner>
      <div className="c-shop-page">
        <div className="container-fluid">
          <div className="c-shop-page__row c-shop-page__row--light-bg row justify-content-center">
            <div className="col-xs-12">
              <Heading versions={['shop-all']}>
                {parse('DISCOVER THE WHOLE RANGE')}
              </Heading>
            </div>
          </div>
        </div>
        <div className="c-shop-page__products-wrapper">
          <div className="c-shop-page__row row">
            {products.products.map((el, i) => (
              <Fade>
                <div
                  key={el._id}
                  className="col-lg-4 col-md-6"
                  style={{ padding: '0 40px' }}
                >
                  <Product data={el} />
                </div>
              </Fade>
            ))}
          </div>
        </div>

        <div
          className="consult-doc-banner-wrapper"
          style={{ padding: '4rem 0' }}
        >
          <button
            className="top-btn"
            style={{ fontSize: 'x-large' }}
            onClick={() => toTop()}
          >
            BACK TO TOP{' '}
            <LazyLoadImage
              className="top"
              style={{ height: '20px', marginBottom: '5px' }}
              src="/images/arrow-up.png"
              alt="to-top"
            />
          </button>
        </div>
      </div>
    </Layout>
  );
};

// Product.getInitialProps = async ({ query }) => {
//     const res = await fetch(apiList.getAllProducts);

//     return {
//       category: query.cid,
//       productList: visibleProducts.map((el) => addSlugToProduct(el)),
//       combos: visibleCombo.map((el) => addSlugToProduct(el)),
//       shopdata: Shopdata.shop,
//     };
//   };

export default Products;
