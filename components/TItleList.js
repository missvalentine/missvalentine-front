import classNames from "classnames";

const TitleList = ({
  title,
  content,
  children,
  parentClass,
  versions,
  serial,
  onTitleClick,
  weight,
}) => {
 // console.log(versions)
  const componentClass = "c-title-list";
  const newVersionClass = versions[1];

  let className1 =
    newVersionClass === "new"
      ? "c-title-list__title-wrap--new"
      : versions[0] === "faq"
      ? "c-title-list__title-wrap--faq"
      : "c-title-list__title-wrap";
  const className2 =
    newVersionClass === "new"
      ? "c-title-list__detail-wrap--new"
      : "c-title-list__detail-wrap";
  const versionClass = versions
    .map((el) => `${componentClass}--${el}`)
    .join(" ");
  const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
  let className = classNames(componentClass, {
    [versionClass]: versions,
    [parent]: parentClass,
  });
  if (
   versions[0] === "responsive"
  ) {
    className = "c-title-list c-title-list__responsive";
    className1 = "c-title-list__title-wrap--responsive";
  }
  return (
    <div className={className}>
      {serial && <div className="c-title-list__key">{serial}</div>}
      <div
        onClick={() => {
          if (typeof onTitleClick === "function") {
            onTitleClick();
          }
        }}
        className={classNames(className1, {
          "cursor-pointer": typeof onTitleClick === "function",
        })}
      >
        {newVersionClass === "new" ? (
          <p className="c-title-list__new">{title}</p>
        ) : (
          <p className="c-title-list__title">{title}</p>
        )}
      </div>
      <div className={className2}>
        <div className="c-title-list__content">
          {content}
          {children}
        </div>
      </div>
    </div>
  );
};
TitleList.defaultProps = {
  versions: [],
};
export default TitleList;
