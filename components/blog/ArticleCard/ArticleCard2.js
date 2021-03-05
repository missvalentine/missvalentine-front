import React from "react";
import { imageUrl } from "../../../constants/projectSettings";
import Moment from 'react-moment';
import { LazyLoadImage } from "react-lazy-load-image-component";

const articlecard2 = ({ data, ...props }) => {
  const tags = data.tags.map((elem, index) => {
    if (index === data.tags.length - 1)
      return (
        <span
          className="articlecard2-wrapper-info-small-link"
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
          className="articlecard2-wrapper-info-small-link"
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
      <article className="articlecard2">
        <div className="articlecard2-wrapper">
          <div className="articlecard2-wrapper-image">
            <div
              // src={`${imageUrl}/sampleimg.png`}
              //style={{ backgroundImage: `url(${imageUrl}/${data.image})` }}
              alt="article"
              className="articlecard2-wrapper-image--item"
              // style={{ width: "100%", height: "43rem", objectFit: "cover" }}
            ><LazyLoadImage className="articlecard2-wrapper-image--item" src={`${imageUrl}${data.image}`} /></div>
          
            </div>
            <div className="articlecard2-wrapper-image--item--wrapper">
                <div className="left-text">
                    <span className="left-text--first">{tags} | WRITTEN BY</span>
                    <span className="left-text--second">OUR EDITORIAL TEAM</span>
                </div>
                <div className="right-text">
                    <span className="right-text--first">PUBLISHED</span>
                    <span className="right-text--second">
                      <Moment format="DD/MM/YYYY">
                        {data.createdAt}
                      </Moment>
                    </span>
                </div>
            </div>
          <div className="articlecard2-wrapper-info">
            <div className="articlecard2-wrapper-info-small">
                {tags}
             
            </div>
            <div
              className="articlecard2-wrapper-info-primary"
              onClick={props.onClick}       
            >
             {data.heading}
             
            </div>
            <div className="articlecard2-wrapper-info-secondary">
              {data.subHeading}
             
            </div>
            <div
              className="articlecard2-wrapper-info-link"
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

export default articlecard2;
