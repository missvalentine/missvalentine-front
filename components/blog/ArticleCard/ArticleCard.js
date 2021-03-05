import React from "react";
import { imageUrl } from "../../../constants/projectSettings";
import { shareBtn } from "../../../assets/images/ionic-md-share.svg";
import Moment from "react-moment";
import { LazyLoadImage } from "react-lazy-load-image-component";
const ArticleCard = ({ data, ...props }) => {
  // console.log(data )
  const tags = data.tags.map((elem, index) => {
    if (index === data.tags.length - 1)
      return (
        <span
          className="articlecard-wrapper-info-small-link"
          onClick={() => props.navClickHandler(elem)}
          key={elem}
        >
          {" "}
          {elem}{" "}
        </span>
      );
    else {
      return (
        <span
          key={elem}
          className="articlecard-wrapper-info-small-link"
          onClick={() => props.navClickHandler(elem)}
        >
          {" "}
          {elem},{" "}
        </span>
      );
    }
  });
  return (
    <div>
      <article className="articlecard ">
        <div className="articlecard-wrapper ">
          <div className="articlecard-wrapper-image">
            <div
              // src={`${imageUrl}/sampleimg.png`}
              style={{ backgroundImage: `url(${imageUrl}${data.image})` }}
              alt="article"
              className="articlecard-wrapper-image--item"
              // style={{ width: "100%", height: "43rem", objectFit: "cover" }}
            ></div>
          </div>
          <div className="articlecard-wrapper-info">
            {/* <div className="articlecard-wrapper-info-small">{tags}</div>             */}
            <div className="articlecard-wrapper-info-small">
              <div className="articlecard-wrapper-info-small--left">
                <span className="articlecard-wrapper-info-small--left--first">
                  {tags} | PUBLISHED
                </span>
                <span className="articlecard-wrapper-info-small--left--second">
                  <Moment format="DD/MM/YYYY">{data.createdAt}</Moment>
                </span>
              </div>
              <div className="articlecard-wrapper-info-small--right">
                <LazyLoadImage
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ic_share_48px.svg/768px-Ic_share_48px.svg.png"
                  alt="share-button"
                />
              </div>
            </div>
            <div
              className="articlecard-wrapper-info-primary"
              onClick={props.onClick}
            >
              {data.heading}
            </div>
            <div className="articlecard-wrapper-info-secondary">
              {data.subHeading}
            </div>
            <div
              className="articlecard-wrapper-info-link"
              onClick={props.onClick}
            >
              Read more
              {/* <div className="underline-text"></div> */}
            </div>
          </div>
        </div>
        {/* <div className="divider-down mb-5"></div> */}
      </article>
    </div>
  );
};

export default ArticleCard;