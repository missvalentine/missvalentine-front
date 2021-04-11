import React, { useState } from 'react';
import { getColorCode } from '../utilis/customFunctions';
import { useRouter } from 'next/router';
import '../components/styles/app.scss';
import { Button } from 'antd';
import { HeartOutlined, HeartFilled, HeartTwoTone } from '@ant-design/icons';

export default function Product(props) {
  const { data, isSelectable, isSelected, handleSelectClick } = props;
  const { images, name, colors, price, shortDesc } = data;
  const router = useRouter();
  const [showImageNo, setShowImageNo] = useState(0);
  const imagesCount = images.length;

  const handleOnMouseEnter = () => {
    imagesCount >= 2 && setShowImageNo((s) => s + 1);
  };
  const handleOnMouseLeave = () => {
    imagesCount >= 2 && setShowImageNo((s) => s - 1);
  };

  return (
    <div
      className={`c-product-card   ${isSelected &&
        'c-product-card--selected '}`}
    >
      <div
        className="c-product-card__image-wrapper"
        onClick={() =>
          !isSelected &&
          router.push({
            pathname: `products/${data._id}`,
            state: data,
          })
        }
      >
        {images && images[showImageNo] && (
          <img
            src={images[showImageNo].data}
            alt={'product image'}
            className="c-product-card__image"
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        )}
        <div className="c-product-card__image-text">
          {/* <FavoriteBorder /> */}
        </div>
      </div>
      <div className="c-product-card__details">
        <div
          className="c-product-card__details-name"
          onClick={() =>
            !isSelected &&
            router.push({
              pathname: `products/${data._id}`,
              state: data,
            })
          }
        >
          {name}
        </div>
        <div className="c-product-card__details-desc">{shortDesc}</div>
        {price && price !== '' && (
          <div className="c-product-card__details-price">Rs. {price}</div>
        )}
        <div className="c-product-card__details-colors">
          {/* 
        <Tooltip
              disableFocusListener
              key={i}
              title={c}
              placement="right-start"
            >
              <div className="c-product-card__details-color">
                <div style={{ backgroundColor: getColorCode(c) }}></div>
              </div>
            </Tooltip> */}
          {colors.map((c, i) => (
            <div className="c-product-card__details-color">
              <div style={{ backgroundColor: getColorCode(c) }}></div>
            </div>
          ))}
        </div>
        {isSelectable && (
          <Button
            type={isSelected ? 'primary' : 'default'}
            shape="rounded"
            onClick={() => handleSelectClick(data)}
          >
            {/* <HeartTwoTone twoToneColor="#eb2f96" /> */}
            {isSelected ? 'Selected' : 'Select'}
          </Button>
        )}
      </div>
    </div>
  );
}
