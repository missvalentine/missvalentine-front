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
import projectSettings from '../../constants/projectSettings';
import fetch from 'isomorphic-unfetch';
import parse from 'html-react-parser';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { getAllCategories } from '../../services/api';

const Category = (props) => {
  console.log(props);
  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };
  return <div>he;;p</div>;
  // return (
  //   <Layout fixed={true} headerTheme="black" logo={data.logo}>
  //     <div className="c-category-page ">
  //       <Banner
  //         image={data.image.src}
  //         mobileImage={data.image.src}
  //         // image={`${imageUrl}/Oil-Page-Image.png`}
  //         // mobileImage={`${imageUrl}/Oil-Page-Image.png`}
  //         versions={['black-heading']}
  //         // heading={
  //         //   <h2 class="c-banner__heading">
  //         //     <span class="c-banner__heading__leftSpan">
  //         //       reduce & relieve <br />
  //         //     </span>{" "}
  //         //     <span class="c-banner__heading__rightSpan">your pain.</span>
  //         //   </h2>
  //         // }
  //         heading={
  //           <h2 className="c-banner__heading">{parse(data.bannerTitle)}</h2>
  //         }
  //         content={<p class="c-banner__text-category">{parse(data.content)}</p>}
  //         //content={parser(bannerContent)}
  //       >
  //         {/* <Button
  // 					parentClass="c-home"
  // 					type="link"
  // 					link="/shop"
  // 					theme={"dark"}
  // 				>
  // 					{
  // 					//parser(bannerBtnText)
  // 					<span><b><i>Shop All</i></b></span>
  // 					}
  // 				</Button> */}
  //       </Banner>

  //       <div className="c-category-page__products-wrapper">
  //         <div className="c-category-page__row row">
  //           <div className="col-lg-12 col-md-12 d-flex ">
  //             <div className="c-category-page__heading-wrapper">
  //               <Heading
  //                 parentClass="c-category-page"
  //                 versions={['large', 'transform']}
  //               >
  //                 {/* Discover
  //                                   <br />
  //                                   {`our ${props.category} line`} */}
  //                 {parse(data.subTitle)}
  //               </Heading>
  //               {/* {parse(content)} */}
  //               {/* <hr /> */}
  //             </div>
  //           </div>
  //           {products.map((el) => (
  //             <div key={el._id} className="col-lg-4 col-md-6">
  //               <ProductCard
  //                 product={el}
  //                 versions={['show-price', 'full-height']}
  //                 title={el.title}
  //                 subTitle={el.subTitle}
  //                 image={el.image}
  //                 price={el.price && el.price.sale_price}
  //                 mg={el.totalcbdmg}
  //               />
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </div>
  //     <div className="consult-doc-banner-wrapper">
  //       <button
  //         className="top-btn"
  //         style={{ fontSize: 'x-large' }}
  //         onClick={() => toTop()}
  //       >
  //         BACK TO TOP{' '}
  //         <LazyLoadImage
  //           className="top"
  //           style={{ height: '20px', marginBottom: '5px' }}
  //           src="/images/arrow-up.png"
  //           alt="to-top"
  //         />
  //       </button>
  //     </div>
  //   </Layout>
  // );
};

export async function getStaticPaths() {
  const res = await getAllCategories();
  const categories = await res.data.data;
  console.log(res, 'insss category');

  const paths = categories.map((cate) => ({
    params: { cid: cate._id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const res = await getAllCategories();
  console.log(res, 'in category');
  return {
    props: {
      // posts,
    },
  };
}
export default connect(null)(Category);
