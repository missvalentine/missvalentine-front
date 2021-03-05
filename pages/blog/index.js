import dynamic from 'next/dynamic'
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "underscore";
import InfiniteScroll from "react-infinite-scroller";
const MainSection = dynamic(() => import("../../components/blog/MainSection/MainSection"), {
  ssr: false,
});
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
const Article = dynamic(() => import("../../components/blog/Article"), {
  ssr: false,
});
import { getBanner } from "../../services/apis/blog";
import * as actionCreators from "../../redux/actions/blog";
import parser from "html-react-parser";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: "black" }} spin />
);
let prev = 0;
let more = true;
class BlogPage extends React.Component {
  state = {
    toggle: false,
    loading: true,
    title: "",
    subTitle: "",
    content: "",
    imageUrl: ""

  };

  articleClickHandler = (index) => {
    this.props.getArticle(index);
    this.setState({
      toggle: true,
    });
    window.scroll(0,100);
  };
  navClickHandler = (tag) => {
    this.props.get(0, tag);
    this.setState({
      toggle: false,
    });
  };
  backHandler = () => {
    this.setState({ toggle: false });
  };

  loadItems = (page) => {
    this.props
      .get(page, this.props.tag)
      .then(() => {
        if (prev !== this.props.article.length) {
          prev = this.props.article.length;
          more = true;
        } else {
          more = false;
        }
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    if (this.props.isPersist) {
      this.props.get(0, this.props.tag);
    }
    getBanner("blog").then(res => {
      console.log(res);
      this.setState({
        title: res.data.data.bannerTitle,
        subTitle: res.data.data.subTitle,
        content: res.data.data.content,
        imageUrl: res.data.data.image.src,
        loading: false
      });
    });
    console.log(this.props.article);
  };
  hasmoreHandler = () => {
    console.log("hasmore");
  };

  render() {
    const { title, subTitle, imageUrl, content, loading } = this.state;


    return (
      <Layout
        title="Home"
        headerTheme="black"
        homeLogo={false}
        pageClass={"c-home"}
      >
        {this.state.toggle ? (
          <Article
            data={this.props.current}
            navClickHandler={this.navClickHandler}
            backHandler={this.backHandler}
          />
        ) : (
            <>

              <div className="main-header">
                {/* <div className="main-header-heading">hims</div> */}
                <div className="main-header-title">
                  <LazyLoadImage src={imageUrl.replace("public",`${imageUrl}`)} alt="blog-banner" className="img-fluid" />
                  <div className="main-header-title-primary">{parser(title)}</div>
                  <div className="main-header-title-primary-2">{parser(subTitle)}</div>
                  <div className="main-header-title-secondary">{parser(content)}</div>
                </div>
              </div>
              <InfiniteScroll
                pageStart={0}
                loadMore={this.loadItems.bind(this)}
                hasMore={more}
                loader={antIcon}
                threshold={500}
              >
                <MainSection
                  articleClickHandler={this.articleClickHandler}
                  navClickHandler={this.navClickHandler}
                />
              </InfiniteScroll>
            </>
          )}
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.blog.article,
    current: state.blog.current,
    tag: state.blog.currentTag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    get: (pageNo, tag) => dispatch(actionCreators.get(pageNo, tag)),
    getArticle: (index) => dispatch(actionCreators.getArticle(index)),
    back: () => ({ type: CLEAR }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
