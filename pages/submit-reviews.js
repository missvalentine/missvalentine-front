import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('../components/Layouts/Layout'), {
    ssr: false,
  });
const Heading = dynamic(() => import("../components/Heading"), {
    ssr: false,
  });
import { Rate } from 'antd';
import {Form, Radio as AntRadio, Icon  } from 'antd'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Input = dynamic(() => import('../components/form-components/Input'), {
    ssr: false,
  });
const Button = dynamic(() => import('../components/form-components/Button'), {
    ssr: false,
  });
const Checkbox = dynamic(() => import('../components/form-components/Checkbox'), {
    ssr: false,
  });

const SubmitReviews = props => {
    return (
        <Layout headerVersions={["bg-light"]} headerTheme="dark">      
            <section className="c-submit-r__item">
                <div className="container">
                    <div className="row c-submit-r__row">
                        <div className="c-submit-r__item-row">
                            <div className="c-submit-r__img-wrap">
                                <LazyLoadImage className="img-fluid" src="images/cbd-oil.png" alt="cbd-oil"/>
                            </div>
                            <div className="c-submit-r__heading">
                                <h3 className="c-submit-r__heading__title" >CBD ISOLATE 500MG</h3>
                            </div>                            
                        </div>                 
                    </div>
                </div>
            </section>
            <section className="c-submit-r__about">
                <div className="container">
                    <div className="row">
                        <div className="w-100 mt-auto c-submit-r__about--center" >
                            <Heading>
                                LET'S GET STARTED! <br /><span className="text-lowercase mt-1" style={{color: '#578fb5'}}>WHAT DID YOU THINK ABOUT THIS PRODUCT?</span>
                            </Heading>
                        </div>
                    </div>
                </div>
            </section>
          <Rating></Rating>
          <RadioText />
         
          <WrappedNormalLoginForm />
        </Layout>
        )
    }


    const Rating = props => {
        return (
            <section className="c-submit-r__rating">
                <div className="c-submit-r__row row justify-content-center">
                    <div className="col-lg-6 text-center d-flex justify-content-center">
                        <div className="c-submit-r__rating__wrapper">
                            <div className="c-submit-r__rating--name">
                                <h3 className="c-submit-r__rating--name__small">Overall rating</h3>
                            </div>
                            <div className="c-submit-r__rating--star" style={{marginTop: '-8px'}}>
                            <Rate 
                                style={{ color: '#000' }}
                                className="c-product-info__stars" 
                                 />
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        )
    }

    const RadioText = props => {
        return(
            <section className="c-submit-r__rating mt-3">
                    <div className="c-submit-r__row row justify-content-center">
                        <div className="col-lg-6 text-center">
                        <div className="c-submit-r__rating__wrapper flex-column align-items-center">
                            <div className="c-submit-r__rating--name">
                                <h3 className="c-submit-r__rating--name__small">I would recommend this product</h3>
                            </div>
                            <div className="c-submit-r__rating--star">
                                <div className="radio__wrapper mt-3">
                                    <AntRadio className="c-contact-form__radio b-border-none" value="Yes">
                                        <b style={{paddingLeft: '14px'}}>Yes</b>                                            
                                    </AntRadio>
                                    <AntRadio className="c-contact-form__radio b-border-none" value="No">
                                        <b style={{paddingLeft: '14px'}}>No</b>                                            
                                    </AntRadio>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
   
  

    class NormalLoginForm extends React.Component {
        handleSubmit = e => {
          e.preventDefault();
          this.props.form.validateFields((err, values) => {
            if (!err) {
              console.log('Received values of form: ', values);
            }
          });
        };
      
        render() {
          const { getFieldDecorator } = this.props.form;
          return (
            
            <Form onSubmit={this.handleSubmit} className="login-form">  
                <div className="s-review__form container ">
                 <div className="row justify-content-center">
                    <div className="col-md-6 s-review__from-wrapper">             
                    <Form.Item>
                        {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            parentClass="c-contact-form"
                            placeholder="Your Name"
                            versions={["light"]}
                            label="Your Name"
                        />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('title', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input                            
                            placeholder="Review title"
                            versions={["light"]}
                            label="Review title"
                            parentClass="c-contact-form"
                        />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('details', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            placeholder="Review details"
                            versions={["light"]}
                            label="Review details"
                            parentClass="c-contact-form"
                        />,
                        )}
                    </Form.Item>
                    </div>
                </div>
            </div>
            <div className="s-review__form container ">
                <div className="row justify-content-center">
                <div className="col-md-12">
                 <h3 className="s-review__from-heading">Tell us more about yourself and connect</h3>
                </div>
                    <div className="col-md-6 s-review__from-wrapper">
                    <Form.Item>
                        {getFieldDecorator('details', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            placeholder="Review details"
                            versions={["light"]}
                            label="Where are you from?"
                            parentClass="c-contact-form"
                        />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('details', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            placeholder="Review details"
                            versions={["light"]}
                            label="Review details"
                            parentClass="c-contact-form"
                        />,
                        )}
                    </Form.Item>

                    <Form.Item>
                        {getFieldDecorator('details', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                        <Input
                            placeholder="Review details"
                            versions={["light"]}
                            label="Review details"
                            parentClass="c-contact-form"
                        />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('agree', {
                            valuePropName: 'checked',
                            initialValue: true,
                            rules: [
                                { 
                                    required: true, 
                                    message: 'Please agree the terms and conditions.',
                                    transform: value => (value || undefined), 
                                    type: 'boolean',
                                },
                            ],

                        })(<Checkbox versions={["gold"]} >I agree to recieve e-mail notifiacation about my review</Checkbox>)}
                             <Button theme='outline' type="submit"  versions={["block"]} >Submit</Button>
                        </Form.Item>                    
                    </div>
                </div>
            </div>
        </Form>
                    
          );
        }
      }
      
    const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);      
      
      
    
            

export default SubmitReviews