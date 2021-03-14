import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './styles/app.scss';
const Drawer = dynamic(() => import('./Drawer'));
const CartDrawer = dynamic(() => import('./CartDrawer'));
const MobileMenus = dynamic(() => import('./MobileMenus'));
import {
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
} from '../redux/actions/drawers';
import { unsetUser } from '../redux/actions/user';
const Registration = dynamic(() => import('./popups/Registration'));
const ForgetPassword = dynamic(() => import('./popups/ForgetPassword'));
const Login = dynamic(() => import('./popups/Login'));
const CartIcon = dynamic(() => import('./CartIcon'));
import { projectName } from '../constants/projectSettings';

const NavMobile = ({
  parent,
  items,
  isRight,
  isCartOpen,
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
  isRegOpen,
  hasLogin,
  user,
  unsetUser,
  onlyCart,
  loginDisplay,
}) => {
  const [isOpen, setOpen] = useState(false);
  // const [isCartOpen, setIsCartOpen] = useState(false)
  const onClick = (e, action) => {
    if (action === 'link') {
    }
    if (action === 'cart') {
      toggleCartBar();
      // setIsCartOpen(!isCartOpen)
    }
    if (action === 'reg') {
      toggleRegBar();
    }
    if (action === 'logout') {
      unsetUser();
    }
  };
  if (onlyCart) {
    return (
      <div
        className={classNames(
          'c-nav__icon-menu-wrapper c-nav__icon-menu-wrapper--mobile',
          {
            [`${parent}__nav`]: parent,
          }
        )}
      >
        {items.map((el, key) => (
          <span
            key={key}
            onClick={(e) => {
              onClick(e, el.action);
            }}
            className="c-nav__icon c-nav__icon--mobile"
          >
            {el.label}
            {/* {el.icon} */}
            <CartIcon />
          </span>
        ))}
      </div>
    );
  }
  return (
    <nav
      className={classNames('c-nav c-nav--mobile', {
        [`${parent}__nav`]: parent,
        [`c-nav--right`]: isRight,
      })}
    >
      <span
        onClick={() => setOpen(!isOpen)}
        className={classNames('c-nav__menu-tgl', {
          'c-nav__menu-tgl--opened': isOpen,
        })}
      ></span>
      {/* <Fade left when={isOpen}> */}
      {/* </Fade> */}
      <Drawer
        onClose={() => {
          setOpen(false);
        }}
        title={projectName}
        visible={isOpen}
        placement="left"
      >
        <MobileMenus items={items} user={user} />
      </Drawer>
      <Drawer onClose={hideCartBar} title="Cart" visible={isCartOpen}>
        <CartDrawer />
      </Drawer>
      <Drawer
        onClose={toggleRegBar}
        title={loginDisplay === 'register' ? 'Registration' : 'Login'}
        visible={isRegOpen}
      >
        {loginDisplay === 'register' && <Registration />}
        {loginDisplay === 'login' && <Login />}
        {loginDisplay === 'forget' && <ForgetPassword />}
      </Drawer>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isCartOpen: state.drawers.isCartOpen,
  isRegOpen: state.drawers.isRegOpen,
  hasLogin: state.drawers.hasLogin,
  loginDisplay: state.drawers.toDisplay,
  user: state.user,
});
export default connect(mapStateToProps, {
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
  unsetUser,
})(NavMobile);
