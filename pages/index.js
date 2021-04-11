import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../components/Layouts/Layout';
const LRSection = dynamic(() => import('../components/LRSection'), {
  ssr: false,
});
const Button = dynamic(() => import('../components/form-components/Button'));

const CategoryProducts = dynamic(
  () => import('../components/CategoryProducts'),
  {
    ssr: false,
  }
);
import categoryList from '../constants/categoryList';
import { getProducts, getCategories } from '../redux/actions';
import { connect } from 'react-redux';
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
import GetinTouch from '../components/GetinTouch';
import modelImg from '../assets/images/home/nodel3.jpeg';

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
    this.props.getProducts();
    this.props.getCategories();
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
          btnText: 'Explore Range',

          link: '/category',
        },
        {
          images: { src: slide2 },
          hide: false,
          title: '',
          content: '',
          btnText: 'View Products',
          link: '/products',
        },
      ],
    };

    let description = ['bannerContent', 'thirdContent'];

    return (
      <Layout
        title="Home"
        headerTheme="black"
        homeLogo={false}
        // footerLogo={logoImages[2].src}
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
                    link={el.link}
                    theme={'dark'}
                  >
                    {parser(el.btnText)}
                  </Button>
                </Banner>
              );
            })}
          </Flickity>
        </div>
        {/* categorySliderHide */}

        <Fade>
          <CategoryProducts
            products={products}
            heading={parser('categoryTitle')}
            btnText={parser('categoryBtnText')}
          />
        </Fade>

        {/* secondSectionHide */}

        <Fade>
          <Link href="/products">
            <div className="blog-link-banner" style={{ cursor: 'pointer' }}>
              <p className="top-text">{'EXPIRENCE THE WIDE RANGE '}</p>
              <p className="bottom-text">{'explore now'}</p>
            </div>
          </Link>
        </Fade>

        {/* //thirdSectionHide */}

        <Fade>
          <LRSection
            heading={'MissValentine'}
            subHeading={'COMFORT THAT SUITS YOU'}
            linkText={'Read more'}
            onLinkClick={() => {
              this.setState((prevState) => ({
                isLrSection: !prevState.isLrSection,
              }));
            }}
            // Link="/"
            image={modelImg}
          >
            <div className="c-less-more">
              <div className="c-less-more__less">
                {parser(
                  'Premium lingerie brand that provides comfortable fit, support with impeccable quality'
                )}
              </div>
              <Collapse isOpen={isLrSection}>
                <div className="c-less-more__whole">
                  <div className="c-less-more__whole-inner">
                    {parser(
                      'Any outfit worn by a women looses its charm if you are not wearing a perfect Bra underneath. A bra is not only a piece of inner wear but is also responsible for how confidently you carry yourself in public. The right kind of bra not only is good for the health of your breasts but also affects the way your dresses look on you.'
                    )}
                  </div>
                </div>
              </Collapse>
            </div>
          </LRSection>
        </Fade>

        {/* fourthSectionHide */}

        <Fade>
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
        </Fade>

        <Fade>
          <section className="map-section-wrapper">
            <HomeMap />
          </section>
        </Fade>
        <Fade>
          <section className="touch-section-wrapper">
            <GetinTouch />
          </section>
        </Fade>
        <Fade>
          <section className="directors-section-wrapper">
            <OurDirectors />
          </section>
        </Fade>
        <Fade>
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
        </Fade>
      </Layout>
    );
  }
}

export default connect((state) => state, { getProducts, getCategories })(Home);
