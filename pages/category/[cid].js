import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});

const Heading = dynamic(() => import('../../components/Heading'), {
  ssr: false,
});
import apiList from '../../services/apis/apiList';

import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Spin, Skeleton, Empty } from 'antd';
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
  const [loading, setLoading] = React.useState(false);

  const { cid } = router.query;

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  const dispatch = useDispatch();
  const Category = useSelector((state) => state.products.category);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(-1);

  useEffect(() => {
    setLoading(true);
    dispatch(getCategory(cid));
    setLoading(false);
  }, [cid]);

  return (
    <Layout
      title={Category && Category.name}
      headerVersions={['bg-dark']}
      headerTheme="black"
    >
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
                {Category && Category.name}
              </Heading>
            </div>
          </div>
        </div>
        {/* 
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

          {Category &&
            Category.subcategories.map((el, i) => {
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
        </div> */}
        <Spin spinning={loading}>
          <div className="c-shop-page__products-wrapper">
            <div className="c-shop-page__row row justify-content-center">
              {Category !== null && Category.products.length > 0 ? (
                Category.products.map((el, i) => (
                  <div key={el._id} className="col-lg-4 col-md-6">
                    <Product data={el} />
                  </div>
                ))
              ) : (
                <center>
                  <Empty
                    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                    imageStyle={{
                      height: 100,
                    }}
                    description={
                      <h2>
                        Currently no product under {Category && Category.name}
                      </h2>
                    }
                  />
                </center>
              )}
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
        </Spin>{' '}
      </div>
    </Layout>
  );
};

export default connect(null)(Category);
