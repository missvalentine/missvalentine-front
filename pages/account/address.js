import dynamic from 'next/dynamic';
import React, { Component } from 'react';
import { connect } from 'react-redux';
const Loader = dynamic(() => import('../../components/Loader'), {
  ssr: false,
});
const MyAccountSidebar = dynamic(
  () => import('../../components/MyAccountSidebar'),
  {
    ssr: false,
  }
);
import { getUserDetails } from '../../services/api';
import { getAddress } from '../../redux/actions/address';
const SingleAddress = dynamic(
  () => import('../../components/address/singleAddress'),
  {
    ssr: false,
  }
);
import classNames from 'classnames';
const AddAddressForm = dynamic(() => import('./add-address'), {
  ssr: false,
});
import onlyLogin from '../../components/hoc/onlyLogin';
const Layout = dynamic(() => import('../../components/Layouts/Layout'), {
  ssr: false,
});

import { Card, CardBody, CardSubtitle } from 'reactstrap';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Icon from 'react-icons-kit';
import { plus } from 'react-icons-kit/ikons/plus';
class ListAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpinnerToggle: false,
      formOpen: false,
    };
  }
  componentDidMount() {
    const {
      user: { _id: id },
      history,
      location,
    } = this.props;
    // if (!id) {
    //   history.push("/" + location.countryCode + "/login");
    // }
    if (id) {
      this.getuserDetails(id);
      this.props.getAddress(id);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user && this.props.user._id) {
      this.getuserDetails(this.props.user._id);
      this.props.getAddress(this.props.user._id);
    }
  }
  updateChckBoxafteruserUpdate() {
    const { user } = this.props;
    this.getuserDetails(user._id);
  }
  getuserDetails(_id) {
    getUserDetails(_id)
      .then((res) => {
        const rep = res.data;
        if (rep.user) {
          this.setState(
            {
              userDetailsRes: rep.user,
              SpinnerToggle: false,
            },
            () => {
              document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
          );
        } else {
        }
      })
      .catch((error) => {});
  }

  render() {
    const {
      location,
      address: { address },
      className,
    } = this.props;
    const { formOpen } = this.state;
    console.log({ address });
    return (
      <Layout headerTheme="black" fixed={true}>
        <div
          className={classNames('my-order', {
            [className]: className,
          })}
        >
          {this.state.SpinnerToggle && <Loader />}
          <div className="container-fluid">
            <div className="my-order__heading">
              <h1>My Account</h1>
            </div>
          </div>
          <div className="my-order__wrapper">
            <div className="container-fluid">
              <div className="row">
                <MyAccountSidebar activeLink="PAYMENT METHOD" />

                <div className="col-lg-10 ">
                  <h2 className="my-order-header">Your addresses</h2>
                  <Card className="panel-section my-order__panel">
                    <CardBody className="my-order__card-body">
                      <div className="my-order__detail">
                        <div className="my-order__alert pr-5"></div>
                        <TransitionGroup className="row card-title">
                          <div className="col-md-10">
                            {address &&
                              address.map((el, key) => (
                                <CSSTransition
                                  key={key}
                                  timeout={300}
                                  classNames="transition-item3"
                                  style={{ padding: '0px' }}
                                >
                                  <SingleAddress
                                    history={this.props.history}
                                    address={el}
                                  />
                                </CSSTransition>
                              ))}
                          </div>
                        </TransitionGroup>
                      </div>
                      <CardSubtitle className="my-order__subtitle">
                        <CSSTransition
                          timeout={300}
                          className="my-order__transition-item3 col-md-12 mb-3"
                        >
                          <Card className="panel-section my-order__panel h-100">
                            <CardBody className="my-order__card-body">
                              <div className="h-100 d-flex my-order__add-item ">
                                <a
                                  onClick={() => {
                                    formOpen
                                      ? this.setState({ formOpen: false })
                                      : this.setState({ formOpen: true });
                                  }}
                                >
                                  <h4 className="my-order__add-sm">
                                    {' '}
                                    <Icon
                                      style={{ color: '#000000' }}
                                      size={14}
                                      icon={plus}
                                    />{' '}
                                    Add Address
                                  </h4>
                                </a>
                              </div>
                            </CardBody>
                          </Card>
                        </CSSTransition>
                        {formOpen && <AddAddressForm />}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  location: state.location,
  address: state.address,
});
export default connect(mapStateToProps, {
  getAddress,
})(onlyLogin(ListAddress));
