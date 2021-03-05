import React, { Component } from "react";
import { connect } from "react-redux";
import dynamic from "next/dynamic";
const Loader = dynamic(() => import("../Loader"), {
  ssr: false,
});
const MyAccountSidebar = dynamic(() => import("../MyAccountSidebar"), {
  ssr: false,
});
const SingleAddress = dynamic(() => import("./singleAddress"), {
  ssr: false,
});
import { getAddress } from "../../redux/actions";
import SingleAddress from "./singleAddress";
import Link from 'next/link'
import classNames from "classnames";

import {
  Card,
  CardBody
} from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ic_library_add } from "react-icons-kit/md/ic_library_add";
import Icon from "react-icons-kit";
class ListAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpinnerToggle: false
    };
  }
  componentDidMount() {
    const {
      user: { _id: id },
      history,
      location
    } = this.props;
    if (!id) {
      history.push("/" + location.countryCode + "/login");
    }
    if (id) {
      this.getuserDetails(id);
      this.props.getAddress(id);
    }
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }
  updateChckBoxafteruserUpdate() {
    const { user } = this.props;
    this.getuserDetails(user._id);
  }

  // getuserDetails(_id) {
  //   getSingleUserApi(_id)
  //     .then(res => {
  //       rep = res.data
  //       if (rep.user) {
  //         this.setState(
  //           {
  //             userDetailsRes: rep.user,
  //             SpinnerToggle: false
  //           },
  //           () => {
  //             document.body.scrollTop = document.documentElement.scrollTop = 0;
  //           }
  //         );
  //       } else {
  //       }
  //     })
  //     .catch(error => { });
  // }

  render() {
    const {
      location,
      address: { address },
      className
    } = this.props;
    return (
      <div
        className={classNames("", {
          [className]: className
        })}
      >
        {this.state.SpinnerToggle && <Loader />}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 ">
              <MyAccountSidebar activeLink="PAYMENT METHOD" />
            </div>
            <div className="col-lg-9 ">
              <h3 className="">Your Addresses</h3>
              <Card className="panel-section">
                <CardBody>
                  <TransitionGroup className="row">
                    <CSSTransition
                      timeout={300}
                      className="transition-item3 col-md-4 col-sm-6 col-xs-12 mb-3"
                    >
                      <Card className="panel-section h-100">
                        <CardBody>
                          <div className="h-100 d-flex flex-column justify-content-center">
                            <Link
                              href={
                                "/my-address-add"
                              }
                            >
                              <a>
                                <center>
                                  <Icon size={64} icon={ic_library_add} />
                                </center>
                              </a>
                            </Link>
                            <h4 className="text-center">Add Address</h4>
                          </div>
                        </CardBody>
                      </Card>
                    </CSSTransition>
                    {address &&
                      address.map((el, key) => (
                        <CSSTransition
                          key={key}
                          timeout={300}
                          classNames="transition-item3"
                        >
                          <SingleAddress
                            history={this.props.history}
                            address={el}
                          />
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  address: state.address
});
export default connect(
  mapStateToProps,
  {
    getAddress
  }
)(ListAddress);
