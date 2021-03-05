import dynamic from 'next/dynamic'
const Layout = dynamic(() => import("../../../components/Layouts/Layout"), {
  ssr: false,
});
const ProductInfo = dynamic(() => import("../../../components/ProductInfo"), {
  ssr: false,
});
const HImgSection = dynamic(() => import("../../../components/HImgSection"), {
  ssr: false,
});
import {
  getProductImage,
  getProductAttributes,
  getVisibleProducts,
  getProductDescription,
} from "../../../services/helpers/product";
const Heading = dynamic(() => import("../../../components/Heading"), {
  ssr: false,
});
const TitleList = dynamic(() => import("../../../components/TItleList"), {
  ssr: false,
});
const ProductDetailsTab = dynamic(() => import("../../../components/ProductDetailsTab"), {
  ssr: false,
});
const ProductSlider = dynamic(() => import("../../../components/ProductSlider"), {
  ssr: false,
});
import { useRouter } from "next/router";
import { connect } from "react-redux";
import fetch from "isomorphic-unfetch";
import projectSettings from "../../../constants/projectSettings";
const product = {
  title: "CBD Isolate 500 mg",
};

const Product = ({ product, ...props }) => {
  const router = useRouter();
  const { pid } = router.query;

  const state = {
    productDetails: null,
    productList: [
      {
        title: "title",
        subTitle: "sub title",
        image: "/images/oil.png",
      },
      {
        title: "lorem",
        subTitle: "sub title",
        image: "/images/capsule-img.png",
      },
      {
        title: "ipsum",
        subTitle: "sub title",
        image: "/images/cbd-oil.png",
      },
    ],
  };

  const { productList } = state;
  console.log({
    props: props,
    pid,
    router,
  });

  const productAttr = getProductAttributes(product);
  const image = getProductImage(product, "sectionB") || "/images/cbd-oil.png";
  const productImage = getProductImage(product)
    ? projectSettings.serverUrl + getProductImage(product)
    : "/images/cbd-oil.png";
  return (
    <Layout headerTheme="black">
      <ProductInfo
        product={product}
        productAttr={productAttr.filter((el, i) => i < 2)}
        image={productImage}
      ></ProductInfo>
      <HImgSection version={["full"]} image={projectSettings.filePath + image}>
        <div>
          <Heading>{getProductDescription(product)}</Heading>
        </div>
        <div className="c-product-single__list">
          {productAttr.map((el, i) => {
            if (i < 2) return null;
            return (
              <TitleList
                parentClass="c-product-single"
                key={i}
                title={el.title}
              >
                {el.description}
              </TitleList>
            );
          })}
        </div>
      </HImgSection>
      <div className="c-product-single__details-wrapper">
        <ProductDetailsTab product={product} parentClass="c-product-single" />
      </div>
      <div className="c-product-single__related-section">
        <div className="row">
          <div className="col-md-6">
            <Heading versions={["default", "upper"]}>Acompany with</Heading>
          </div>
          <div className="col-md-6">
            <Heading subHeading={true} versions={["default", "lft-br"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud.
            </Heading>
          </div>
          <div className="col-12">
            <ProductSlider
              parentClass="c-product-single"
              products={productList}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
Product.getInitialProps = async ({ query }) => {
  const { baseUrl } = projectSettings;
  const res = await fetch(baseUrl + "/products/api/getbyid/" + query.pid);
  const productObj = await res.json();
  const product = getVisibleProducts([productObj.product_details]);
  return {
    product: product.length && product[0],
    productObj,
  };
};
export default connect((state) => state)(Product);
