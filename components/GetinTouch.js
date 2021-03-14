import React from 'react';
import { PhoneFilled, MessageFilled } from '@ant-design/icons';

export default function GetinTouch() {
  return (
    <div className="c-getintouch">
      <div className="c-getintouch__title"> Get in touch</div>
      <div className="c-getintouch__subtitle">
        want to get in touch? We'd love to hear from you. Here's how you can
        reach us...
      </div>
      <div className="c-getintouch__cards">
        <div className="c-getintouch__cards-card">
          <div className="c-getintouch__cards-card-icon--rotate">
            <PhoneFilled />
          </div>
          <div className="c-getintouch__cards-card-title">Enquire Now</div>
          <div className="c-getintouch__cards-card-text">
            Interested in our product line. Want to enquire about our range of
            products, call us on.
          </div>
          <div className="c-getintouch__cards-card-no">
            <a href="tel:9999217125">+91 9999217125</a>
          </div>
        </div>
        <div className="c-getintouch__cards-card">
          <div className="c-getintouch__cards-card-icon">
            <MessageFilled />
          </div>
          <div className="c-getintouch__cards-card-title">Customer Support</div>
          <div className="c-getintouch__cards-card-text">
            Got a question? give us a call, our customer support members will be
            happy to help.
          </div>
          <div className="c-getintouch__cards-card-no">
            <a href="tel:7683037227">+91 7683037227</a>
          </div>
        </div>
      </div>
    </div>
  );
}
