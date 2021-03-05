import dynamic from "next/dynamic";
import { useState } from "react";
import { connect } from "react-redux";
import classNames from "classnames";
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
// const BundleProducts = dynamic(() => import("../../components/BundleProducts"), {
//   ssr: false,
// });
const Heading = dynamic(() => import("../../components/Heading"), {
  ssr: false,
});
import apiList from "../../services/apis/apiList";
const ProductCard = dynamic(() => import("../../components/ProductCard"), {
  ssr: false,
});
import {
  getProductTitle,
  getProductShortDesc,
  getBasicPrice,
  addSlugToProduct,
  getVisibleProducts,
} from "../../services/helpers/product";
import { getBanner } from "../../services/apis/blog";
import projectSettings from "../../constants/projectSettings";
import fetch from "isomorphic-unfetch";
import { shopData } from "../../redux/actions";
import parse from "html-react-parser";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: "black" }} spin />
);
const Banner = dynamic(() => import("../../components/Banner"), {
  ssr: false,
});
const Shop = ({ productList, combos, shopdata, ...props }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const productsRow = productList.map((el) => {
    console.log({
      price: getBasicPrice(el),
      el,
    });
    return {
      ...el,
      image: el.productImage
        ? projectSettings.serverUrl + el.productImage
        : "//via.placeholder.com/300x500",
      title: getProductTitle(el),
      subTitle: getProductShortDesc(el),
      price: getBasicPrice(el),
    };
  });
  useEffect(() => {
    fetchImage();
  });

  const fetchImage = async () => {
    const { data } = await getBanner("shop");
    setImageUrl(data.data.image.src);
  };

  const applySearch = (products) =>
    products.filter((el) => {
      if (searchValue === "") return true;
      return el.title.toLowerCase().includes(searchValue.toLowerCase());
    });
  const [products, setProducts] = useState([...productsRow]);
  const onSearchChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };
  const filterProducts = (key) => {
    setSelectedFilters(key);
    switch (key) {
      case "featured":
        const featuredProducts = products.filter((product) => product.featured);
        const restProducts = products.filter((product) => !product.featured);
        setProducts([...featuredProducts, ...restProducts]);
        break;
      case "l2h":
        setProducts(
          products.sort(
            (a, b) =>
              parseFloat(a.price.sale_price) - parseFloat(b.price.sale_price)
          )
        );
        break;
      case "h2l":
        setProducts(
          products.sort(
            (a, b) =>
              parseFloat(b.price.sale_price) - parseFloat(a.price.sale_price)
          )
        );
        break;
      default:
        // setProducts(products)
        break;
    }
  };
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <Layout headerVersions={["bg-dark"]} headerTheme="black">
      <Banner
        image={imageUrl}
        mobileImage={imageUrl}
        versions={["black-heading", "shop"]}
      ></Banner>
      <div className="c-shop-page">
        <div className="container-fluid">
          <div className="c-shop-page__row c-shop-page__row--light-bg row justify-content-center">
            <div className="col-xs-12">
              <Heading versions={["shop-all"]}>{parse(shopdata.title)}</Heading>
            </div>
            {/* <div className="col-md-6 mt-5 mt-md-0">
                            <div className="c-shop-page__filter-box">
                                <SearchBox onChange={onSearchChange} value={searchValue} parentClass="c-shop-page" />
                                <div className="c-shop-page__filter">
                                    <div className="c-shop-page__filter-heading" onClick={()=> {setIsFilter(!isFilter)}}>
                                        sort by <Icon type={isFilter ? "minus" : "plus"} />
                                    </div>
                                    <Collapse isOpen={isFilter}>
                                        <div className="c-shop-page__filter-container">
                                            <FilterItem 
                                                isActive={selectedFilters === "featured"}
                                                onClick={()=> {filterProducts("featured")}}
                                            >
                                                featured
                                            </FilterItem>
                                            <FilterItem 
                                                isActive={selectedFilters === "l2h"}
                                                onClick={()=> {filterProducts("l2h")}}
                                            >
                                                price low to high
                                            </FilterItem>
                                            <FilterItem 
                                                isActive={selectedFilters === "h2l"}
                                                onClick={()=> {filterProducts("h2l")}}
                                            >
                                                price high to low
                                            </FilterItem>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                        </div>*/}
          </div>
        </div>
        <div className="c-shop-page__products-wrapper">
          <div className="c-shop-page__row row">
            {applySearch(products).map((el) => (
              <div key={el._id} className="col-lg-4 col-md-6">
                <ProductCard
                  product={el}
                  versions={["show-price", "full-height"]}
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
        {combos && combos.length > 1 && (<></>
          // <div className="c-category-page__combos-wrapper">
          //   <div className="c-category-page__row">
          //     <div className="c-category-page__combos-wrapper-top">
          //       <div className="">
          //         <Heading
          //           parentClass="c-category-page"
          //           versions={["large", "rgt-br"]}
          //         >
          //           {/* TRY THE BUNDLES */}
          //           {/* {parse(bundleTitle)} */}
          //           {parse(
          //             '<span style="font-size: 60px; line-height:50px;"><b>Bundles of <br> Awesomeness!</b></span>'
          //           )}
          //         </Heading>
          //       </div>
          //       <div className="">
          //         <Heading
          //           parentClass="c-category-page"
          //           subHeading={true}
          //           versions={["light"]}
          //         >
          //           {/* Give our bundles a try with our 60-day, money-back guarantee. The perfect gift. A great way to enjoy premium CBD at an incredible price. All bundles are 20% off. */}
          //           {/* {parse(bundleContent)} */}
          //           {parse(
          //             '<div><span>Give our bundles a try with our 60-day money-back guarantee. A great way to enjoy premium CBD at an incredible price.<p style=" margin-top: 20px;"><b style="font-size:30px;">All bundles are 20% off.</b></p></span></div>'
          //           )}
          //         </Heading>
          //       </div>
          //     </div>

          //     <div
          //       // className="c-category-products__bundles"
          //       style={{ marginTop: "50px" }}
          //     >
          //       {/* <BundleProducts versions={["no-padding", "h-auto"]} bg="bggrey" products={combos} />  */}
          //       <BundleProducts
          //         versions={["no-padding", "h-auto", "bundles"]}
          //         products={combos}
          //       />
          //       <div className="c-lr-section__btn-wrapper">
          //         {/* <Button theme="btm-br" type="link" link="/category/bundles">
          //           Explore More
          //         </Button> */}
          //       </div>
          //     </div>
          //   </div>
          // </div>
        )}
        <div className="consult-doc-banner-wrapper" style={{padding: '4rem 0'}}>
          <button
            className="top-btn"
            style={{ fontSize: "x-large" }}
            onClick={() => toTop()}
          >
            BACK TO TOP{" "}
            <LazyLoadImage
              className="top"
              style={{ height: "20px", marginBottom: "5px" }}
              src="/images/arrow-up.png"
              alt="to-top"
            />
          </button>
        </div>
        {/* <Fade>
					<LRSection
						heading="free shipping "
						subHeading="free returns"
						image={`${imageUrl}/Bundle-Image.png`}
					>
						<div className="c-less-more">
								<div className="c-less-more__whole">
									<div className="c-less-more__whole-inner">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
									</div>
								</div>
						</div>
					</LRSection>
				</Fade> */}
      </div>
    </Layout>
  );
};
const FilterItem = ({ isActive, onClick, children }) => (
  <div
    className={classNames("c-shop-page__filter-item", {
      "c-shop-page__filter-item--active": isActive,
    })}
    onClick={onClick}
  >
    {children}
  </div>
);
Shop.getInitialProps = async ({ query }) => {
  const res = await fetch(apiList.getAllProducts);
  const productList = await res.json();
  const visibleProducts = getVisibleProducts(productList.products);
  const Shopdata = await shopData();

  const comboRes = await fetch(apiList.getAllCombos);
  const comboList = await comboRes.json();
  const visibleCombo = getVisibleProducts(comboList.combos);

  return {
    category: query.cid,
    productList: visibleProducts.map((el) => addSlugToProduct(el)),
    combos: visibleCombo.map((el) => addSlugToProduct(el)),
    shopdata: Shopdata.shop,
  };
};
export default connect(null)(Shop);
