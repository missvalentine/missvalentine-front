import dynamic from 'next/dynamic';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
const Header = dynamic(() => import('../Header'));
import projectSettings, {
  topBarText,
  projectName,
} from '../../constants/projectSettings';
import '../styles/app.scss';
const Footer = dynamic(() => import('../Footer'));
import classNames from 'classnames';
const ChatBot = dynamic(() => import('../chatBot/ChatBot'));
import Button from '../form-components/Button';
const TopAlert = dynamic(() => import('../TopAlert'));
import { FullModal } from '../modal';
import { connect } from 'react-redux';
import { setEntryMsg } from '../../redux/actions';
const Input = dynamic(() => import('../form-components/Input'));
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { addSubscriber } from '../../services/apis/user';
const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
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
  isEntryMsg,
  setEntryMsg,
  logo,
  footerLogo,
}) => {
  // console.log(headerVersions);
  const [isEntryMsg1, setEntryMsg1] = useState(false);
  const [email, setEmail] = useState('');
  const [isAdded, setIsAdded] = useState(false);
  const [message, setMessage] = useState('');

  const setSubscriber = async () => {
    // setEntryMsg1(false);
    // console.log(email);
    const result = await addSubscriber(email);
    setIsAdded(true);
    setMessage(result.data.message);
  };

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

        {/* <FullModal
          isOpen={isEntryMsg}
          toggle={() => setEntryMsg(false)}
          //   style={{ width: "max-content" }}
        >
          <div className="ss-row ss">
            <div className="left">
              <LazyLoadImage
                src="/images/caution-ss.png"
                style={{ width: "100%", height: "100%" }}
              />
            
            </div>
            <div className="right">
              <div className="modal__logo-wrapper">
                <div
                  className="modal__heading"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <a className="c-logo  modal-footer__logo" href="/">
                    <LazyLoadImage
                      src="/images/logo-new.png"
                      className="modal__logo-img ss__logo"
                      alt={projectName}
                    />
                  </a>
                </div>
             
              </div>
              <div className="c-susbmit-r__wrapper justify-content-center">
                <h1 className="ss__heading">
                  Please confirm that you are
                  <br />
                  21 years of age or older
                </h1>
                <div className="row">
                  <Button
                    theme="dark"
                    type="link"
                    // directClass="mt-4"
                    onClick={() => {
                      setEntryMsg(false);
                      setEntryMsg1(true);
                    }}
                  >
                    Yes
                  </Button>

                  <Button
                    theme="dark"
                    type="link"
                    // directClass="mt-4"
                    link="https://google.com"
                    target={true}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FullModal>*/}

        <FullModal
          isOpen={isEntryMsg}
          toggle={() => setEntryMsg(false)}
          style={{ width: '100%' }}
        >
          <div className="ss ss-row">
            <div className="left">
              <img
                src="/images/ss2_banner.png"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="right">
              {!isAdded ? (
                <>
                  <div
                    className="modal__logo-wrapper ss__heading"
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <div className="">
                      <span
                        className="c-banner__heading"
                        style={{
                          color: '#d8ab97',
                          fontSize: '50px',
                          lineHeight: '60px',
                        }}
                      >
                        you first!
                      </span>
                    </div>
                  </div>
                  <div className="c-susbmit-r__wrapper justify-content-center">
                    <h1
                      className="ss__subhead"
                      style={{ fontSize: '20px', margin: '30px' }}
                    >
                      Sign up for our emails to get the latest updates
                      <br />
                      on our products before anyone else.
                    </h1>
                    <div>
                      <Input
                        label="Email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      {email.length > 0 && !EmailReg.test(email) && (
                        <span style={{ color: 'red' }}>
                          email is not valid!
                        </span>
                      )}
                      <br />
                      <Button
                        theme="dark"
                        type="submit"
                        onClick={setSubscriber}
                        disbaled={!EmailReg.test(email)}
                      >
                        Submit
                      </Button>
                      <Button
                        theme="dark"
                        type="link"
                        onClick={() => setEntryMsg(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <h1>{message}</h1>
                  <Button
                    theme="dark"
                    type="link"
                    onClick={() => setEntryMsg(false)}
                  >
                    Close
                  </Button>
                </>
              )}
            </div>
          </div>
        </FullModal>

        <ChatBot />
        <Footer imageUrl={footerLogo} />
      </div>
    </>
  );
};

Layout.defaultProps = {
  isHeaderBg: false,
  fixed: true,
};
const mapStateToProps = (state) => ({
  isEntryMsg: state.firstSetting.entryMsg,
});
export default connect(mapStateToProps, {
  setEntryMsg,
})(Layout);

// onClick={() => {if () {setEntryMsg1(false)} else {setError("Invalid Email")}}}
