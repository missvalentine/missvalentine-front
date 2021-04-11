import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import './styles/app.scss';
const Drawer = dynamic(() => import('./Drawer'));

import { Menu, Dropdown } from 'antd';
const Input = dynamic(() => import('./form-components/Input'));
import CartIcon from './CartIcon';
import { SearchOutlined } from '@ant-design/icons';
import apiList from '../services/apis/apiList';
import {
  getVisibleProducts,
  addSlugToProduct,
  getProductTitle,
  getProductShortDesc,
  getBasicPrice,
} from '../services/helpers/product';
import projectSettings from '../constants/projectSettings';
import CartItem from './CartItem';
import { numberFormat } from '../services/helpers/misc';
const { SubMenu } = Menu;
const Nav = ({ parent, items, isRight, props }) => {
  const inputEl = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <nav
      className={classNames('c-nav', {
        [`${parent}__nav`]: parent,
        [`c-nav--right`]: isRight,
      })}
    >
      <ul className="c-nav__list">
        {items.map((el, ind) => (
          <li
            ref={inputEl}
            key={ind}
            className={classNames('c-nav__list-item', {
              'c-nav__list-item--has-sub-menu': el.subMenus,
            })}
          >
            {el.link ? (
              <Link as={el.as || el.link} href={el.link}>
                <a
                  onClick={el.action}
                  className={classNames('c-nav__link', {
                    'c-nav__link sub-menu': el.subMenus,
                  })}
                >
                  {el.label}
                  {el.icon}
                </a>
              </Link>
            ) : (
              <span onClick={el.action} className="c-nav__link">
                {el.label}
                {el.icon}
                {el.isCart && <CartIcon />}
              </span>
            )}
            {el.subMenus && (
              // <ul className="c-nav__sub-menu">
              <div className="sidebar">
                <div className="sidebarLeftDiv">
                  <ul style={{ listStyleType: 'none' }}>
                    {el.subMenus.map((elx, i) => (
                      // <Flip key={i} left opposite when={isOpen}>
                      //   <li className="c-nav__sub-menu-item">
                      //     <Link as={elx.as || elx.link} href={elx.link}>
                      //       <a className="c-nav__link c-nav__link--sub">
                      //         {elx.label}
                      //       </a>
                      //     </Link>
                      //   </li>
                      // </Flip>

                      <li style={{ margin: '30px 20px' }} key={i}>
                        <Link as={elx.as || elx.link} href={elx.link}>
                          <a className="c-nav__link c-nav__link--sub">
                            {elx.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.defaultProps = {
  items: [],
};

export default Nav;
