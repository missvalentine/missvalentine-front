import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HImgSection = ({ image, children, parentClass, version, alt }) => {
  const parent = `${parentClass}__h-img-section`;
  const versionClass = version.map((el) => `c-h-img-section--${el}`).join(" ");
  return (
    <div
      className={classNames("c-h-img-section", {
        [parent]: parentClass,
        [versionClass]: version,
      })}
    >
      <div className="c-h-img-section">
        <div className="c-h-img-section__content-wrapper">
          <div className="c-h-img-section__content">{children}</div>
        </div>
        <div className="c-h-img-section__img-wrapper">
          <LazyLoadImage
            height="100%"
            width="100%"
            style={{ objectFit: "contain" }}
            src={image}
            // src="/images/new_image.png"
            className="c-h-img-section__img"
            alt={alt}
          />
        </div>
      </div>
    </div>
  );
};
HImgSection.defaultProps = {
  version: ["default"],
};
export default HImgSection;
