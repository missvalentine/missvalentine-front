import dynamic from "next/dynamic";
import { Form, Icon, Row } from "antd";
const Heading = dynamic(() => import("../Heading"));
const Input = dynamic(() => import("../form-components/Input"));
import { connect } from "react-redux";
const Button = dynamic(() => import("../form-components/Button"));
import { loginUser, registerUser } from "../../services/api";
import msgStrings from "../../constants/msgStrings";
import { toggleRegBar, drawerToDisplay } from "../../redux/actions/drawers";
import { setUser } from "../../redux/actions/user";
import regex from "../../services/helpers/regex";
import reactComponentDebounce from "react-component-debounce";
import { library } from "@fortawesome/fontawesome-svg-core";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
library.add(faFacebookF);

const DebounceInput = reactComponentDebounce({
  valuePropName: "value",
  triggerMs: 1000,
})(Input);

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: null,
      isAlreadyUser: false,
      isSignedIn:false
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       // console.log("Received values of form: ", values);
        const { email, password } = values;
        this.setState({
          isLoading: true,
          error: null,
        });
        loginUser({
          email,
          password,
        })
          .then((res) => {
            this.setState({
              isLoading: false,
            });
          //  console.log({ res });
            if (res.status === 200) {
              if (res.data.status) {
                this.props.setUser(res.data.user);
                this.props.toggleRegBar();
              } else {
                const { error, message } = res.data;
                if (message) {
                  this.setState({
                    error:
                      message === "User not found"
                        ? msgStrings.LOGIN_ERROR
                        : message,
                  });
                } else {
                  this.setState({
                    error: error,
                  });
                }
              }
            } else {
            }
          })
          .catch((err) => {
            console.log({ err });
            this.setState({
              isLoading: false,
            });
          });
      }
    });
  };

  responseGoogle = (response) => {
    let socialData;

    let data = { ...response };
    console.log(data);
    if (data.googleId) {
      const { email, familyName, givenName, googleId } = data.profileObj;
      socialData = {
        google: googleId,
        email,
        firstname: givenName,
        lastname: familyName,
        username: email.split("@")[0],
      };
    }
    if (response.graphDomain == "facebook") {
      let { email, id, name } = response;
      name = name.split(" ");
      socialData = {
        facebook: id,
        email,
        username: email.split("@")[0],
      };
    }
   // console.log(socialData);
    loginUser({ ...socialData })
      .then((res) => {
     //   console.log(res);

    //    console.log({ res });
        if (res.status === 200) {
          if (res.data.status) {
            this.props.setUser(res.data.user);
            this.props.toggleRegBar();
           // this.props.closeDrawer();
            this.setState({
              isLoading: false,
            });
          } else {
            const { error, message } = res.data;
            if (message === "User not found") {
              registerUser({ ...socialData })
                .then((res) => {
               //   console.log(res);
                  this.setState({
                    isLoading: false,
                  });
                //  console.log({ res });
                  if (res.status === 200) {
                    if (res.data.status) {
                      this.props.setUser(res.data.user);
                      this.props.toggleRegBar();
                    } else {
                      const { error } = res.data;
                      if (error.endsWith("is already taken")) {
                        this.setState({
                          isAlreadyUser: true,
                        });
                      } else {
                        this.setState({
                          error: res.data.error,
                        });
                      }
                    }
                  } else {
                    this.setState({
                      error: "something wrong",
                    });
                  }
                })
                .catch((err) => {
                  console.log({ err });
                  this.setState({
                    isLoading: false,
                    error: "something wrong",
                  });
                });
            } else {
              this.setState({
                error: error,
              });
            }
          }
        } else {
        }
      })
      .catch((err) => {
        console.log({ err });
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
   // console.log(this.props);
    const {
      drawerToDisplay,
      form: { getFieldDecorator },
    } = this.props;
    const { isLoading, error, isAlreadyUser,isSignedIn } = this.state;

    let finalClass = "c-login";
    if (this.props.consult) {
      finalClass += " c-userDetails";
    }

    return (
      <div className={finalClass}>
        <Heading parentClass="c-login" className="heading" versions={["dark"]}>
          {isAlreadyUser ? (
            <span>
              Looks like you already
              <br />
              have an account
            </span>
          ) : (
            "welcome back!"
          )}
        </Heading>
        {!isAlreadyUser && (
          <p className="c-login__info">Please login to your account</p>
        )}

        {!isAlreadyUser && (
          <Form
            onSubmit={this.handleSubmit}
            className="c-ant-from c-login__form"
          >
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  { required: true, message: "Please input your e-mail!" },
                  {
                    max: 40,
                    message: "You can't use more than 40 characters.",
                  },
                  {
                    pattern: regex.email,
                    message: "Please enter a valid E-mail!",
                  },
                ],
              })(
                <DebounceInput
                  style={{
                    padding: "0px",
                    fontSize: "16px",
                    fontFamily: "futuraBT-book",
                    marginBottom: "20px",
                  }}
                  versions={["light"]}
                  parentClass="c-login"
                  label="E-mail"
                  className="input"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your password!" },
                  {
                    max: 20,
                    message: "You can't use more than 20 characters.",
                  },
                ],
              })(
                <DebounceInput
                  style={{
                    padding: "0px",
                    fontSize: "16px",
                    fontFamily: "futuraBT-book",
                    width: "80%",
                  }}
                  type="password"
                  parentClass="c-login"
                  versions={["light"]}
                  label="Password"
                  className="input"
                />
              )}
            </Form.Item>
            <div className="c-login__forget">
              <span
                onClick={() => {
                  drawerToDisplay("forget");
                }}
                className="c-login__link"
              >
                forgot Password?
              </span>
            </div>
            <div className="c-login__error-block">
              {isLoading && (
                <Icon
                  type="loading"
                  className="c-login__spinner c-spinner"
                  style={{ fontSize: 24 }}
                  spin
                />
              )}
              {error && (
                <p className="c-login__error">Invalid username or password</p>
              )}
            </div>
            <div>
              <p className="c-login__inst">
                Don't have an account yet,{" "}
                <span
                  onClick={() => {
                    drawerToDisplay("register");
                  }}
                  className="c-login__link"
                  style={{
                    fontFamily: "futuraBT-medium",
                    letterSpacing: "0.5px",
                  }}
                >
                  REGISTER
                </span>
              </p>
            </div>
            <div
              className="row"
              style={{ justifyContent: "space-around", marginTop: "25px" }}
            >
              <Button theme="dark" disabled={isLoading}>
                Login
              </Button>
            </div>
          </Form>
        )}
        <br />

        <Row justify="center">
          <p className="c-login__inst">
            Login with
            <span
              // onClick={()=> {
              //     drawerToDisplay("register")
              // }}
              style={{ marginLeft: "8px", marginRight: "8px" }}
              className="c-login__link"
            >
              <GoogleLogin
                clientId="523594328071-mcppgl821vmufbh7ts570533mq7bjc4o.apps.googleusercontent.com"
                buttonText=""
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                cookiePolicy={"single_host_origin"}
                isSignedIn={isSignedIn}
                render={(renderProps) => (
                  <button
                  onClick={()=>{
                    this.setState({isSignedIn:true});
                    renderProps.onClick();
                  }}
                    className="social-button"
                  >
                    {/* <GoogleOutlined
                  style={{ fontSize: "25px", verticalAlign: "0.1em"}}
                /> */}
                    <LazyLoadImage
                    
                      src="/images/google.svg"
                      style={{ width: "30px" }}
                    />
                  </button>
                )}
                theme="dark"
              />
            </span>
            or
            <FacebookLogin
              appId="379779383176561"
              //autoLoad={true}
              textButton=""
              fields="name,email,picture"
              callback={this.responseGoogle}
              cssClass="social-button"
              icon={
                <span
                  style={{ marginLeft: "9px", marginRight: "8px" }}
                  className="c-login__link"
                >
                  {/* <FontAwesomeIcon icon={["fab", "facebook-f"]} /> */}
                  <LazyLoadImage
                    src="/images/facebook.svg"
                    style={{ width: "30px" }}
                  />
                </span>
              }
            />
          </p>
        </Row>
        {isAlreadyUser && (
          <div className="c-login__no-form-wrapper">
            <br />
            <br />
            <br />
            <br />
            <p className="c-login__inst">
              You can login from{" "}
              <span
                onClick={() => {
                  drawerToDisplay("login");
                }}
                className="c-login__link"
              >
                HERE
              </span>
            </p>
          </div>
        )}
      </div>
    );
  }
}

const Login = Form.create({ name: "login" })(LoginForm);
const mapActionToProps = {
  setUser,
  toggleRegBar,
  drawerToDisplay,
};
export default connect((state) => state, mapActionToProps)(Login);
