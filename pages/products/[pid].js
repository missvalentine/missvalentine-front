import dynamic from 'next/dynamic';
import '../../components/styles/app.scss';

const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});
// const ProductInfo = dynamic(() => import('../../components/ProductInfo'), {
//   ssr: false,
// });
const HImgSection = dynamic(() => import('../../components/HImgSection'), {
  ssr: false,
});
import { useEffect, useState } from 'react';
import {
  getProductImage,
  getProductAttributes,
  getVisibleProducts,
  getProductDescription,
} from '../../services/helpers/product';
const Heading = dynamic(() => import('../../components/Heading'), {
  ssr: false,
});
const TitleList = dynamic(() => import('../../components/TItleList'), {
  ssr: false,
});
const ProductDetailsTab = dynamic(
  () => import('../../components/ProductDetailsTab'),
  {
    ssr: false,
  }
);
const ProductSlider = dynamic(() => import('../../components/ProductSlider'), {
  ssr: false,
});

import { useSelector, useDispatch } from 'react-redux';
import ProductDetail from '../../components/ProductDetail';

import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import fetch from 'isomorphic-unfetch';
import projectSettings from '../../constants/projectSettings';
import apiList from '../../services/apis/apiList';
import Error from 'next/error';
const product = {
  title: 'CBD Isolate 500 mg',
};
import { getProduct } from '../../redux/actions';

const Product = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    setIsScrolled(true);
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }, isScrolled);

  const router = useRouter();
  const { pid } = router.query;

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    console.log('pid', pid);
    dispatch(getProduct(pid));
  }, []);

  useEffect(() => {
    if (products.product !== null)
      dispatch({ type: 'ADD_TO_RECENTLY_VIEWD', payload: products.product });
  }, [products.product]);

  return (
    <Layout headerTheme="black" fixed={true}>
      <ProductDetail data={products.product} />
      {products.products !== [] && (
        <div className="c-product-single__related-section">
          <div
            className="row justify-content-center"
            style={{ maxWidth: '100%' }}
          >
            <div className="col-md-6">
              <Heading
                style={{
                  textAlign: 'center',
                }}
                versions={['default', 'upper', 'weight-500']}
              >
                YOU MAY ALSO LIKE
              </Heading>
            </div>

            <div className="col-12">
              <ProductSlider
                parentClass="c-product-single"
                products={products.products}
              />
            </div>
          </div>
        </div>
      )}
      {products.recentlyViewed !== [] && (
        <div className="c-product-single__related-section">
          <div
            className="row justify-content-center"
            style={{ maxWidth: '100%' }}
          >
            <div className="col-md-6">
              <Heading
                style={{
                  textAlign: 'center',
                }}
                versions={['default', 'upper', 'weight-500']}
              >
                RECENTLY VIEWED
              </Heading>
            </div>

            <div className="col-12">
              <ProductSlider
                parentClass="c-product-single"
                products={products.recentlyViewed}
              />
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
