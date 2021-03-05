import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
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
import { getCategory } from '../../services/apis/blog';
import {
  getProductTitle,
  getProductShortDesc,
  getBasicPrice,
  addSlugToProduct,
  getVisibleProducts,
} from '../../services/helpers/product';
import projectSettings from '../../constants/projectSettings';
import fetch from 'isomorphic-unfetch';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: 'black' }} spin />
);
const Banner = dynamic(() => import('../../components/Banner'), {
  ssr: false,
});
const Category = ({ productList, combos, data, ...props }) => {
  const products = productList.map((el) => {
    console.log({
      price: getBasicPrice(el),
      el,
    });
    return {
      image: el.productImage
        ? projectSettings.serverUrl + el.productImage
        : '//via.placeholder.com/300x500',
      title: getProductTitle(el),
      subTitle: getProductShortDesc(el),
      price: getBasicPrice(el),
      ...el,
    };
  });
  console.log(data);
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return (
    <Layout fixed={true} headerTheme="black" logo={data.logo}>
      {/* <Layout headerVersions={["bg-dark"]} className="c-consult-page" title="Category">  */}
      <div className="c-category-page ">
        {/*<HImgSection
					parentClass="c-category-page"
					version={["full", "content-bottom"]}
					image={`${imageUrl}/Oil-Page-Image.png`}
				>
					<div>
						<Heading
							parentClass="c-category-page"
							versions={["lft-br", "large"]}
						>
							{parse(bannerTitle)}
						</Heading>
					</div>
					<div>
					</div>
				</HImgSection> */}
        <Banner
          // ! temporary images to style
          image={data.image.src}
          mobileImage={data.image.src}
          // image={`${imageUrl}/Oil-Page-Image.png`}
          // mobileImage={`${imageUrl}/Oil-Page-Image.png`}
          versions={['black-heading']}
          // heading={
          //   <h2 class="c-banner__heading">
          //     <span class="c-banner__heading__leftSpan">
          //       reduce & relieve <br />
          //     </span>{" "}
          //     <span class="c-banner__heading__rightSpan">your pain.</span>
          //   </h2>
          // }
          heading={
            <h2 className="c-banner__heading">{parse(data.bannerTitle)}</h2>
          }
          content={<p class="c-banner__text-category">{parse(data.content)}</p>}
          //content={parser(bannerContent)}
        >
          {/* <Button
						parentClass="c-home"
						type="link"
						link="/shop"
						theme={"dark"}
					>
						{
						//parser(bannerBtnText)
						<span><b><i>Shop All</i></b></span>
						}
					</Button> */}
        </Banner>

        <div className="c-category-page__products-wrapper">
          <div className="c-category-page__row row">
            <div className="col-lg-12 col-md-12 d-flex ">
              <div className="c-category-page__heading-wrapper">
                <Heading
                  parentClass="c-category-page"
                  versions={['large', 'transform']}
                >
                  {/* Discover
                                    <br />
                                    {`our ${props.category} line`} */}
                  {parse(data.subTitle)}
                </Heading>
                {/* {parse(content)} */}
                {/* <hr /> */}
              </div>
            </div>
            {products.map((el) => (
              <div key={el._id} className="col-lg-4 col-md-6">
                <ProductCard
                  product={el}
                  versions={['show-price', 'full-height']}
                  title={el.title}
                  subTitle={el.subTitle}
                  image={el.image}
                  price={el.price && el.price.sale_price}
                  mg={el.totalcbdmg}
                />
              </div>
            ))}
          </div>
        </div>
        {combos && combos.length > 1 && (
          <></>
          //  <div className="c-category-page__combos-wrapper">
          //     <div className="c-category-page__row">
          //       <div className="c-category-page__combos-wrapper-top">
          //         <div className="">
          //           <Heading
          //             parentClass="c-category-page"
          //             versions={["large", "rgt-br"]}
          //           >

          //             {parse(
          //               '<span style="font-size: 60px;line-height:50px;"><b>Bundles of <br> Awesomeness!</b></span>'
          //             )}
          //           </Heading>
          //         </div>
          //         <div className="">
          //           <Heading
          //             parentClass="c-category-page"
          //             subHeading={true}
          //             versions={["light"]}
          //           >

          //             {parse(
          //               '<div><span>Give our bundles a try with our 60-day money-back guarantee. A great way to enjoy premium CBD at an incredible price.<p style=" margin-top: 20px;"><b style="font-size:30px;">All bundles are 20% off.</b></p></span></div>'
          //             )}
          //           </Heading>
          //         </div>
          //       </div>

          //       <div
          //       // className="c-category-products__bundles"
          //       // style={{ marginTop: "50px" }}
          //       >
          //         <BundleProducts versions={["no-padding", "h-auto"]} bg="bggrey" products={combos} />
          //         <BundleProducts
          //           versions={["no-padding", "h-auto", "bundles"]}
          //           products={combos}
          //         />
          //       </div>
          //     </div>
          //   </div>
        )}
      </div>
      <div className="consult-doc-banner-wrapper">
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
    </Layout>
  );
};
Category.getInitialProps = async ({ query }) => {
  if (query.cid.toLowerCase() === 'bundles') {
    const res = await fetch(apiList.getAllCombos);
    const productList = await res.json();
    const visibleProducts = getVisibleProducts(productList.combos);
    const { data } = await getCategory(query.cid);

    return {
      category: query.cid,
      productList: visibleProducts.map((el) => addSlugToProduct(el)),
      combos: [],
      data: data.data,
    };
  } else {
    const { data } = await getCategory(query.cid);
    // console.log(data);
    const res = await fetch(apiList.getAllProducts);
    const productList = await res.json();
    const visibleProducts = getVisibleProducts(productList.products);

    const comboRes = await fetch(apiList.getAllCombos);
    const comboList = await comboRes.json();
    const visibleCombo = getVisibleProducts(comboList.combos);

    const categoryProduct = visibleProducts.filter((el) => {
      if (el.categoryid) {
        if (el.categoryid.constructor === Array) {
          return el.categoryid.some(
            (elx) =>
              elx.categorytitle &&
              elx.categorytitle.toLowerCase() === query.cid.toLowerCase()
          );
        } else if (el.categoryid.categorytitle) {
          return (
            el.categoryid.categorytitle.toLowerCase() ===
            query.cid.toLowerCase()
          );
        }
      }
      return false;
    });
    return {
      category: query.cid,
      productList: categoryProduct.map((el) => addSlugToProduct(el)),
      combos: visibleCombo.map((el) => addSlugToProduct(el)),
      data: data.data,
    };
  }
};
export default connect(null)(Category);
