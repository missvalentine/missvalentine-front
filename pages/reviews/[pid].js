import dynamic from "next/dynamic";
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
import { connect } from "react-redux";
import apiList from "../../services/apis/apiList";
import moment from "moment";
const ProductRating = dynamic(() => import("../../components/ProductRating"), {
  ssr: false,
});
import fetch from "isomorphic-unfetch";
import BlankStar from "../../components/review-stars/BlankStar";
import RenderStars from "../../components/review-stars/RenderStars";
import Button from "../../components/form-components/Button";
import ReviewPageCard from "../../components/ReviewPageCard";
import { projectName } from "../../constants/projectSettings";
import { LazyLoadImage } from "react-lazy-load-image-component";

class Home extends React.Component {
  static async getInitialProps({ query }) {
    const res = await fetch(apiList.getReviews + query.pid);
    const reviews = await res.json();
    return {
      reviews: reviews.reviews,
    };
  }
  state = {
    firstRender: true,
    current: 0,
  };
  render() {
    const { reviews } = this.props;
    console.log(reviews)
    const getAvg = (reviews) => {
      const newArr = reviews.map((el) => el.overall);
      const sum = newArr.reduce((a, b) => a + b, 0);
      return (sum / reviews.length).toFixed(1);
    };
    const count = (reviews) => {
      if (reviews.length == 0) {
        return "No Reviews yet";
      } else if (reviews.length == 1) {
        return reviews.length + " review";
      } else if (reviews.length > 1) {
        return reviews.length + " reviews";
      }
    };
    var reviewFilterObject = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    reviews.map((item) => {
      if (item.overall in reviewFilterObject) {
        reviewFilterObject[item.overall] += 1;
      } else {
        reviewFilterObject[item.overall] = 1;
      }
    });
    const filter = (stars) => {
      this.setState({ firstRender: false, current: stars });
      setTimeout(() => {
        console.log(this.state);
      }, 1);
    };

    return (
      <Layout title={projectName} headerTheme="black" fixed={true}>
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
                <RenderStars rating={getAvg(reviews)} />
              </div>
              <div className="review-count">
                {count(reviews)} ({getAvg(reviews)})
              </div>
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
                  <div onClick={() => filter(5)}>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>({reviewFilterObject[5]})</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-4">
                  <div onClick={() => filter(4)}>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>({reviewFilterObject[4]})</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-3">
                  <div onClick={() => filter(3)}>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>({reviewFilterObject[3]})</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-2">
                  <div onClick={() => filter(2)}>
                    <BlankStar fill="black" />
                    <BlankStar fill="black" />
                  </div>
                  <h2>({reviewFilterObject[2]})</h2>
                </div>
                <div className="reviews-filter-container reviews-filter-1">
                  <div onClick={() => filter(1)}>
                    <BlankStar fill="black" />
                  </div>
                  <h2>({reviewFilterObject[1]})</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="c-reviews-page__reviews-section">
            {reviews.map((item) => {
              if (this.state.firstRender) {
                return <ReviewPageCard reviews={item} />;
              } else {
                if (item.overall == this.state.current) {
                  return <ReviewPageCard reviews={item} />;
                }
              }
            })}
          </div>
          <div className="c-reviews-page__pagination-container"></div>
        </div>
        {/* <div className="reviews">
          <div className="reviews__heading">
            <div className="reviews__wrap">
              <h1 className="reviews__wrap--text">
                <span className="reviews__wrap--xl">{projectName}</span> reviews
              </h1>
            </div>
            <div className="reviews__icon">
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
        <ProductRating reviews={reviews} />

        <section className="rating">
          {/* <div className="container rating__wrapper">
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
          </div> */}
        {/* {reviews.map((review, key) => (
            <ReviewItem review={review} key={key} />
          ))} */}
        {/* </section> */}
      </Layout>
    );
  }
}
// const ReviewItem = ({ review }) => (
//   <div className="container rating__wrapper">
//     <div className="rating__star">
//       <h5 className="rating__star--name">
//         {review.userid ? review.userid.email.split("@")[0] : "Guest"}
//       </h5>
//     </div>
//     <div className="rating__text">
//       <h5 className="rating__text--name">{review.title}</h5>
//       <p className="rating__text--msg">{review.content}</p>
//     </div>
//     <div className="rating__date">
//       <p className="rating__date--msg">
//         {moment(review.createdOn).format("DD MMMM YYYY")}
//       </p>
//     </div>
//   </div>
// );
export default connect(
  (state) => ({
    state,
  }),
  {}
)(Home);
