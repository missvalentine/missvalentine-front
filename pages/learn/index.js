import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
const Layout = dynamic(() => import("../../components/Layouts/Layout"), {
  ssr: false,
});
const Heading = dynamic(() => import("../../components/Heading"), {
  ssr: false,
});
import "antd/dist/antd.css";
import "../../components/styles/app.scss";
import Link from "next/link";
import { getBanner } from "../../services/apis/blog";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import parser from "html-react-parser";
const antIcon = (
  <LoadingOutlined style={{ fontSize: 50, color: "black" }} spin />
);
const Banner = dynamic(() => import("../../components/Banner"), {
  ssr: false,
});
const index = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const { data } = await getBanner("learn");
    setTitle(data.data.bannerTitle);
    setSubTitle(data.data.subTitle);
    setImageUrl(data.data.image.src);
  };
  return (
    <Layout headerTheme="black">
      <Banner
        image={imageUrl}
        mobileImage={imageUrl}
        versions={["black-heading", "faq"]}
        heading={
          <h2 className="c-banner__heading c-banner__heading--faq">
            {/* <span className="rightspan">{banner.title}</span> */}
            <span className="c-banner__heading__leftSpan">
              {title} <br />
            </span>
            <span
              style={{ display: "block", color: "#75a58a", left: "0px" }}
              className="c-banner__heading__rightSpan"
            >
              {parser(subTitle)}
            </span>
          </h2>
        }
        // content={
        //   <p class="c-banner__text">
        //     <span>{banner.content}</span>
        //   </p>
        // }
      ></Banner>
      <Heading versions={["default", "faq"]}>
        FREQUENTLY ASKED QUESTIONS
      </Heading>
      <div className="mainDiv">
        <div className="div1">
          <h1
            style={{
              color: "#75a58a",
              fontSize: "30px",
              fontFamily: "futuraBT-heavy",
              // fontWeight: 900,
            }}
          >
            FAQs about CBD
          </h1>
          <ul>
            <li>
              <Link href="/learn/faq">
                <a className="links">What is CBD</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Endocannabinoid System</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">CBD Benefits</a>
              </Link>
            </li>
          </ul>
          <Link href="/learn/faq">
            <a className="modified">View all questions</a>
          </Link>
        </div>
        <div className="div2">
          <h1
            style={{
              color: "#75a58a",
              fontSize: "30px",
              fontFamily: "futuraBT-heavy",
              // fontWeight: 900,
            }}
          >
            FAQs about Products
          </h1>
          <ul>
            <li>
              <Link href="/learn/faq">
                <a className="links">Quality of Products</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Label Claims</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Suggested Use</a>
              </Link>
            </li>
          </ul>

          <Link href="/learn/faq">
            <a className="modified">View all questions</a>
          </Link>
        </div>
        <div className="div3">
          <h1
            style={{
              color: "#75a58a",
              fontSize: "30px",
              fontFamily: "futuraBT-heavy",
              // fontWeight: 900,
            }}
          >
            FAQs about Orders
          </h1>
          <ul>
            <li>
              <Link href="/learn/faq">
                <a className="links">Ordering Online</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">View Order Status</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Cancelling Orders</a>
              </Link>
            </li>
          </ul>

          <Link href="/learn/faq">
            <a className="modified">View all questions</a>
          </Link>
        </div>
        <div className="div4">
          <h1
            style={{
              color: "#75a58a",
              fontSize: "30px",
              fontFamily: "futuraBT-heavy",
              // fontWeight: 900,
            }}
          >
            FAQs about Shipment
          </h1>
          <ul>
            <li>
              <Link href="/learn/faq">
                <a className="links">Shipping Policy</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Shipping Options</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Shipping Fees</a>
              </Link>
            </li>
          </ul>

          <Link href="/learn/faq">
            <a className="modified">View all questions</a>
          </Link>
        </div>
        <div className="div5">
          <h1
            style={{
              color: "#75a58a",
              fontSize: "30px",
              fontFamily: "futuraBT-heavy",
              // fontWeight: 900,
            }}
          >
            Doctor Consultation FAQs
          </h1>
          <ul>
            <li>
              <Link href="/learn/faq">
                <a className="links">What is Consult</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Payment</a>
              </Link>
            </li>
            <li>
              <Link href="/learn/faq">
                <a className="links">Video Consult</a>
              </Link>
            </li>
          </ul>

          <Link href="/learn/faq">
            <a className="modified">View all questions</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default index;
