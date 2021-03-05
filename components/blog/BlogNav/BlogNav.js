import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getBlogs } from "../../../services/apis/blog";

const navs = [
  "All",
  "Health",
  "Diet",
  "Stress",
  "Daily Use",
  "Well-Being",
  "Pets",
];
const BlogNav = (props) => {
  const [tags, setTags] = useState([]);
  let tagsSet = new Set();
  useEffect(() => {
    getBlogs(0, "All").then((res) => {
      let blogs = res.data.data;
    //  console.log(blogs);
      blogs.map((article) => {
        article.tags.forEach((tag) => {
          if (tag !== "") {
            tagsSet.add(tag);
          }
        });
      });
    //  console.log(tagsSet);
      setTags(["All", ...tagsSet]);
    //  console.log(tags);
    });
  }, []);
  // console.log(blogs);
  return (
    <>
      <section className="blognav">
        <div className="blognav-wrapper">
          {tags.map((elem, index) => {
            return (
              <div
                key={index}
                onClick={() => props.navClickHandler(elem)}
                className="blognav-wrapper-items"
              >
                <p>{elem}</p>
              </div>
            );
          })}
          {/* <div className="blognav-wrapper-items">All</div>
          <div className="blognav-wrapper-items">Groom</div>
          <div className="blognav-wrapper-items">Lifestyle</div>
          <div className="blognav-wrapper-items">Skin</div>
          <div className="blognav-wrapper-items">Hair</div>
          <div className="blognav-wrapper-items">Science</div>
          <div className="blognav-wrapper-items">Top Posts</div>
          <div className="blognav-wrapper-items">Well-Being</div> */}
        </div>
        {/* <div className="divider-down"></div> */}
      </section>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    article: state.blog.article,
  };
};
export default connect(mapStateToProps)(BlogNav);
