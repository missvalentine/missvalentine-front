import React, { useState } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import classNames from 'classnames';
import './styles/app.scss';
import { Menu, Dropdown } from 'antd';
import Input from './form-components/Input';
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
const MobileMenu = ({ items, user, toggleRegBar }) => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(false);
  const [products, setProducts] = useState([]);
  const onSubmit = (e) => {
    //console.log(`${window.location.origin}/search/${search}`);
    // window.location.href(`${window.location.origin}/search/${search}`)
    if (e.key === 'Enter') {
      Router.push(`/search/${search}`);
    }
  };
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

  return (
    <ul className="c-nav__list">
      {items.map((el, ind) => (
        <li
          key={ind}
          className={classNames('c-nav__list-item', {
            'c-nav__list-item--has-sub-menu': el.subMenus,
          })}
        >
          {el.action === 'input' ? (
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
            ''
          )}
          {el.link ? (
            <Link as={el.as || el.link} href={el.link}>
              <a onClick={el.action} className="c-nav__link">
                {el.label}
                {el.icon}
              </a>
            </Link>
          ) : (
            <span onClick={el.action} className="c-nav__link">
              {el.label}
              {el.icon}
            </span>
          )}
          {el.subMenus && (
            <ul className="c-nav__sub-menu">
              {el.subMenus.map((elx, i) => (
                <li key={i} className="c-nav__sub-menu-item">
                  <Link as={elx.as || elx.link} href={elx.link}>
                    <a className="c-nav__link c-nav__link--sub">{elx.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

MobileMenu.defaultProps = {
  items: [],
};

export default MobileMenu;
