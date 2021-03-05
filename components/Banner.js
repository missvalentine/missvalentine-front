import Logo from './Logo';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { imageUrl } from '../constants/projectSettings';

const Banner = ({
  image,
  heading,
  content,
  imgAlt,
  children,
  image2x,
  bottomLogo,
  versions,
  parentClass,
  extraButton,
  mobileImage,
}) => {
  const componentClass = 'c-banner';
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  const className1 =
    versions[1] == 'faq'
      ? 'c-banner__content c-banner-content--faq'
      : 'c-banner__content';
  return (
    <div className={className}>
      {/* <div className="c-banner__overlay" /> */}
      <div className={className1}>
        {/* {heading && <h2 className="c-banner__heading">{heading}</h2>} */}
        {heading}
        {content && <div className="c-banner__text">{content}</div>}
        {children}
        {bottomLogo && <Logo parentClass={componentClass} />}
      </div>
      {extraButton && (
        <div className="c-banner__extra-btn-wrapper">{extraButton}</div>
      )}
      {image2x && (
        // <LazyLoadImage
        // 	effect="opacity"
        // 	className={classNames("c-banner__bg", {
        // 		"c-banner__bg--desktop": mobileImage,
        // 	})}
        // 	srcSet={`${image2x} 2x, ${image || image2x} 1x`}
        // 	src={image}
        // 	alt={imgAlt ? imgAlt : "banner"}
        // />
        <div className="c-banner__bg--desktop">
          <img
            // className="img-fluid c-lr-section__img"
            src={`${image2x.replace(
              'public',
              `${imageUrl}`
            )} 2x, ${image.replace('public', `${imageUrl}`) ||
              image2x.replace('public', `${imageUrl}`)} 1x`}
            alt={imgAlt ? imgAlt : 'banner'}
          />
        </div>
      )}
      {!image2x && (
        // <LazyLoadImage
        // 	effect="opacity"
        // 	className={classNames("c-banner__bg", {
        // 		"c-banner__bg--desktop": mobileImage,
        // 	})}
        // 	src={image}
        // 	alt={imgAlt ? imgAlt : "banner"}
        // />
        <div className="c-banner__bg--desktop">
          <img
            // className="img-fluid c-lr-section__img"
            src={image.replace('public', `${imageUrl}`)}
            alt={imgAlt ? imgAlt : 'banner'}
          />
        </div>
      )}
      {mobileImage && (
        <img
          effect="opacity"
          className="c-banner__bg c-banner__bg--mobile"
          src={mobileImage.replace('public', `${imageUrl}`)}
          alt={imgAlt ? imgAlt : 'banner'}
        />
      )}
    </div>
  );
};
Banner.defaultProps = {
  versions: [],
};
export default Banner;
