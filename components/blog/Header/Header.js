import React, { useState } from "react";
import { blog } from "../../../site-content";
import { useEffect } from "react";
import { getBanner } from "../../../services/apis/blog";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Header = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const { data } = await getBanner("blog");
    setTitle(data.data.bannerTitle);
    setSubTitle(data.data.subTitle);
    setContent(data.data.content);
    setImageUrl(data.data.image.src);
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className="main-header">
        {/* <div className="main-header-heading">hims</div> */}
        <div className="main-header-title">
          <LazyLoadImage src={imageUrl} alt="blog-banner" className="img-fluid" />
          <div className="main-header-title-primary">{title}</div>
          <div className="main-header-title-primary-2">{subTitle}</div>
          {blog.content.map((content) => (
            <div className="main-header-title-secondary">{content}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
