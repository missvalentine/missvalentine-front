import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layout';
const LRSection = dynamic(() => import('../components/LRSection'), {
  ssr: false,
});
const CategoryProducts = dynamic(
  () => import('../components/CategoryProducts'),
  {
    ssr: false,
  }
);
import categoryList from '../constants/categoryList';
import { getProducts, homeData } from '../redux/actions';
import { connect } from 'react-redux';
const Button = dynamic(() => import('../components/form-components/Button'), {
  ssr: false,
});
import { getAllCombos } from '../services/api';
import Fade from 'react-reveal/Fade';
import { Collapse } from 'reactstrap';
import parser from 'html-react-parser';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';
import Flickity from 'react-flickity-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Banner from "../components/Banner"
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 'Featured',
      allProducts: props.products.products || [],
      products: props.products.featured || [],
      combos: [],
      isLrSection: false,
      isWillness: false,
      show: false,
      homeData: {
        logo: {
          images: [
            {
              name: '',
              src: '',
            },
            {
              name: '',
              src: '',
            },
            {
              name: '',
              src: '',
            },
          ],
        },
        banner: [
          {
            title: '',
            content: '',
            btnText: '',
            hide: false,
            images: {
              name: '',
              src: '',
            },
          },
        ],
        categorySlider: {
          title: '',
          btnText: '',
          hide: false,
          images: [
            {
              name: '',
              src: '',
            },
          ],
        },
        secondSection: {
          title: '',
          bigTitle: '',
          hide: false,
          images: [
            {
              name: '',
              src: '',
            },
          ],
        },
        thirdSection: {
          bigTitle: '',
          title: '',
          content: '',
          btnText: '',
          hide: false,
          images: [
            {
              name: '',
              src: '',
            },
          ],
        },
        fourthSection: {
          title: '',
          content: '',
          hide: false,
          images: [
            {
              name: '',
              src: '',
            },
          ],
        },
      },
      loading: true,
    };
   
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products.products !== prevState.allProducts) {
      return {
        allProducts: nextProps.products.products,
      };
    } else return null;
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.products.products !== this.props.products.products) {
      this.changeCategory({ title: this.state.activeCategory });
    }
  }

  componentDidMount() {
    if(localStorage.getItem("homeData")){
      this.setState({homeData:JSON.parse(localStorage.getItem("homeData"))})
    }
    this.props.getProducts();
    homeData().then((data) => {
        let stringData = JSON.stringify(data);
        if(localStorage.getItem("homeData")!= stringData){
          this.setState({
            homeData: data,
            loading: false,
          });
        }else{
          localStorage.setItem('homeData',stringData);
        }
    });
    getAllCombos().then((res) => {
      if (res.data && res.data.combos) {
        this.setState({
          combos: res.data.combos,
        });
      }
    });
  }
  changeCategory = (activeCategory) => {
    const { products } = this.props;
    if (activeCategory.title === 'Featured') {
      this.setState({
        products: products.featured,
        activeCategory: activeCategory.title,
      });
    } else if (activeCategory.title === 'All') {
      this.setState({
        products: products.products,
        activeCategory: activeCategory.title,
      });
    } else {
      const activeCategoryArr =
        products.categories.find(
          (el) => el.category.categorytitle === activeCategory.title
        ) || {};
      this.setState({
        products: activeCategoryArr.products,
        activeCategory: activeCategory.title,
      });
    }
  };
  toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  render() {

    const {
      activeCategory,
      products,
      isLrSection,
    } = this.state;
  
    let keywords = categoryList.map((e) => {
      return Object.values(e);
    });
  
    const {
      logo: { images: logoImages },
      banner: bannerContent,
      categorySlider: {
        title: categoryTitle,
        btnText: categoryBtnText,
        hide: categorySliderHide,
      },
      secondSection: {
        title: secondTitle,
        bigTitle: secondBigTitle,
        hide: secondSectionHide,
      },
      thirdSection: {
        bigTitle: thirdBirTitle,
        title: thirdTitle,
        content: thirdContent,
        btnText: thirdBtnText,
        hide: thirdSectionHide,
        images: thirdSectionImage,
      },
      fourthSection: {
        content: fourthContent,
        title: fourthTitle,
        hide: fourthSectionHide,
      },
    } = this.state.homeData;
    let description = [bannerContent, thirdContent];
    return (
      <Layout
        title="Home"
        headerTheme="black"
        homeLogo={false}
        footerLogo={logoImages[2].src}
        pageClass={'c-home'}
        description={description}
        keywords={keywords}
      >
        <div className="c-banner__list">
          <Flickity
            options={{
              initialIndex: 0,
              pageDots: true,
              contain: true,
              cellAlign: 'left',
              autoPlay: 3000, // default false
            }}
            disableImagesLoaded={true}
            reloadOnUpdate={true}
            className="c-banner__slider "
          >
            {bannerContent.map((el, i) => {
              return (
                <Banner
                  key={i}
                  image={el.images.src}
                  mobileImage={el.images.src}
                  versions={['black-heading']}
                  hide={el.hide}
                  heading={parser(el.title)}
                  content={parser(el.content)}
                >
                  <Button
                    parentClass="c-home"
                    type="link"
                    link="/shop"
                    theme={'dark'}
                  >
                    {parser(el.btnText)}
                  </Button>
                </Banner>
              );
            })}
          </Flickity>
        </div>
        {!categorySliderHide && products && products.length > 0 && (
          <Fade>
            <CategoryProducts
              // bg="light-2"
              categoryList={categoryList}
              activeCategory={activeCategory}
              onCategoryChange={this.changeCategory}
              products={products}
              heading={parser(categoryTitle)}
              btnText={parser(categoryBtnText)}
            />
          </Fade>
        )}
        {!secondSectionHide && (
          <Link href="/blog">
            <div className="blog-link-banner" style={{ cursor: 'pointer' }}>
              <p className="top-text">{parser(secondTitle)}</p>
              <p className="bottom-text">{parser(secondBigTitle)}</p>
            </div>
          </Link>
        )}
        {!thirdSectionHide && (
          <Fade>
            <LRSection
              heading={thirdBirTitle}
              subHeading={thirdTitle}
              linkText={thirdBtnText}
              onLinkClick={() => {
                this.setState((prevState) => ({
                  isLrSection: !prevState.isLrSection,
                }));
              }}
              // Link="/"
              image={thirdSectionImage[0].src}
            >
              <div className="c-less-more">
                <div className="c-less-more__less">{parser(thirdContent)}</div>
                <Collapse isOpen={isLrSection}>
                  <div className="c-less-more__whole">
                    <div className="c-less-more__whole-inner">
                      {parser(thirdContent)}
                    </div>
                  </div>
                </Collapse>
              </div>
            </LRSection>
          </Fade>
        )}
        {!fourthSectionHide && (
          <section className="honest-section-wrapper">
            {parser(fourthTitle)}
            {parser(fourthContent)}
          </section>
        )}
        <div
          className="consult-doc-banner-wrapper"
          style={{ padding: '4rem 0' }}
        >
          <button className="top-btn" onClick={() => this.toTop()}>
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
  }
}

export default connect((state) => state, { getProducts })(Home);
