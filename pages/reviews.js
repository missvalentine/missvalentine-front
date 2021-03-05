import dynamic from "next/dynamic";
import React, { useState } from "react";
const Layout = dynamic(() => import("../components/Layouts/Layout"), {
  ssr: false,
});
import { getProducts } from "../redux/actions";
import { connect } from "react-redux";
import { getAllCombos } from "../services/api";
const ProductRating = dynamic(() => import("../components/ProductRating"), {
  ssr: false,
});

import { projectName } from "../constants/projectSettings";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlankStar from "../components/review-stars/BlankStar";
// import BlankStar from "../components/review-stars/BlankStar";
import Button from "../components/form-components/Button";
import ReviewPageCard from "../components/ReviewPageCard";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: "Featured",
      allProducts: props.products.products || [],
      products: props.products.featured || [],
      combos: [],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.products.products !== prevState.allProducts) {
      console.log({
        allProducts: nextProps.products.products,
      });
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
    this.props.getProducts();
    getAllCombos().then((res) => {
      console.log({
        res,
      });
      if (res.data && res.data.combos) {
        this.setState({
          combos: res.data.combos,
        });
      }
    });
  }
  changeCategory = (activeCategory) => {
    const { products } = this.props;
    console.log({
      activeCategory,
      products,
    });
    if (activeCategory.title === "Featured") {
      this.setState({
        products: products.featured,
        activeCategory: activeCategory.title,
      });
    } else if (activeCategory.title === "All") {
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
  render() {
    const { activeCategory, products, combos } = this.state;
    // const {
    //   products
    // } = this.props
    console.log(this.state);
    return (
      <Layout title={projectName} fixed={true}>
        <div className="c-reviews-page">
          <div className="c-reviews-page__banner">
            <img
              src="https://cdn.zeplin.io/5f51f07e47716786ed5162f8/assets/807624A0-41F6-46A3-B10E-A3BBED9D8DCE.png"
              alt=""
            />
            <img
              src="https://cdn.zeplin.io/5f51f07e47716786ed5162f8/assets/807624A0-41F6-46A3-B10E-A3BBED9D8DCE.png"
              alt=""
            />
            <img
              src="https://cdn.zeplin.io/5f51f07e47716786ed5162f8/assets/807624A0-41F6-46A3-B10E-A3BBED9D8DCE.png"
              alt=""
            />
          </div>
          <h2 className="c-reviews-page__heading">reviews</h2>
          <div className="c-reviews-page__main-landing">
            <div className="c-reviews-page__main-landing--leftSpan">
              <h2 className="c-reviews-page__main-landing--leftSpan-heading">
                What our clients think about us
              </h2>
              <div className="review-stars">
                <BlankStar fill="white" />
                <BlankStar />
                <BlankStar />
                <BlankStar fill="black" />
                <BlankStar />
              </div>
              <div className="review-count">12 reviews (9.7)</div>
            </div>
            <div className="c-reviews-page__main-landing--rightSpan">
              <Button
                parentClass="c-reviews-page"
                type="link"
                link="/"
                theme={"dark"}
              >
                Write a review
              </Button>
              <div className="reviews-filter">
                <div className="reviews-filter-container reviews-filter-5">
                  <div>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>(120)</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-4">
                  <div>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>(80)</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-3">
                  <div>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>(20)</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-2">
                  <div>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>(12)</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-1">
                  <div>
                    <BlankStar fill="black" />
                  </div>
                  <h2>(2)</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="c-reviews-page__reviews-section">
            <ReviewPageCard />
            <ReviewPageCard />
            <ReviewPageCard />
            <ReviewPageCard />
            <ReviewPageCard />
          </div>
          <div className="c-reviews-page__pagination-container"></div>
        </div>

        {/* 			
        <div className="reviews">
          <div className="reviews__heading">
            <div className="reviews__wrap">
              <h1 className="reviews__wrap--text">
                <span className="reviews__wrap--xl">{projectName}</span> reviews
              </h1>
            </div>
            <div clasName="reviews__icon">
              <LazyLoadImage
                className="img-fluid"
                src="/images/logo-new.png"
                alt="logo"
              />
            </div>
          </div>
          <div className="reviews__img">
            <LazyLoadImage
              className="img-fluid"
              src="/images/reviews-bnr.png"
              alt="reviews"
            />
          </div>
        </div>

        <section className="write">
          <div className="write__reviews">
            <h3 className="write__reviews--text">
              What our clients think about <br />
              {projectName} and how they rate us
            </h3>
            <a className="write__btn c-btn c-btn--outline " href="#">
              Write a reviews
            </a>
          </div>
        </section>
        <ProductRating />

        <section className="rating">
          <div className="container rating__wrapper">
            <div className="rating__star">
              <h5 className="rating__star--name">Name</h5>
            </div>
            <div className="rating__text">
              <h5 className="rating__text--name">Best product ever!!!</h5>
              <p className="rating__text--msg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud.
              </p>
            </div>
            <div className="rating__date">
              <p className="rating__date--msg">12 september 2017</p>
            </div>
          </div>
        </section> */}
      </Layout>
    );
  }
}

export default connect((state) => state, { getProducts })(Home);
