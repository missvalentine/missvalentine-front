import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import ImgsViewer from 'react-images-viewer';
import { Spin, Button } from 'antd';
import { PhoneFilled, WhatsAppOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import callIcon from '../assets/icons/callIcon.png';
import waIcon from '../assets/icons/whatsappIcon.webp';
import { getColorCode } from '../utilis/customFunctions';
import {
  LeftCircleFilled,
  LeftCircleOutlined,
  RightCircleOutlined,
  RightCircleFilled,
} from '@ant-design/icons';
export default function ProductDetail(props) {
  const { data } = props;

  const [openViewer, setOpenViewer] = useState(false);
  const [currImg, setCurrImg] = useState(0);
  const [activeImg, setActiveImg] = useState(0);

  const imgSrc =
    data &&
    data.images.map((i) => {
      return { src: i.data };
    });
  const gotoPrevImg = () => setCurrImg((s) => s - 1);
  const gotoNextImg = () => setCurrImg((s) => s + 1);

  const closeImg = () => {
    setOpenViewer(false);
    setCurrImg(0);
  };

  if (data)
    return (
      <Spin spinning={!data}>
        {data && (
          <div className="c-product-detail row">
            <div className="c-product-detail-left  col-xs-12 col-md-6 ">
              <ImgsViewer
                currImg={currImg}
                imgs={imgSrc}
                isOpen={openViewer}
                onClickPrev={gotoPrevImg}
                onClickNext={gotoNextImg}
                onClose={closeImg}
              />

              <LeftCircleFilled
                className={`c-product-detail-left__icon ${activeImg === 0 &&
                  'c-product-detail-left__icon--hide'} `}
                onClick={() => activeImg !== 0 && setActiveImg((s) => s - 1)}
              />
              <img
                src={imgSrc[activeImg].src}
                alt="main_image"
                onClick={() => setOpenViewer(true)}
                className="c-product-detail-left__image"
              />
              <RightCircleFilled
                className={`c-product-detail-left__icon ${activeImg ===
                  imgSrc.length - 1 && 'c-product-detail-left__icon--hide'} `}
                onClick={() =>
                  activeImg < imgSrc.length - 1 && setActiveImg((s) => s + 1)
                }
              />
              <div>
                {imgSrc.map((im, index) => (
                  <img
                    key={index}
                    src={im.src}
                    alt="mini"
                    className={`c-product-detail-left__mini-image  ${index ===
                      activeImg &&
                      'c-product-detail-left__mini-image--selected'}`}
                    onClick={() => setActiveImg(index)}
                  />
                ))}
              </div>
            </div>
            <div className="c-product-detail-right col-xs-12 col-md-6">
              <div className="c-product-detail-right__category">
                {data.category.name}
              </div>
              <div className="c-product-detail-right__name">{data.name}</div>
              {data.price && (
                <div className="c-product-detail-right__price">
                  &#x20B9; {data.price}
                </div>
              )}
              {data.sizes.length !== 0 && (
                <div className="c-product-detail-right__box">
                  <div className="c-product-detail-right__title">
                    Available Sizes
                  </div>
                  <div className="c-product-detail-right__sizes">
                    {data.sizes.map((s, i) => (
                      <div key={i} className="c-product-detail-right__size">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {data.colors.length !== 0 && (
                <div className="c-product-detail-right__box">
                  <div className="c-product-detail-right__title">Colors</div>
                  <div className="c-product-detail-right__colors">
                    {data.colors.map((c, i) => (
                      <div className="c-product-detail-right__color" key={i}>
                        <div style={{ backgroundColor: getColorCode(c) }}></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className="c-product-detail-right__box">
                <button className="c-product-detail-right__call-btn-wa">
                  <a
                    target="_black"
                    // href={`https://wa.me/9999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${data.name}`}
                    href={`https://wa.me/+919999217125/?text=Hello!%20I%20want%20to%20enquire%20about%20${
                      data.name && data.name !== ''
                        ? data.name
                        : data.category.name
                    }`}
                  >
                    <WhatsAppOutlined className="c-product-detail-right__call-btn-wa__img" />
                    Whatsapp Enquiry
                  </a>
                </button>
                <button className="c-product-detail-right__call-btn-phone">
                  <a href="tel:9999217125">
                    <PhoneFilled className="c-product-detail-right__call-btn-phone__img" />
                    Call Enquiry
                  </a>
                </button>
              </div>

              {data.subCategories.length !== 0 && (
                <div className="c-product-detail-right__box">
                  <div className="c-product-detail-right__title">
                    Category (s)
                  </div>
                  <div className="c-product-detail-right__sizes">
                    {data.subCategories.map((s, i) => (
                      <div key={i} className="c-product-detail-right__size">
                        {s.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="c-product-detail-right__box">
                <div className="c-product-detail-right__title">
                  Product Features
                </div>
                <div>{data.shortDesc}</div>
                <div>100% Original Product</div>
              </div>
              <div className="c-product-detail-right__box">
                <div className="c-product-detail-right__title"></div>
              </div>
            </div>
            <div className="c-product-detail-right col-12 mt-5">
              <div className="c-product-detail-right__title">
                Product Description
              </div>
              <div>{data.description}</div>
            </div>
            <div className="c-product-detail-right col-12 mt-3 ">
              <div className="c-product-detail-right__title">Wash Care</div>
              <div>
                <ol>
                  <li>Hand wash in warm water</li>
                  <li>Do not wring</li>
                  <li>Reshape cups whilst damp</li>
                  <li>Line dry in shade</li>
                  <li>Do not bleach/ dry clean/ iron.</li>
                </ol>
              </div>
            </div>
            <div className="c-product-detail-right col-12 mt-3 ">
              <div className="c-product-detail-right__title">
                Country of Origin
              </div>
              <div>India</div>
            </div>
            <div className="c-product-detail-right col-12 mt-3 ">
              <div className="c-product-detail-right__title">
                Country of Manufacturing
              </div>
              <div>India</div>
            </div>
          </div>
        )}
      </Spin>
    );
  return <div></div>;
}
