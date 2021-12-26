import React, { Suspense } from 'react';

import Layout from '../components/Layouts/Layout';
import LRSection from '../components/LRSection';
import Button from '../components/form-components/Button';

import CategoryProducts from '../components/CategoryProducts';
import { projectName } from '../constants/projectSettings';

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

class Home extends React.Component
{
  constructor(props)
  {
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
  static getDerivedStateFromProps(nextProps, prevState)
  {
    if (nextProps.products.products !== prevState.allProducts)
    {
      return {
        allProducts: nextProps.products.products,
      };
    } else return null;
  }

  componentDidMount()
  {
    this.props.getProducts();
    this.props.getCategories();
  }

  toTop = () =>
  {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  render()
  {
    const { activeCategory, products, isLrSection } = this.state;
    const kString = 'Buy ladies bras online from a range of sports, push up, padded & more at MissValentine. Find women bras in different colors, fabrics, patterns at best price.'.split(
      ' '
    );
    let keywords = [];
    keywords.push(kString);
    keywords = categoryList.map((e) =>
    {
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

    let description = [projectName, ...kString];

    return (
      <Suspense fallback={'Loading...'} >

        <Layout
          title={`Home | ${projectName}`}
          headerTheme="black"
          homeLogo={false}
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
              {homedata.banner.map((el, i) =>
              {
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
              linkText={!this.state.isLrSection ? 'Read more' : 'Read less'}
              onLinkClick={() =>
              {
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
                    The fabric used in our products are given the upmost priority.
                    MissValentine range is pleasant to touch, and not rough or
                    hard
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
                    Velvet is a soft, luxurious fabric that is characterized by a
                    dense pile of evenly cut fibers that have a smooth nap. Velvet
                    has a beautiful drape and a unique soft and shiny appearance
                    due to the characteristics of the short pile fibers.
                  </p>
                </div>
                <div class="img-wrapper">
                  <img src="/images/vegan.svg" class="honest-svg" alt="vegan" />
                  <p class="img-head-text">SIZE THAT SUITS YOU</p>
                  <p class="img-sub-text">
                    We have a wide range of products and sizes to choose from. The
                    size manual is given so you wear your perfect fit.
                  </p>
                </div>
              </div>
            </section>
          </Fade>

          <section className="map-section-wrapper">
            <HomeMap />
          </section>

          <section className="touch-section-wrapper">
            <GetinTouch />
          </section>

          <section className="directors-section-wrapper">
            <OurDirectors />
          </section>

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
      </Suspense>

    );
  }
}

export default connect((state) => state, { getProducts, getCategories })(Home);
