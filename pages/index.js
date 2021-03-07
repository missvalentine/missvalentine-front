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
import { getProducts, homeData, getCategories } from '../redux/actions';
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
import Banner from '../components/Banner';
import HomeMap from '../components/HomeMap';
import OurDirectors from '../components/OurDirectors';
import slide1 from '../assets/images/homeSlides/slider1.webp';
import slide2 from '../assets/images/homeSlides/slider2.webp';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: 0,
      allProducts: props.products.products || [],
      products: props.products.products || [],
      combos: [],
      categories: props.products.categories,
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

  componentDidMount() {
    if (localStorage.getItem('homeData')) {
      this.setState({ homeData: JSON.parse(localStorage.getItem('homeData')) });
    }
    this.props.getProducts();
    this.props.getCategories();
    homeData().then((data) => {
      let stringData = JSON.stringify(data);
      if (localStorage.getItem('homeData') != stringData) {
        this.setState({
          homeData: data,
          loading: false,
        });
      } else {
        localStorage.setItem('homeData', stringData);
      }
    });
    // getAllCombos().then((res) => {
    //   if (res.data && res.data.combos) {
    //     this.setState({
    //       combos: res.data.combos,
    //     });
    //   }
    // });
  }

  toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  render() {
    const { activeCategory, products, isLrSection } = this.state;

    let keywords = categoryList.map((e) => {
      return Object.values(e);
    });

    const homedata = {
      // logo: { images: logoImages },
      banner: [
        {
          images: { src: slide1 },
          hide: false,
          title: '',
          content: '',
          btnText: 'View Products',
        },
        {
          images: { src: slide2 },
          hide: false,
          title: '',
          content: '',
          btnText: 'Explore',
        },
      ],
      // categorySlider: {
      //   title: categoryTitle,
      //   btnText: categoryBtnText,
      //   hide: categorySliderHide,
      // },
      // secondSection: {
      //   title: secondTitle,
      //   bigTitle: secondBigTitle,
      //   hide: secondSectionHide,
      // },
      // thirdSection: {
      //   bigTitle: thirdBirTitle,
      //   title: thirdTitle,
      //   content: thirdContent,
      //   btnText: thirdBtnText,
      //   hide: thirdSectionHide,
      //   images: thirdSectionImage,
      // },
      // fourthSection: {
      //   content: fourthContent,
      //   title: fourthTitle,
      //   hide: fourthSectionHide,
      // },
    };
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
            {homedata.banner.map((el, i) => {
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
        {console.log('zest', categoryList, this.state.categories, products)}

        {!categorySliderHide && (
          <Fade>
            <CategoryProducts
              products={products}
              heading={parser(categoryTitle)}
              btnText={parser(categoryBtnText)}
            />
          </Fade>
        )}

        {!secondSectionHide && (
          <Link href="/blog">
            <div className="blog-link-banner" style={{ cursor: 'pointer' }}>
              <p className="top-text">{'EXPIRENCE THE WIDE RANGE '}</p>
              <p className="bottom-text">{'explore now'}</p>
            </div>
          </Link>
        )}
        {!thirdSectionHide && (
          <Fade>
            <LRSection
              heading={'MISS VALENTINE'}
              subHeading={'COMFORT THAT SUITS YOU'}
              linkText={'Read more'}
              onLinkClick={() => {
                this.setState((prevState) => ({
                  isLrSection: !prevState.isLrSection,
                }));
              }}
              // Link="/"
              image={'https://wallpapercave.com/wp/wp4762830.jpg'}
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
            <p class="heading">BEST IN PRODUCT</p>
            <div class="honest-container">
              <div class="img-wrapper">
                <img
                  src="/images/organic.svg"
                  class="honest-svg"
                  alt="organic"
                />
                <p class="img-head-text">COMFORT GROWN</p>
                <p class="img-sub-text">
                  The extracts used in our products are obtained from
                  organically grown hemp devoid of any harmful chemical inputs.
                </p>
              </div>
              <div class="img-wrapper">
                <img
                  src="/images/thc.svg"
                  class="honest-svg"
                  alt="honest-thc"
                />
                <p class="img-head-text">SOFT FABRIC</p>
                <p class="img-sub-text">
                  We take great care to ensure that the products reaching you
                  are completely free of any THC. Only the goodness of hemp for
                  you.
                </p>
              </div>
              <div class="img-wrapper">
                <img src="/images/vegan.svg" class="honest-svg" alt="vegan" />
                <p class="img-head-text">SIZE THAT SUITS YOU</p>
                <p class="img-sub-text">
                  We have a wide range of vegan products infused with the
                  goodness of CBD, curated keeping you in mind because we care.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="map-section-wrapper">
          <HomeMap />
        </section>

        <section className="directors-section-wrapper">
          <OurDirectors />
        </section>
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

export default connect((state) => state, { getProducts, getCategories })(Home);
