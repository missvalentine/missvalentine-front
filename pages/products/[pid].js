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
import { Spin } from 'antd';
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
    dispatch(getProduct(pid));
  }, [pid]);

  useEffect(() => {
    if (products.product !== null)
      dispatch({ type: 'ADD_TO_RECENTLY_VIEWD', payload: products.product });
  }, [products.product]);

  const title =
    products.product &&
    products.product.name &&
    products.product.name.length > 0 &&
    (products.product.category.name
      ? `${products.product.name.toUpperCase()} | ${
          products.product.category.name
        }`
      : products.product.name);

  return (
    <Layout title={title} headerTheme="black" fixed={true}>
      <Spin spinning={products.product && pid !== products.product._id}>
        <ProductDetail data={products.product} />
        {products.products.length > 0 && (
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
        {products.recentlyViewed.length > 0 && (
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
      </Spin>
    </Layout>
  );
};

export default Product;
