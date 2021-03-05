import dynamic from "next/dynamic";
import React from "react";
const Button = dynamic(
  () => import("../../components/form-components/Button"),
  {
    ssr: false,
  }
);
const Heading = dynamic(() => import("../../components/Heading"), {
  ssr: false,
});

function DiscussionSection({ data }) {
  const { title, list } = data;
  return (
    <div className="c-consult-page__container c-consult-page__container--black">
      <div className="">
        <div style={{ textAlign: "left" }}>
          <div className="c-consult-page--cont">
            <img src="/images/consult.webp" alt="" />
            <Heading versions={["black", "upper"]}>
              <div className="topicHeading">{title}</div>
            </Heading>
            <ul className="c-consult-page__list">
              {list.map((item) => (
                <li className="c-consult-page__list-item">{item}</li>
              ))}
              {/* <li className="c-consult-page__list-item">
              Can CBD help my specific condition?
            </li>
            <li className="c-consult-page__list-item">
              Topicals vs. Edibles vs. Oil drops: which CBD products should I
              buy?
            </li>
            <li className="c-consult-page__list-item">
              What are the potential interactions with supplements or
              prescription medications?
            </li>
            <li className="c-consult-page__list-item">
              What is my recommended CBD dosage?
            </li>
            <li className="c-consult-page__list-item">
              Have you prescribed CBD before and what were the results?
            </li>
            <li className="c-consult-page__list-item">
              What are the Side Effects?
            </li>
            <li className="c-consult-page__list-item">
              What are the different options available for taking CBD?
            </li> */}
            </ul>
          </div>
          <div className="">
            <center>
              <Button
                type="link"
                link="/consult/get-in-touch"
                versions={["dark"]}
              >
                Get Started
              </Button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscussionSection;
