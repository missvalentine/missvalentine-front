import dynamic from 'next/dynamic'
const Heading = dynamic(() => import("./Heading"));
const Button = dynamic(() => import("./form-components/Button"));
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
const HHSection = ({
  heading,
  subHeading,
  linkText,
  link,
  images,
  bg,
  children,
}) => {
  const className = classNames("c-hh-section", {
    [`c-hh-section--${bg}`]: bg,
  });
  return (
    <div className={className}>
      <div className="row c-hh-section__row">
        <div className="col-6 c-hh-section__heading-wrapper">
          <Heading parentClass="c-hh-section">{heading}</Heading>
          <div className=" c-hh-section__sub-heading-wrapper">
            <Heading
              h="4"
              subHeading={true}
              parentClass="c-hh-section"
              versions={["default", "lft-br"]}
            >
              {subHeading}
            </Heading>
            {linkText && (
              <Button
                theme="dark"
                type="link"
                versions={["new"]}
                directClass="mt-4"
                link={link || "#"}
              >
                {linkText}
              </Button>
            )}
          </div>
        </div>
        <div className="col-lg-6 c-hh-section__btn-wrapper mt-4">
          <div className="c-hh-section__img-wrapper">
            <LazyLoadImage
              src={images}
              className="c-hh-section__img img-fluid"
              alt={heading}
            />
          </div>
        </div>

        {/* {
                    images.map((el, i) => 
                        <div key={i} className="col-md-6 c-hh-section__img-wrapper">
                            <img src={el} className="c-hh-section__img img-fluid" alt={heading}/>
                        </div>)
                } */}
        {/* <div className="col-12">
                    {children}
                </div> */}
      </div>
    </div>
  );
};

HHSection.defaultProps = {
  images: [],
};

export default HHSection;
