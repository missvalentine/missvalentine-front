import dynamic from 'next/dynamic';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
const Tabs = dynamic(() => import('./Tabs'));
const TitleList = dynamic(() => import('./TItleList'));
const Heading = dynamic(() => import('./Heading'));
import { Rate, Modal } from 'antd';
import moment from 'moment';
import projectSettings from '../constants/projectSettings';
import {
  getProductTitle,
  getProductShortDesc,
} from '../services/helpers/product';
const ProductRating = dynamic(() => import('../components/ProductRating'));
import { TabContent, TabPane } from 'reactstrap';

const ProductDetailsTab = ({
  product,
  versions,
  parentClass,
  reviews,
  allProducts,
}) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const [open, setOpen] = useState(false);
  const componentClass = `c-product-details-tab`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const [currentTab, setCurrentTab] = useState('0');
  const className = classNames(componentClass, 'text-left', {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  const {
    totalcbdmg,
    cbdperunitmg,
    servings,
    servingsize,
    direction,
    warning,
    storage,
    indication,
    warranty,
    use,
  } = product;
  const getAvg = (reviews) => {
    if (reviews) {
      const newArr = reviews.map((el) => el.overall);
      const sum = newArr.reduce((a, b) => a + b, 0);
      return (sum / reviews.length).toFixed(1);
    }
    return 0;
  };
  // console.log({
  //   product,
  // });
  const avgReview = isNaN(getAvg(reviews)) ? 0 : getAvg(reviews);
  const totalReview = (reviews && reviews.length) || 0;
  const productFaq =
    product.faqcontent &&
    product.faqcontent.filter(
      (faq) => faq.title !== '' && faq.description !== ''
    );
  const tabs = [
    {
      title: 'Details',
      content: '',
      // content: <TabContainer>
      //     <div className="col-lg-4 col-md-6 c-product-details-tab__contain-col">
      //         <TitleList parentClass="c-product-details-tab" title="Total Cbd" >
      //             {`${totalcbdmg} mg`}
      //         </TitleList>
      //         <TitleList parentClass="c-product-details-tab" title={"Cbd per unit"} >
      //             {cbdperunitmg}
      //         </TitleList>
      //     </div>
      //     <div className="col-lg-4 col-md-6 c-product-details-tab__contain-col">
      //         <TitleList parentClass="c-product-details-tab" title="Total Servings" >
      //             {servings}
      //         </TitleList>
      //         <TitleList parentClass="c-product-details-tab" title="Servings Size" >
      //             {servingsize}
      //         </TitleList>
      //     </div>
      // </TabContainer>
    },
    {
      title: 'How to use',
      content: '',
      // content: <TabContainer>
      //     <div className="col-12 c-product-details-tab__contain-col text-center">
      //         <Heading parentClass={componentClass} h="4" subHeading={true} >Suggested Use</Heading>
      //         <p className={`${componentClass}__text`} >{direction}</p>
      //     </div>
      // </TabContainer>
    },
    {
      title: 'Reviews',
      content: '',
      //     content: <TabContainer>
      //     <div className="col-12 c-product-details-tab__contain-col text-center">
      //         {/* <Heading parentClass={componentClass} h="4" subHeading={true} >Suggested Use</Heading>
      //         <p className={`${componentClass}__text`} >{direction}</p> */}
      //         <div className="row">
      //             <div className="col-lg-8 col-md-9">
      //                 {reviews && reviews.map((el, key)=> <TitleList key={key} title={el.title} >
      //                     {el.content}
      //                 </TitleList>)}
      //             </div>
      //             <div className="col-lg-4 col-md-3">
      //                 <Rate
      //                     style={{ color: '#000' }}
      //                     className="c-product-details-tab__stars"
      //                     disabled value={avgReview}
      //                     allowHalf={true} />
      //                 <p className="c-product-details-tab__review-para">({totalReview} reviews)</p>
      //                 <h1 className="c-product-details-tab__review-heading">{avgReview}</h1>
      //             </div>
      //         </div>
      //     </div>
      // </TabContainer>
    },
    {
      title: "FAQ's",
      content: '',
      //     content: <TabContainer>
      //     <div className="col-12 c-product-details-tab__contain-col text-center">
      //         <div className="row">
      //             <div className="col-lg-8 col-md-9">
      //                 {product.faqcontent && product.faqcontent.map((el, key)=> <TitleList key={key} title={el.title} >
      //                     {el.description}
      //                 </TitleList>)}
      //             </div>
      //         </div>
      //     </div>
      // </TabContainer>
    },
    // {
    //     title: "Quality Sheet",
    //     content: "",
    // //     content: <TabContainer>
    // //     <div className="col-12 c-product-details-tab__contain-col text-center">
    // //         <div className="row">
    // //             <div className="col-lg-8 col-md-9">
    // //                 {product.faqcontent && product.faqcontent.map((el, key)=> <TitleList key={key} title={el.title} >
    // //                     {el.description}
    // //                 </TitleList>)}
    // //             </div>
    // //         </div>
    // //     </div>
    // // </TabContainer>
    // },
  ];
  const allTabs = product.labsheet
    ? [
        ...tabs,
        {
          title: 'Quality sheet',
          content: '',
        },
      ]
    : tabs;
  // console.log(currentTab)
  return (
    <div className={className}>
      <Tabs
        tabs={allTabs}
        activeKey={currentTab}
        onNextClick={(e) => {
          setCurrentTab(`${parseInt(currentTab) + 1}`);
        }}
        onPrevClick={(e) => {
          setCurrentTab(`${parseInt(currentTab) - 1}`);
        }}
        onChange={(e, a) => {
          setCurrentTab(e);
          if (e === '4') {
            //  console.log(product.labsheet)
            // if (typeof window !== "undefined") {
            //   window.location.href = "https://admin.cbdbene.com/images/uploads/BENE 001 CBD Gel Caps 25mg cbd 10mg curcumin(CoAs)-1603786893637.pdf";
            // }
            setOpen(true);
          }
        }}
        parentClass={componentClass}
      />
      <TabContent activeTab={currentTab}>
        <TabPane tabId="0">
          <TabContainer isActive={currentTab === '0'}>
            {product.combo ? (
              <div className="col-12">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="row">
                      {product.products.map((item) => {
                        const productItem = allProducts.find(
                          (product) => product._id === item.combo_pid
                        );
                        if (!productItem) return null;

                        const title = getProductTitle(productItem);
                        const desc = getProductShortDesc(productItem);
                        // console.log({
                        //   productItem,
                        // });
                        return (
                          <div
                            key={item.combo_pid}
                            className="col-lg-6 col-md-6 col-12 c-product-details-tab__contain-col"
                          >
                            <TitleList
                              parentClass="c-product-details-tab"
                              versions={['wide-title', 'height-100p']}
                              title={
                                <Link
                                  href={`/shop/${getProductTitle(
                                    productItem
                                  ).replace(/ /g, '-')}`}
                                >
                                  <a>{title}</a>
                                </Link>
                              }
                            >
                              {desc}
                            </TitleList>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="c-product-details-tab__contain-col c-product-details-tab__contain-col--detail">
                  {/* <div className="c-product-details-tab__flexDiv"> */}
                  <TitleList
                    parentClass="c-product-details-tab"
                    versions={['inline', 'new']}
                    title="Total CBD"
                    weight={`${totalcbdmg} mg`}
                  >
                    - {`${totalcbdmg} mg`}
                  </TitleList>
                  <TitleList
                    parentClass="c-product-details-tab"
                    versions={['inline', 'new']}
                    title={'CBD/ unit'}
                    weight={cbdperunitmg}
                  >
                    - {cbdperunitmg} mg
                  </TitleList>
                  <TitleList
                    parentClass="c-product-details-tab"
                    versions={['inline', 'new']}
                    title="Total Servings"
                    weight={servings}
                  >
                    - {servings}
                  </TitleList>
                  <TitleList
                    parentClass="c-product-details-tab"
                    versions={['inline', 'new']}
                    title="Servings Size"
                    weight={servingsize}
                  >
                    - {servingsize}
                  </TitleList>
                </div>
              </>
            )}
          </TabContainer>
        </TabPane>
        <TabPane tabId="1">
          <TabContainer isActive={currentTab === '1'}>
            <div className="col-12 c-product-details-tab__contain-col">
              {/* <Heading parentClass={componentClass} h="4" subHeading={true} >Suggested Use</Heading>
                            <p className={`${componentClass}__text`} >{direction}</p> */}
              {use && (
                <TitleList
                  parentClass="c-product-details-tab"
                  title={'Suggested Use'}
                >
                  {use}
                </TitleList>
              )}
              {direction && (
                <TitleList
                  parentClass="c-product-details-tab"
                  title={'Direction'}
                >
                  {direction}
                </TitleList>
              )}
              {storage && (
                <TitleList
                  parentClass="c-product-details-tab"
                  title={'Storage'}
                >
                  {storage}
                </TitleList>
              )}
              {warning && (
                <TitleList
                  parentClass="c-product-details-tab"
                  title={'Warning'}
                >
                  {warning}
                </TitleList>
              )}
              {/* {indication && <TitleList parentClass="c-product-details-tab" title={"Indication"} >
                                {indication}
                            </TitleList>} */}
              {warranty && (
                <TitleList
                  parentClass="c-product-details-tab"
                  title={'Warranty'}
                >
                  {warranty}
                </TitleList>
              )}
            </div>
          </TabContainer>
        </TabPane>
        <TabPane tabId="2">
          <TabContainer isActive={currentTab === '2'}>
            <div className="col-12 c-product-details-tab__contain-col">
              {/* <Heading parentClass={componentClass} h="4" subHeading={true} >Suggested Use</Heading>
                            <p className={`${componentClass}__text`} >{direction}</p> */}
              {totalReview > 0 ? (
                <>
                  {/* <ProductRating reviews={reviews} />
                  <section className="rating">
                    {reviews &&
                      reviews.map((el, key) => (
                        <ReviewItem key={key} {...el} />
                      ))}
                  </section> */}
                  <div className="row w-100">
                    <div className="col-lg-8 col-md-9 col-xs-12 w-100">
                      {reviews &&
                        reviews.map((el, key) => (
                          <TitleList
                            key={key}
                            title={
                              el.usermetaid
                                ? el.usermetaid.firstname +
                                  ' ' +
                                  el.usermetaid.lastname
                                : ''
                            }
                          >
                            {el.title}
                            {console.log('rattt', el)}
                          </TitleList>
                        ))}
                    </div>
                    <div className="col-lg-4 col-md-3 col-xs-12 col-sm-12  pt-5 rev ">
                      <Rate
                        style={{ color: '#000' }}
                        className="c-product-details-tab__stars"
                        disabled
                        value={avgReview}
                        allowHalf={true}
                      />
                      <p
                        className="c-product-details-tab__review-para"
                        style={{ fontSize: '19px' }}
                      >
                        {totalReview} reviews({avgReview})
                      </p>
                      {/* <h1 className="c-product-details-tab__review-heading">
                        {avgReview}
                      </h1> */}
                    </div>
                  </div>
                </>
              ) : (
                <div className="row pt-5">
                  <div className="col-md-10 offset-md-1 text-center">
                    <Heading
                      parentClass={componentClass}
                      h="4"
                      subHeading={true}
                    >
                      We don't have any reviews for this product.
                    </Heading>
                  </div>
                </div>
              )}
            </div>
          </TabContainer>
        </TabPane>
        <TabPane tabId="3">
          <TabContainer isActive={currentTab === '3'}>
            <div className="col-12 c-product-details-tab__contain-col text-center">
              <div className="row ">
                {productFaq && productFaq.length > 0 ? (
                  <div className="col-12 col-md-10 text-left pt-5">
                    {productFaq.map((el, key) => (
                      <TitleList key={key} versions={['faq']} title={el.title}>
                        {el.description}
                      </TitleList>
                    ))}
                  </div>
                ) : (
                  <div className="col-md-10 offset-md-1 text-center pt-5">
                    <Heading
                      parentClass={componentClass}
                      h="4"
                      subHeading={true}
                    >
                      We don't have any faq's for this product.
                    </Heading>
                  </div>
                )}
              </div>
            </div>
          </TabContainer>
        </TabPane>
        <TabPane tabId="4">
          <TabContainer isActive={currentTab === '4'}>
            <Modal
              visible={open}
              onCancel={() => {
                //  console.log("clicked")
                setOpen(false);
                setCurrentTab('0');
              }}
              style={{ width: '500px', height: '500px' }}
            >
              {product.labsheet && (
                <iframe
                  src={`${projectSettings.baseUrl}/${product.labsheet.replace(
                    'public/',
                    ''
                  )}`}
                  style={{ objectFit: 'contain' }}
                  width="100%"
                  height="100%"
                />
              )}
            </Modal>
          </TabContainer>
        </TabPane>
      </TabContent>
    </div>
  );
};

const TabContainer = ({ children, isActive }) => {
  return (
    <div
      className={classNames('c-product-details-tab__contain animated', {
        fadeIn: isActive,
      })}
    >
      <div className="row c-product-details-tab__contain-row">{children}</div>
    </div>
  );
};

const ReviewItem = ({
  title,
  content,
  createdOn,
  userName,
  overall,
  ...props
}) => {
  console.log('rating', props, userName, props.usermetaid);
  return (
    <div className="container rating__wrapper">
      <div className="rating__star">
        {props.usermetaid && (
          <h5 className="rating__star--name">
            {`${props.usermetaid.firstname} ${props.usermetaid.lastname}` ||
              'Steve'}
          </h5>
        )}
        {/* overall */}
        {/* <Rate
          style={{ color: "#000" }}
          className="rating__stars"
          disabled
          value={overall}
          allowHalf={true}
        /> */}
      </div>
      <div className="rating__text">
        <h5 className="rating__text--name">{title}</h5>
        <p className="rating__text--msg">{content}</p>
      </div>
      <div className="rating__date">
        <p className="rating__date--msg">
          {moment(createdOn).format('dd, MMMM, YYYY')}
        </p>
        {/* <p className="rating__date--msg">12 september 2017</p> */}
      </div>
    </div>
  );
};

ProductDetailsTab.defaultProps = {
  versions: [],
  product: {},
};

export default ProductDetailsTab;
