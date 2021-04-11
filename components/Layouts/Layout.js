import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '../Header';
import '../styles/app.scss';
const Footer = dynamic(() => import('../Footer'));
import classNames from 'classnames';
const TopAlert = dynamic(() => import('../TopAlert'));
import projectSettings from '../../constants/projectSettings';

const Layout = ({
  title,
  description,
  keywords,
  children,
  isHeaderBg,
  headerTheme,
  headerVersions,
  pageClass,
  fixed,
  homeLogo,
  logo,
  footerLogo,
}) => {
  return (
    <>
      {/* {topBarText && <TopAlert>{topBarText}</TopAlert>} */}
      <div
        className={classNames('c-layout', {
          [pageClass]: pageClass,
        })}
      >
        <Head>
          <title>{title ? title : projectSettings.projectName}</title>
          <meta
            property="og:title"
            content={title ? title : projectSettings.projectName}
            key="title"
          />
          <meta
            property="og:description"
            content={title ? title : projectSettings.projectName}
            key="description"
          />
          <meta
            name="description"
            content={description ? description : projectSettings.projectName}
          />
          <meta
            name="keywords"
            content={keywords ? keywords : projectSettings.projectName}
          />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header
          theme={headerTheme}
          homeLogo={homeLogo}
          versions={headerVersions}
          bg={isHeaderBg}
          fixed={fixed}
          logo={logo}
        />
        {children}

        <Footer imageUrl={footerLogo} />
      </div>
    </>
  );
};

Layout.defaultProps = {
  isHeaderBg: false,
  fixed: true,
};

export default Layout;
