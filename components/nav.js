import dynamic from 'next/dynamic';
import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import classNames from 'classnames';
import './styles/app.scss';
const Drawer = dynamic(() => import('./Drawer'));
const CartDrawer = dynamic(() => import('./CartDrawer'));
import {
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
} from '../redux/actions/drawers';
import { unsetUser } from '../redux/actions/user';
import { clearCart } from '../redux/actions/cart';
const Registration = dynamic(() => import('./popups/Registration'));
const ForgetPassword = dynamic(() => import('./popups/ForgetPassword'));
const Login = dynamic(() => import('./popups/Login'));
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
const Nav = ({
  parent,
  items,
  isRight,
  isCartOpen,
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
  isRegOpen,
  loginDisplay,
  user,
  unsetUser,
  clearCart,
  props,
}) => {
  const inputEl = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);

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
      // console.log(props);

      unsetUser();
      localStorage.clear();
      clearCart();
      //  console.log("after logout",props);
      Router.push('/');
    }
    // if(action==='search'){

    // }
  };
  // useEffect(()=> {
  //   $(inputEl.current).hover(()=> {
  //     $(this).css("background", "red")
  //   })
  // })
  const onSubmit = (e) => {
    //console.log(`${window.location.origin}/search/${search}`);
    // window.location.href(`${window.location.origin}/search/${search}`)
    if (e.key === 'Enter') {
      Router.push(`/search/${search}`);
    }
  };

  // console.log(display);

  const menu = (
    <div className="search-container">
      <Menu>
        <div style={{ marginTop: '40px' }}></div>
        {products.length > 0 ? (
          products.map((product, i) => (
            <Menu.Item style={{ height: 'fit-content' }} key={i}>
              <div className="c-cart-drawer">
                <CartItem
                  key={i}
                  title={product.title}
                  image={product.image}
                  subTitle={product.totalcbdmg}
                  price={`$${numberFormat(
                    parseFloat(product.price.sale_price)
                  )}`}
                  isSearch={true}
                  clearSearch={() => {
                    setDisplay(false);
                    setSearch('');
                    setProducts([]);
                    Router.push(`/shop/${product.title.replace(/ /g, '-')}`);
                  }}
                />
              </div>
            </Menu.Item>
          ))
        ) : (
          <SubMenu>
            <h2>No records found</h2>
          </SubMenu>
        )}
      </Menu>
    </div>
  );

  const filterProducts = async (value) => {
    setSearch(value);
    if (value === '') {
      setDisplay(false);
      setProducts([]);
      return;
    }
    setDisplay(true);
    const res = await fetch(apiList.getAllProducts);
    const productList = await res.json();
    const visibleProducts = getVisibleProducts(productList.products);
    const newList = visibleProducts.map((el) => addSlugToProduct(el));
    const productsRow = newList.map((el) => {
      return {
        ...el,
        image: el.productImage
          ? projectSettings.serverUrl + el.productImage
          : '//via.placeholder.com/300x500',
        title: getProductTitle(el),
        subTitle: getProductShortDesc(el),
        price: getBasicPrice(el),
        qty: 1,
      };
    });
    const applySearch = productsRow.filter((el) => {
      if (value === '') return false;
      return el.title.toLowerCase().includes(value.toLowerCase());
    });
    // console.log(applySearch);
    setProducts(applySearch);
  };
  console.log(user);
  return (
    <nav
      // onMouseOver={(element) => {
      //   setOpen(true);
      // }} onMouseOut={() => {setOpen(false)}}
      className={classNames('c-nav', {
        [`${parent}__nav`]: parent,
        [`c-nav--right`]: isRight,
      })}
    >
      <ul className="c-nav__list">
        {items
          .filter((el) => {
            if (user._id) {
              return el.onlyLogin !== false;
            } else {
              return el.onlyLogin !== true;
            }
          })
          .map((el, ind) => (
            <li
              // onMouseEnter={(e) => {
              //   if (el.subMenus && !isOpen) {
              //     setOpen(true);
              //   }
              // }}
              // onMouseLeave={() => {
              //   if (isOpen) {
              //     setOpen(false);
              //   }
              // }}
              ref={inputEl}
              key={ind}
              className={classNames('c-nav__list-item', {
                'c-nav__list-item--has-sub-menu': el.subMenus,
              })}
            >
              {el.link ? (
                <Link as={el.as || el.link} href={el.link}>
                  <a
                    onClick={(e) => {
                      onClick(e, el.action);
                    }}
                    className={classNames('c-nav__link', {
                      'c-nav__link sub-menu': el.subMenus,
                    })}
                  >
                    {el.label}
                    {el.icon}
                  </a>
                </Link>
              ) : el.action === 'dropdown' ? (
                <Dropdown
                  overlay={
                    <Menu>
                      {el.dropdownMenu.map((elx, ii) => {
                        if (elx.link) {
                          return (
                            <Menu.Item key={ii}>
                              <Link href={elx.link}>
                                <span
                                  onClick={(e) => {
                                    onClick(e, elx.action);
                                  }}
                                  className="c-nav__link"
                                >
                                  {elx.label}
                                  {elx.icon}
                                </span>
                              </Link>
                            </Menu.Item>
                          );
                        }
                        return (
                          <Menu.Item key={ii}>
                            <span
                              onClick={(e) => {
                                onClick(e, elx.action);
                              }}
                              className="c-nav__link"
                            >
                              {elx.label}
                              {elx.icon}
                            </span>
                          </Menu.Item>
                        );
                      })}
                    </Menu>
                  }
                >
                  <span className="c-nav__link">
                    {el.label}
                    {el.icon}
                  </span>
                </Dropdown>
              ) : el.action === 'input' ? (
                <div style={{ position: 'relative' }}>
                  <Input
                    prefix={<SearchOutlined style={{ color: '#aaaaaa' }} />}
                    value={search}
                    onChange={(e) => filterProducts(e.target.value)}
                    onKeyDown={onSubmit}
                    label="Search"
                  />
                  {/* {display ? ( */}
                  <Dropdown
                    overlayStyle={{
                      position: 'absolute',
                      top: '0 !important',
                      left: '0 !important',
                      width: '400px',
                      height: '500px',
                      overflow: 'scroll',
                    }}
                    visible={display}
                    // visible={true}
                    onVisibleChange={() => setDisplay(!display)}
                    overlay={menu}
                  >
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    ></a>
                  </Dropdown>
                  {/* ) : null} */}
                </div>
              ) : (
                <span
                  onClick={(e) => {
                    onClick(e, el.action);
                  }}
                  className="c-nav__link"
                >
                  {el.label}
                  {el.icon}
                  {el.isCart && <CartIcon />}
                </span>
              )}
              {/* {
            el.subMenus && <span  className={classNames("c-nav__sub-menu-tgl shopref", 
            // {
            //   "c-nav__sub-menu-tgl--opened ": isOpen
            // }
            
            )}>{isOpen ? <FiMinus /> : <FiPlus />}</span>
          } */}
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
      <Drawer
        onClose={hideCartBar}
        versions={['cart']}
        title="Cart"
        visible={isCartOpen}
      >
        <CartDrawer />
      </Drawer>
      <Drawer
        onClose={toggleRegBar}
        title={loginDisplay === 'register' ? 'Register' : 'Login'}
        visible={isRegOpen}
      >
        {loginDisplay === 'register' && <Registration />}
        {loginDisplay === 'login' && <Login />}
        {loginDisplay === 'forget' && <ForgetPassword />}
      </Drawer>
    </nav>
  );
};

Nav.defaultProps = {
  items: [],
};
const mapStateToProps = (state) => ({
  isCartOpen: state.drawers.isCartOpen,
  isRegOpen: state.drawers.isRegOpen,
  loginDisplay: state.drawers.toDisplay,
  user: state.user,
});
export default connect(mapStateToProps, {
  toggleCartBar,
  hideCartBar,
  toggleRegBar,
  unsetUser,
  clearCart,
})(Nav);
