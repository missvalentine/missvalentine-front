import dynamic from 'next/dynamic'
import { Drawer as AntDrawer, Icon } from "antd";
const Heading = dynamic(() => import("./Heading"));
import classNames from "classnames";

class Drawer extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = {
      width: 550,
    };
  }
  componentDidMount() {
    this.setState({
      width: window.innerWidth > 550 ? 550 : "100%",
    });
  }
  render() {
    const { width } = this.state;
    const {
      onClose,
      visible,
      title,
      children,
      versions,
      parentClass,
    } = this.props;

    const componentClass = `c-drawer`;
    const versionClass = versions
      .map((el) => `${componentClass}--${el}`)
      .join(" ");
    const parent = `${parentClass}__${componentClass.replace("c-", "")}`;
    const className = classNames(componentClass, {
      [versionClass]: versions,
      [parent]: parentClass,
    });
    return (
      <AntDrawer
        className={className}
        placement={this.props.placement}
        closable={false}
        onClose={onClose}
        visible={visible}
        width={width}
        title={<DrawerTitle onClose={onClose} title={title} />}
      >
        {children}
      </AntDrawer>
    );
  }
}
const DrawerTitle = ({ onClose, title }) => (
  <div className="c-drawer-title c-drawer__title">
    <div className="c-drawer-title__go-back-wrapper"></div>
    <div className="c-drawer-title__header">
      <div className="row">
        <Icon className="c-drawer-title__back" type="close-circle"  theme="filled" onClick={onClose} />
        <div className="col">
          <Heading
            parentClass="c-cart-title"
            className="c-cart-title__heading"
            versions={["default", "dark", "upper"]}
          >
            {title}
          </Heading>
        </div>
      </div>
    </div>
  </div>
);
Drawer.defaultProps = {
  versions: [],
  placement: "right",
};
export default Drawer;
