import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';

const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
// const BundleProducts = dynamic(
//   () => import("../../components/BundleProducts"),
//   {
//     ssr: false,
//   }
// );
const Heading = dynamic(() => import('../../components/Heading'), {
  ssr: false,
});
import apiList from '../../services/apis/apiList';
const ProductCard = dynamic(() => import('../../components/ProductCard'), {
  ssr: false,
});

import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getAllCategories } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';
import banner2 from '../../assets/images/homeSlides/slider2.webp';
const Banner = dynamic(() => import('../../components/Banner'), {
  ssr: false,
});
import { getCategory } from '../../redux/actions';

const Category = (props) => {
  const router = useRouter();

  const { cid } = router.query;

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const dispatch = useDispatch();
  const Category = useSelector((state) => state.products.category);

  useEffect(() => {
    console.log('calling cat', Category);

    dispatch(getCategory(cid));
    console.log('products', Category);
  }, []);

  return (
    <Layout headerVersions={['bg-dark']} headerTheme="black">
      <Banner
        image={banner2}
        mobileImage={banner2}
        versions={['black-heading', 'shop']}
      ></Banner>
      <div className="c-shop-page">
        <div className="container-fluid">
          <div className="c-shop-page__row c-shop-page__row--light-bg row justify-content-center">
            <div className="col-xs-12">
              <Heading versions={['shop-all']}>
                {/* {parse('DISCOVER OUR BRA LINE')} */}
                {/* {Category.name} */}
              </Heading>
            </div>
          </div>
        </div>
        <div className="c-shop-page__products-wrapper">
          <div className="c-shop-page__row row">
            {Category !== null &&
              Category.products.map((el, i) => (
                <div key={el._id} className="col-lg-4 col-md-6">
                  <Product data={el} />
                </div>
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

export default connect(null)(Category);
