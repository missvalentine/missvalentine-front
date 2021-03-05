import dynamic from 'next/dynamic'
import React from "react";
import { connect } from "react-redux";
const BlogNav = dynamic(() => import("../BlogNav/BlogNav"), {
  ssr: false,
});
const ArticleCard = dynamic(() => import("../ArticleCard/ArticleCard"), {
  ssr: false,
});
const ArticleCard2 = dynamic(() => import("../ArticleCard/ArticleCard2"), {
  ssr: false,
});


const MainSection = (props) => {
//  console.log(props.article);

  return (
    <>
      <main role="main" className="main-section">
        <div className="main-section-heading-primary">EXPLORE ARTICLES</div>
        <BlogNav navClickHandler={props.navClickHandler} />

        {props.article.map((elem, index) => {
          if (index == 0) {
            return (
              <ArticleCard2
                key={index}
                data={elem}
                onClick={(e) => props.articleClickHandler(index)}
                navClickHandler={props.navClickHandler}
              />
            );
          }
          return (
            <ArticleCard
              key={index}
              data={elem}
              onClick={(e) => props.articleClickHandler(index)}
              navClickHandler={props.navClickHandler}
            />
          );
        })}
      </main>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    article: state.blog.article,
  };
};
export default connect(mapStateToProps)(MainSection);
