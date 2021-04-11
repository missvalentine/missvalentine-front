import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './styles/app.scss';
const Drawer = dynamic(() => import('./Drawer'));
const MobileMenus = dynamic(() => import('./MobileMenus'));

import { projectName } from '../constants/projectSettings';

const NavMobile = ({
  parent,
  items,
  isRight,
  isCartOpen,
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
            onClick={el.action}
            className="c-nav__icon c-nav__icon--mobile"
          >
            {el.label}
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
    </nav>
  );
};

export default NavMobile;
