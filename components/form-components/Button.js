import Link from "next/link";
import classNames from "classnames";
const Button = ({
  type,
  value,
  children,
  onClick,
  link,
  target,
  theme,
  parentClass,
  directClass,
  versions,
  disabled,
}) => {
  const parent = `${parentClass}__btn`;
  const versionClass = versions.map((el) => `c-btn--${el}`).join(" ");

  const onBtnClick = () => {
    if (typeof onClick === "function") onClick();
  };
  const className = classNames("c-btn", {
    [`c-btn--${theme}`]: theme,
    [parent]: parentClass,
    [versionClass]: versions,
    [directClass]: directClass,
  });
  switch (type) {
    case "button":
    case "submit":
      return (
        <button
          disabled={disabled}
          className={className}
          type={type}
          onClick={onBtnClick}
        >
          {value}
          {children}
        </button>
      );
    case "link":
      if (typeof link === "string")
        return (
          <Link href={link}>
            <a
              className={className}
              target={target ? "_blank" : ""}
              onClick={onBtnClick}
            >
              {value}
              {children}
            </a>
          </Link>
        );

      return (
        <span className={className} onClick={onBtnClick}>
          {value}
          {children}
        </span>
      );

    default:
      return (
        <button
          disabled={disabled}
          className={className}
          type={type}
          onClick={onBtnClick}
        >
          {value}
          {children}
        </button>
      );
  }
};

Button.defaultProps = {
  versions: [],
  disabled: false,
};
export default Button;
