import { useState } from 'react';
import dynamic from 'next/dynamic';
const Heading = dynamic(() => import('./Heading'));
import Link from 'next/link';
import Router from 'next/router';
import footerMenu from '../constants/footerMenu';
const SubscribeForm = dynamic(() => import('./SubscribeForm'));
import projectSettings, { projectName } from '../constants/projectSettings';
const Logo = dynamic(() => import('./Logo'));
import { Modal, notification } from 'antd';
import { createContactUs } from '../services/apis/contact';
const EmailReg = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g);
import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const subscribeUser = async (e, email) => {
  e.preventDefault();
  if (EmailReg.test(email)) {
    createContactUs({ email, callScreen: 'footer' })
      .then((res) => {
        if (res.data.success) {
          notification.success({
            message: 'Email Registered Successfully!',
            description: 'You will start receiving promotions!',
          });
        } else {
          notification.error({
            message: 'Something went wrong',
          });
        }
      })
      .catch((err) =>
        notification.error({
          message: 'Something went wrong',
        })
      );
  }
};

const tagRender = (title) => {
  switch (title) {
    case 'Facebook':
      return (
        <Tag icon={<FacebookOutlined />} color="#3b5999">
          {title}
        </Tag>
      );
    case 'Youtube':
      return (
        <Tag icon={<YoutubeOutlined />} color="#cd201f">
          {title}
        </Tag>
      );
    case 'Instagram':
      return (
        <Tag icon={<InstagramOutlined />} color="#DD2A7B">
          {title}
        </Tag>
      );
    case 'Twitter':
      return (
        <Tag icon={<TwitterOutlined />} color="#55acee">
          {title}
        </Tag>
      );

    default:
      return title;
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
                  {el.menus && el.heading === 'Social'
                    ? el.menus.map((elx, k) => {
                        return (
                          <li key={k} className="c-footer__list-item">
                            <a href={elx.slug} target="_blank">
                              <a className="c-footer__link c-footer__link--menu">
                                {tagRender(elx.title)}
                              </a>
                            </a>
                          </li>
                        );
                      })
                    : el.menus.map((elx, k) => {
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
