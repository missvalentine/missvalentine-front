import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
const Logo = dynamic(() => import('./Logo'));
const Nav = dynamic(() => import('./nav'));
import { useScrollPosition } from '../services/helpers/scroll';
import { Affix } from 'antd';
import classNames from 'classnames';
import projectSettings from '../constants/projectSettings';
const NavMobile = dynamic(() => import('./navMobile'));
import mobileMenus from '../constants/mobileMenus';
import mobileMenusRight from '../constants/mobileMenusRight';
import { useSelector, useDispatch } from 'react-redux';

const Header = ({ bg, theme, versions, fixed, homeLogo, logo }) => {
  const versionClass = versions.map((el) => `c-header--${el}`).join(' ');
  const [isFixed, setIsFixed] = useState(false);
  const [show, setIsShow] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      let showNav = currPos.y > prevPos.y;
      // console.log(document.body.getBoundingClientRect().top)
      setIsShow(showNav);
      if (currPos.y === -124) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }

      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );
  const logoVersion = homeLogo ? [] : ['non-home'];
  const dispatch = useDispatch();

  const mainMenus = [
    {
      label: 'Explore',
      link: '/products',
      action: 'link',
      subMenus: [
        {
          label: 'MissValentine Bra',
          link: `/category/604ef99876aae4dc089d8330`,
          action: 'link',
        },
        {
          label: 'MissValentine Panty',
          link: `/category/604ef9a076aae4dc089d8331`,
          action: 'link',
        },
        {
          label: 'MissValentine Bra Set',
          link: `/category/605c49b89d78638e33272668`,
          action: 'link',
        },
      ],
    },
    {
      label: <div>New&nbsp;Arrivals</div>,
      link: '/products',
      action: 'link',
    },
  ];

  const rightMenus = [
    {
      label: 'CATALOGUE',
      link: '/e-catalogue',
      action: 'link',
    },
    {
      label: <div>CONTACT&nbsp;US</div>,
      link: '/contact',
      action: 'link',
    },
  ];

  if (fixed) {
    return (
      <div>
        <div
          className={classNames('c-header__wrapper', {
            'c-header__wrapper--hidden': !show && !fixed,
          })}
        >
          <header
            onScroll={(e) => {}}
            className={classNames(' c-header', {
              'c-header--light': true,
              'c-header--fixed': true && !fixed,
              'c-header--pinned': isFixed || bg,
              ['c-header--' + theme]: theme,
              [versionClass]: versions,
            })}
          >
            <NavMobile parent="c-header" items={mobileMenus} />
            <Nav parent="c-header" items={mainMenus} />
            <Logo
              logo={logo}
              parent="c-header"
              text={!homeLogo}
              versions={logoVersion}
            />
            <Nav parent="c-header" isRight={true} items={rightMenus} />
            <NavMobile
              parent="c-header"
              onlyCart={true}
              items={mobileMenusRight}
            />
          </header>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Affix className="c-header__affix">
          <div
            className={classNames('c-header__wrapper', {
              'c-header__wrapper--hidden': !show && !fixed,
            })}
          >
            <header
              onScroll={(e) => {}}
              className={classNames(' c-header', {
                'c-header--light': true,
                'c-header--fixed': true && !fixed,
                'c-header--pinned': isFixed || bg,
                ['c-header--' + theme]: theme,
                [versionClass]: versions,
              })}
            >
              <NavMobile parent="c-header" items={mobileMenus} />
              <Nav parent="c-header" items={mainMenus} />
              <Logo parent="c-header" text={!homeLogo} versions={logoVersion} />
              <Nav parent="c-header" isRight={true} items={rightMenus} />
              <NavMobile
                parent="c-header"
                onlyCart={true}
                items={mobileMenusRight}
              />
            </header>
          </div>
        </Affix>
      </div>
    );
  }
};

Header.defaultProps = {
  bg: false,
  versions: [],
};

const headMeta = {};

export default Header;
