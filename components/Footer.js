import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('./Heading'));
import Link from 'next/link';
import Router from 'next/router';
import footerMenu from '../constants/footerMenu';
const SubscribeForm = dynamic(() => import('./SubscribeForm'));
import projectSettings, { projectName } from '../constants/projectSettings';
const Logo = dynamic(() => import('./Logo'));
import { useState } from 'react';
import { Modal } from 'antd';
import { createContactUs } from '../services/apis/contact';
const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);

const subscribeUser = async (e, email) => {
  e.preventDefault();
  if (EmailReg.test(email)) {
    createContactUs({ email, callScreen: 'footer' })
      .then((res) => {
        if (res.data.success) {
          Modal.success({
            title: 'Email Registered Successfully!',
            okText: 'Explore Products',
            onOk() {
              Router.push('/');
            },
            wrapClassName: 'c-footer-modal',
          });
        } else {
          Modal.error({
            title: 'Request Failed!',
            okText: 'Explore Products',
            onOk() {
              Router.push('/');
            },
            wrapClassName: 'c-footer-modal',
          });
        }
      })
      .catch((err) =>
        Modal.error({
          title: 'Request Failed!',
          okText: 'Explore Products',
          onOk() {
            Router.push('/');
          },
          wrapClassName: 'c-footer-modal',
        })
      );
  }
};

const Footer = (props) => {
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const [email, setEmail] = useState('');
  return (
    <div className="c-footer">
      <div className="c-footer__inner">
        <div className="c-footer__logo-wrapper">
          <Logo
            url={props.imageUrl}
            versions={['footer']}
            parentClass="c-footer"
          />
        </div>
        <div
          className="row"
          style={{
            padding: '15px',
          }}
        >
          {footerMenu.map((el, i) => {
            return (
              <div
                key={i}
                className={`col-xs-12 col-lg-3 col-sm-6 col-md-6 col-12 pb-5`}
              >
                <Heading
                  h="5"
                  versions={['footer', 'upper']}
                  parentClass="c-footer"
                >
                  {el.heading}
                </Heading>
                <ul className="c-footer__menu-list">
                  {el.menus &&
                    el.menus.map((elx, k) => {
                      return (
                        <li key={k} className="c-footer__list-item">
                          <Link href={elx.slug}>
                            <a className="c-footer__link c-footer__link--menu">
                              {elx.title}
                            </a>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
          <div className={`c-footer__col col-12 col-sm-6 col-md-6 col-lg-3  `}>
            <Heading
              h="5"
              versions={['footer', 'upper']}
              parentClass="c-footer"
            >
              Sign up to our mailing list
            </Heading>
            <p className="c-footer__text">
              I would like to receive communications about {projectName}{' '}
              products and services.
            </p>
            <SubscribeForm
              email={email}
              onEmailChange={onEmailChange}
              subscribeUser={subscribeUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
