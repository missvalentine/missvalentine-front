import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

function TopBanner({ data }) {
  const { title, subTitle, content } = data;
  return (
    <div className="consult-banner--upper">
      <div className="consult-banner--upper--txt">
        <p className="consult-banner--upper--txt--heading">{title}</p>
        <p className="consult-banner--upper--txt--subHeading">{subTitle}</p>
        <p className="consult-banner--upper--txt--para">{content}</p>
      </div>
      <div className="consult-banner--upper--img">
        <img src="/images/stress.png" alt="" />
        <img src="/images/pain.png" alt="" />
        <img src="/images/anxiety.png" alt="" />
        <img src="/images/insomnia.png" alt="" />
      </div>
    </div>
  );
}

export default TopBanner;
