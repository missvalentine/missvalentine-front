import dynamic from 'next/dynamic';
import { Form, Radio as AntRadio, Modal } from 'antd';
import Router from 'next/router';
const Input = dynamic(() => import('../form-components/Input'));
const Button = dynamic(() => import('../form-components/Button'));
import regex from '../../services/helpers/regex';
import reactComponentDebounce from 'react-component-debounce';

import { projectName } from '../../constants/projectSettings';
import { createContactUs } from '../../services/apis/contact';
// import './styles/_all.scss';

const DebounceInput = reactComponentDebounce({
  valuePropName: 'value',
  triggerMs: 1000,
})(Input);

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log({ values });
        this.setState(
          {
            isLoading: true,
          },
          () => {
            createContactUs({ ...values, callScreen: 'contactPage' })
              .then((res) => {
                this.setState({
                  isLoading: false,
                });
                console.log('res.data', res.data, res.data.success);
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
        );
      }
    });
  };

  render() {
    const { Item } = Form;
    const { getFieldDecorator } = this.props.form;
    const { isLoading } = this.state;
    console.log(this.props.form);
    return (
      <div className="c-contact-form">
        <Form onSubmit={this.onSubmit}>
          <div className="c-contact-form__row">
            <div className="c-contact-form__row-left">
              <Item>
                {getFieldDecorator('subject', {
                  initialValue: 'Order Enquiry',
                })(
                  <AntRadio.Group>
                    <AntRadio
                      className="c-contact-form__radio"
                      value="Order Enquiry"
                    >
                      <b>Order Enquiry</b>
                      <br />
                      Questions about an order you have placed online.
                    </AntRadio>
                    <AntRadio
                      className="c-contact-form__radio"
                      value="Product Enquiry"
                    >
                      <b>Product Enquiry</b>
                      <br />
                      Questions you may have about specific products and
                      ingredients.
                    </AntRadio>
                    <AntRadio
                      className="c-contact-form__radio"
                      value="Wholesale Enquiry"
                    >
                      <b>Wholesale Enquiry</b>
                      <br />
                      Questions about distributing {projectName} CBD.
                    </AntRadio>
                    <AntRadio
                      className="c-contact-form__radio"
                      value="Press and Marketing Enquiry"
                    >
                      <b>Press and Marketing Enquiry</b>
                      <br />
                      Questions you may have about press and marketing
                      opportunities
                    </AntRadio>
                    <AntRadio
                      className="c-contact-form__radio c-contact-form__radio--last"
                      value="General Feedback or Questions"
                    >
                      <b>General Feedback or Questions</b>
                      <br />
                      Please contact us with any general questions or thoughts.
                    </AntRadio>
                  </AntRadio.Group>
                )}
              </Item>
            </div>
            <div className="c-contact-form__row-right">
              <div className="c-contact-form__main-form">
                <Item>
                  {getFieldDecorator('name', {
                    rules: [
                      { required: true, message: 'Please input your name!' },
                      {
                        pattern: regex.name,
                        message: 'Please enter a valid name!',
                      },
                      { max: 20 },
                    ],
                  })(
                    <DebounceInput
                      versions={['light']}
                      // pattern={[
                      //     '^.{8,}$', // min 8 chars
                      //     '(?=.*\\d)', // number required
                      //     '(?=.*[A-Z])', // uppercase letter
                      //   ]}
                      parentClass="c-contact-form"
                      label="Name"
                    />
                  )}
                </Item>
                <Item>
                  {getFieldDecorator('email', {
                    rules: [
                      { required: true, message: 'Please input your e-mail!' },
                      {
                        max: 40,
                        message: "You can't use more than 40 characters.",
                      },
                      {
                        pattern: regex.email,
                        message: 'Please enter a valid E-mail!',
                      },
                    ],
                  })(
                    <DebounceInput
                      versions={['light']}
                      parentClass="c-contact-form"
                      label="E-mail"
                    />
                  )}
                </Item>
                <Item>
                  {getFieldDecorator('text', {
                    rules: [
                      { required: true, message: 'Please input your message!' },
                      {
                        max: 250,
                        message: "You can't use more than 250 characters.",
                      },
                    ],
                  })(
                    <Input
                      versions={['light']}
                      parentClass="c-contact-form"
                      label="Message"
                    />
                  )}
                </Item>
                <div className="contact-form-button">
                  <Button
                    theme="dark"
                    type="submit"
                    disabled={isLoading}
                    // versions={["block"]}
                  >
                    Send E-mail
                  </Button>
                </div>
              </div>
              <div className="c-contact-form__info-block">
                <div className="c-contact-form__info-block__row">
                  <div className="c-contact-form__info-block__row-left">
                    <p
                      className="c-contact-form__text"
                      style={{
                        fontWeight: '600',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                      }}
                    >
                      Our Phone Number
                    </p>
                  </div>
                  <div className="c-contact-form__info-block__row-right">
                    <a
                      href="tel:+917683037227"
                      className="c-contact-form__link"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                      }}
                    >
                      +91 7683037227
                    </a>
                  </div>
                </div>
                <div
                  className="c-contact-form__info-block__row"
                  style={{ marginTop: '-8px', fontSize: '14px' }}
                >
                  <div className="c-contact-form__info-block__row-left">
                    <p
                      className="c-contact-form__text"
                      style={{
                        fontWeight: '600',
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                      }}
                    >
                      Our E-mail
                    </p>
                  </div>
                  <div className="c-contact-form__info-block__row-right">
                    <a
                      href="mailto:info@missvalentineinnerwear.com"
                      className="c-contact-form__link"
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: '14px',
                      }}
                    >
                      info@missvalentineinnerwear.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </div>
    );
  }
}
const ContactFrom = Form.create({ name: 'contact' })(Contact);

export default ContactFrom;
