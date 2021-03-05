import dynamic from "next/dynamic";
import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import {
  loginMsg,
  loginHeading,
  userNotActiveMsg,
  emailMissingErrMsg,
  emailNotValidErrMsg,
  passwordMissingErrMsg,
  passwordShortErrMsg,
  userNotFound,
  passIncorrect,
  loginFailMSg,
  passwordMatchErrMsg,
} from "../../constants/constantMessage";

import { warning } from "react-icons-kit/fa/";

import { isAlpha, isEmail, isEmpty, isMobilePhone, isNumeric } from "validator";
import classNames from "classnames";
import waterfall from "async-waterfall";
import { ambassadorPortalLogin } from "../../services/api";
import { setAPUser } from "../../redux/actions/";
import FadeTransition from "../../services/extra/FadeTransition";
const ErrorBlock = dynamic(() => import("../ErrorBlock"), {
  ssr: false,
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.handelTextChange = this.handelTextChange.bind(this);
    this.submitRegistration = this.submitRegistration.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      login_email: "",
      login_email_err: null,
      login_email_errMsg: "",
      login_password: "",
      login_password_err: null,
      login_password_errMsg: "",
      showModal: false,
      isLoading: false,
      isloginOrNot: false,
      wishList: "",
      modalData: {
        title: "",
        msg: "",
      },
      focusName: [],
    };
  }
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  handelTextChange(e) {
    const id = e.target.id;
    let type = [];
    let match = null;
    if (e.target.attributes["data-validate"])
      type = e.target.attributes["data-validate"].value;
    if (e.target.attributes["data-match"])
      match = e.target.attributes["data-match"].value;
    this.setState(
      {
        [e.target.id]: e.target.value,
      },
      () => {
        this.fieldVaidation(id, type, match);
      }
    );
  }
  toggleModal() {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
    }));
  }

  setFocus(e) {
    const name = e.target.name + "_err";
    this.setState(
      (prevState) => ({
        focusName: [...prevState.focusName, name],
      }),
      () => {}
    );
  }
  unSetFocus(e) {
    // unSetFocus //setFocus
    const { id } = e.target;

    let type = [];
    let match = null;

    if (e.target.attributes["data-validate"])
      type = e.target.attributes["data-validate"].value;
    if (e.target.attributes["data-match"])
      match = e.target.attributes["data-match"].value;

    const name = id + "_err";
    this.setState(
      (prevState) => ({
        focusName: prevState.focusName.filter((el) => el !== name),
      }),
      () => {
        this.fieldVaidation(id, type, match);
      }
    );
  }

  submitRegistration(e) {
    e.preventDefault();
    const { location, history } = this.props;
    const { login_email, login_password } = this.state;
    waterfall([
      (done) => {
        this.fieldVaidation("login_email", "required,email");
        this.fieldVaidation("login_password", "required");
        return done();
      },
      (done) => {
        const { login_email_err, login_password_err } = this.state;
        if (!login_email_err && !login_password_err) {
          const email = login_email;
          const password = login_password;
          ambassadorPortalLogin(email, password)
            .then((res) => {
              resJson = res.data;
              if (resJson.status) {
                this.setState({
                  isLoading: true,
                  showModal: true,
                  modalData: {
                    title: loginHeading,
                    msg: loginMsg,
                  },
                });
                this.props.setAPUser(resJson.user);
                setTimeout(() => {
                  history.push(
                    "/" + location.countryCode + "/ambassador-portal/"
                  );
                }, 2000);
              } else if (resJson.messages) {
                if (resJson.messages.length > 1) {
                  this.setState({
                    isLoading: true,
                    showModal: true,
                    modalData: {
                      title: "Error",
                      msg: resJson.messages[0].msg,
                    },
                  });
                } else {
                  this.setState({
                    isLoading: true,
                    showModal: true,
                    modalData: {
                      title: "Error",
                      msg: resJson.messages.msg,
                    },
                  });
                }
              } else if (resJson.error) {
                this.setState({
                  isLoading: true,
                  showModal: true,
                  modalData: {
                    title: "Error",
                    msg: resJson.error,
                  },
                });
              } else {
                if (resJson.message === "User not active") {
                  this.setState({
                    isLoading: true,
                    showModal: true,
                    modalData: {
                      title: "Error",
                      msg: userNotActiveMsg,
                    },
                  });
                } else {
                  var msg = "";
                  switch (resJson.message) {
                    case "Password Incorrect":
                      msg = passIncorrect;
                      break;
                    case "User not found":
                      msg = userNotFound;
                      break;
                    default:
                      msg = loginFailMSg;
                  }
                  this.setState({
                    isLoading: true,
                    showModal: true,
                    modalData: {
                      title: "Error",
                      msg: msg,
                    },
                  });
                }
              }
            })
            .catch((err) => {
              this.setState({
                isLoading: false,
              });
            });
        }
      },
    ]);
  }
  fieldVaidation(field, type, match) {
    const typeArr = type.split(",");
    if (typeArr.includes("required")) {
      if (!isEmpty(this.state[field])) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: "can't be empty",
        });
        return;
      }
    }
    if (typeArr.includes("name")) {
      if (isAlpha(this.state[field])) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: "Only Alphabets",
        });
        return;
      }
    }
    if (typeArr.includes("email")) {
      if (isEmail(this.state[field])) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: "Email Not Valid",
        });
        return;
      }
    }
    if (typeArr.includes("phone")) {
      if (isMobilePhone(this.state[field])) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: "Not Valid",
        });
        return;
      }
    }
    if (typeArr.includes("zipcode")) {
      // if(isPostalCode(this.state[field])){
      if (isNumeric(this.state[field])) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: "Not Valid",
        });
        return;
      }
    }
    if (typeArr.includes("password")) {
      // if(isPostalCode(this.state[field])){
      if (this.state[field].length > 5) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: passwordShortErrMsg,
        });
        return;
      }
    }
    if (typeArr.includes("repassword")) {
      // if(isPostalCode(this.state[field])){
      if (this.state[field] === match) {
        this.setState({
          [field + "_err"]: false,
          [field + "_errMsg"]: "",
        });
      } else {
        this.setState({
          [field + "_err"]: true,
          [field + "_errMsg"]: passwordMatchErrMsg,
        });
        return;
      }
    }
  }

  render() {
    const {
      login_email,
      login_email_err,
      login_email_errMsg,
      login_password,
      login_password_err,
      login_password_errMsg,
      modalData,
      showModal,
      // isLoading,
      focusName,
    } = this.state;
    const { location, className } = this.props;
    return (
      <div
        className={classNames("", {
          [className]: className,
        })}
      >
        <div className="container">
          <div className="row justify-content-center Regular ">
            <div className="w-100 ">
              <FadeTransition unmountOnExit={true} in={showModal}>
                <ErrorBlock
                  icon={warning}
                  msg={modalData.msg}
                  title={modalData.title}
                />
              </FadeTransition>
            </div>
            <div className="col-lg-5  p-md-5 p-3 col-md-6 register shadowBoxBackground">
              <h1 className="title-80">Log in to Ambassador Portal</h1>
              <br />

              <div className="inside-form Larger ">
                <form onSubmit={this.submitRegistration}>
                  <div
                    className={classNames("has-input", {
                      "has-error":
                        login_email_err &&
                        !focusName.includes("login_email_err"),
                    })}
                  >
                    <label>Email:</label>
                    <input
                      id="login_email"
                      name="login_email"
                      value={login_email}
                      onChange={this.handelTextChange}
                      type="text"
                      data-validate={["email", "required"]}
                      onFocus={(e) => this.setFocus(e)}
                      onBlur={(e) => this.unSetFocus(e)}
                    />
                    {login_email_err &&
                      !focusName.includes("login_email_err") && (
                        <p className="error">
                          {login_email_errMsg &&
                          login_email_errMsg === "can't be empty"
                            ? emailMissingErrMsg
                            : emailNotValidErrMsg}
                        </p>
                      )}
                  </div>
                  <div
                    className={classNames("has-input", {
                      "has-error":
                        login_password_err &&
                        !focusName.includes("login_password_err"),
                    })}
                  >
                    <label>Password:</label>
                    <input
                      id="login_password"
                      name="login_password"
                      value={login_password}
                      onChange={this.handelTextChange}
                      type="password"
                      data-validate={["required"]}
                      onFocus={(e) => this.setFocus(e)}
                      onBlur={(e) => this.unSetFocus(e)}
                      style={{ padding: "0px" }}
                    />
                    {login_password_err &&
                      !focusName.includes("login_password_err") && (
                        <p className="error">
                          {login_password_errMsg &&
                          login_password_errMsg === "can't be empty"
                            ? passwordMissingErrMsg
                            : login_password_errMsg}
                        </p>
                      )}
                  </div>
                  <br />
                  <div>
                    <button type="submit" className="btn btn-main btn7">
                      Login
                    </button>
                  </div>
                  <div className="row">
                    <ul className="login-variation-ul p-0 d-flex w-100 justify-content-between flex-wrap ">
                      <li>
                        <Link href={`/ambassador-portal/registration`}>
                          <a>Register</a>
                        </Link>
                      </li>
                      <li>
                        <Link href={`/ambassador-portal/forgot-password`}>
                          <a>Forgot your password ?</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal
          isOpen={showModal}
          toggle={this.toggleModal}
          className={"full-modal"}
        >
          <ModalHeader toggle={this.toggleModal}>{modalData.title}</ModalHeader>
          <div className="Modal-body center-modal">
            <div className="modal-dismiss" onClick={this.toggleModal}>
              <Icon icon={ic_clear} />
            </div>
            <div className="modal-inner">
              {isLoading && <div className="loader" />}
              {isLoading && (
                <div className="modal-content">
                  {modalData.title === "Error" ? (
                    <div style={{ color: "#EF233C", textAlign: "center" }}>
                      <Icon
                        className="popup-alert-icon"
                        size={64}
                        icon={ic_error_outline}
                      />
                    </div>
                  ) : (
                    <Icon
                      className="popup-alert-icon"
                      size={64}
                      icon={ic_done}
                    />
                  )}
                  <p className="text-center title-80 p-3">{modalData.msg}</p>
                </div>
              )}
            </div>
          </div>
        </Modal> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  location: state.location,
});

export default connect(mapStateToProps, { setAPUser })(Login);
