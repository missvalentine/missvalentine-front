import Link from "next/link";
import classNames from "classnames";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { projectName, imageUrl } from "../constants/projectSettings";
const Logo = ({ versions, parentClass, full, text, logo, url }) => {
  const componentClass = `c-logo`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });

  if (text) {
    return (
      <Link href="/">
        <a className={className}>
          <LazyLoadImage
            src={logo ? logo.src : `${imageUrl}/Logo-nav.png`}
            className="c-logo__img"
            alt={projectName}
          />
        </a>
      </Link>
    );
  }
  if (versions == "footer") {
    return (
      <Link href="/">
        <a className={className}>
          <LazyLoadImage src={`${imageUrl}/Footer-Logo.png`} className="c-logo__img" alt={projectName} style={{width:"auto",height:"auto"}}/>
        </a>
      </Link>
    );
  }
  return (
    <Link href="/">
      <a className={className}>
        {!full && (
          <LazyLoadImage
            src={`${imageUrl}/Logo-chat.png`}
            className="c-logo__img"
            alt={projectName}
          />
        )}
        {full && (
          <LazyLoadImage
            src={`${imageUrl}/Logo.png`}
            className="c-logo__img"
            alt={projectName}
          />
        )}
      </a>
    </Link>
  );
};
Logo.defaultProps = {
  versions: [],
  full: false,
};
export default Logo;
