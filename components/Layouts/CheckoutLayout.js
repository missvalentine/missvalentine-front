import dynamic from 'next/dynamic'
import React, { useState, useEffect } from "react";
import Head from "next/head";
import ReactSVG from "react-svg";
const Heading = dynamic(() => import("../../components/Heading"));
import projectSettings from "../../constants/projectSettings";
import "../styles/app.scss";
const Logo = dynamic(() => import("../Logo"));
const CartDrawer = dynamic(() => import("../CartDrawer"));
import { connect } from "react-redux";
const Drawer = dynamic(() => import("../Drawer"));
const Registration = dynamic(() => import("../popups/Registration"));
const ForgetPassword = dynamic(() => import("../popups/ForgetPassword"));
const Login = dynamic(() => import("../popups/Login"));
import { toggleRegBar } from "../../redux/actions/drawers";
import { Collapse } from "reactstrap";

const CheckoutLayout = ({
  title,
  children,
  isRegOpen,
  hasLogin,
  toggleRegBar,
  loginDisplay,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  useEffect(() => {

    window.addEventListener("resize", () => {
    
      if (window.innerWidth !== windowWidth) {
        setWindowWidth(window.innerWidth);
        resetOpen(windowWidth, isOpen);
      }
    });
    setWindowWidth(window.innerWidth);
    resetOpen(windowWidth, isOpen);
  }, [windowWidth]);
  useEffect(()=>{
    window.myCallbackFunc = function (){}
  })
  
  const toggle = () => setIsOpen(!isOpen);
  const resetOpen = (width = 0, isOpen) => {
    if (width < 768) {
      if (isOpen) setIsOpen(false);
    } else {
      if (!isOpen) setIsOpen(true);
    }
  };
  const DrawerTitle = ({ onClose, title }) => (
    <div className="c-drawer-title c-drawer__title">
      <div className="c-drawer-title__go-back-wrapper"></div>
      <div className="c-drawer-title__header">
        <div className="row">
          {/* <Icon className="c-drawer-title__back" type="close-circle"  theme="filled" onClick={onClose} /> */}
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
  return (
    <>
    <div className="c-checkout-layout container-fluid">
      <Head>
        <title>{title ? title : projectSettings.projectName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="c-checkout-layout__row row">
        <div className="c-checkout-layout__main col-md-7 order-1 order-md-0 ">
          <div className="d-none d-md-block c-checkout-layout__logo-wrapper">
            <Logo full={true} parentClass="c-checkout-layout" />
          </div>
          {children}
        </div>
        <div className="c-checkout-layout__cart-col col-md-4 order-0 order-md-1">
          <div className="d-block d-md-none">
            <div className="c-checkout-layout__logo-wrapper ">
              <Logo full={true} parentClass="c-checkout-layout" />
            </div>
            <Heading
              parentClass="c-heading d-block d-md-none c-checkout "
              versions={["upper"]}
            >
              Checkout
            </Heading>
            <div className="order-summary">
              <Heading
                onClick={toggle}
                parentClass="c-checkout-layout"
                versions={["medium", "black"]}
              >
                <span className="d-flex c-checkout-layout__btn ">
                  <ReactSVG
                    className="c-checkout-layout__cart-icon"
                    src="/images/cart-icon-1.svg"
                  />{" "}
                  Show order summary {isOpen ? "-" : "+"}
                </span>
              </Heading>
            </div>
          </div>
          <DrawerTitle title="My Cart" />
          <Collapse isOpen={isOpen}>
            <CartDrawer complete={true} />
          </Collapse>
        </div>
        <div className="c-checkout-layout col-md-1 order-3 order-md-3"></div>
      </div>
      <Drawer
        onClose={toggleRegBar}
        title={loginDisplay === "register" ? "Registration" : "Login"}
        visible={isRegOpen}
      >
        {loginDisplay === "register" && <Registration />}
        {loginDisplay === "login" && <Login />}
        {loginDisplay === "forget" && <ForgetPassword />}
      </Drawer>
    </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isRegOpen: state.drawers.isRegOpen,
  hasLogin: state.drawers.hasLogin,
  loginDisplay: state.drawers.toDisplay,
  user: state.user,
});
export default connect(mapStateToProps, { toggleRegBar })(CheckoutLayout);
