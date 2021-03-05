import React, { useState } from 'react';
// import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { getColorCode } from '../utilis/customFunctions';
// import MuiTooltip from '@material-ui/core/Tooltip';

// import { withStyles, makeStyles } from '@material-ui/core/styles';

// const Tooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     textTransform: 'uppercase',
//     border: '1px solid #eee',
//     fontSize: 15,
//     padding: '8px 16px',
//   },
//   tooltipArrow: {
//     backgroundColor: theme.palette.common.white,
//   },
//   arrow: {
//     backgroundColor: theme.palette.common.white,
//   },
// }))(MuiTooltip);

export default function Product(props) {
  const { data } = props;
  const { images, name, colors, price, shortDesc } = data;

  const [showImageNo, setShowImageNo] = useState(0);
  const imagesCount = images.length;

  const handleOnMouseEnter = () => {
    imagesCount >= 2 && setShowImageNo((s) => s + 1);
  };
  const handleOnMouseLeave = () => {
    imagesCount >= 2 && setShowImageNo((s) => s - 1);
  };

  return (
    <div className="c-product-card ">
      <div
        className="c-product-card__image-wrapper"
        onClick={() =>
          props.history.push({
            pathname: `product-detail/${data.name}/${data._id}`,
            state: data,
          })
        }
      >
        {images && images[showImageNo] && (
          <img
            src={`data:image/png;base64,${images[showImageNo].data}`}
            alt={'asd'}
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
            props.history.push({
              pathname: `product-detail/${data.name}/${data._id}`,
              state: data,
            })
          }
        >
          {name}
        </div>
        <div className="c-product-card__details-desc">{shortDesc}</div>
        <div className="c-product-card__details-price">Rs. {price}</div>
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
      </div>
    </div>
  );
}
