import Link from 'next/link';
import classNames from 'classnames';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { projectName, imageUrl } from '../constants/projectSettings';
const Logo = ({ versions, parentClass, full, text, logo, url }) => {
  const componentClass = `c-logo`;
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(' ');
  const parent = `${parentClass}__${componentClass.replace('c-', '')}`;
  const className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });

  if (versions == 'footer') {
    return (
      <Link href="/">
        <a className={className}>
          <LazyLoadImage
            src={`${imageUrl}/Footer-Logo.png`}
            className="c-logo__img"
            alt={projectName}
            style={{ width: 'auto', height: 'auto' }}
          />
        </a>
      </Link>
    );
  } else if (versions == 'navbar') {
    return (
      <Link href="/">
        <a className={className}>
          <div className="c-logo__text">{projectName}</div>
        </a>
      </Link>
    );
  }
  return (
    <Link href="/">
      <a className={className}>
        <div className="c-logo__text">{projectName}</div>
      </a>
    </Link>
  );
};
Logo.defaultProps = {
  versions: [],
  full: false,
};
export default Logo;
