import dynamic from 'next/dynamic'
import { Form, Spin, Icon } from "antd";;
const Heading = dynamic(() => import("../Heading"));;
const Input = dynamic(() => import("../form-components/Input"));
import { connect } from "react-redux";;
const Button = dynamic(() => import("../form-components/Button"));
import { forgotPassword } from "../../services/api";
import { drawerToDisplay, toggleRegBar } from "../../redux/actions/drawers";
import { setUser } from "../../redux/actions/user";
import regex from "../../services/helpers/regex";
import { sendEmailMsg } from "../../constants/constantMessage";
import reactComponentDebounce from "react-component-debounce";

const DebounceInput = reactComponentDebounce({
  valuePropName: "value",
  triggerMs: 1000,
})(Input);

class ForgetForm extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      error: null,
      isAlreadyUser: false,
      mailSent: false,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const { email, password } = values;
        this.setState({
          isLoading: true,
          error: null,
        });
        forgotPassword({
          email,firststep:1
        })
          .then((res) => {
            this.setState({
              isLoading: false,
            });
            if (res.status === 200) {
              if (res.data.status || res.data.success) {
                this.setState({
                  mailSent: true,
                });
              } else {
                this.setState({
                  error: res.data.message || "User not found",
                });
              }
            } else {
              this.setState({
                error: "User not found",
              });
            }
          })
          .catch((err) => {
            console.log({ err });
            this.setState({
              isLoading: false,
              error: "User not found",
            });
          });
      }
    });
  };
  render() {
    const {
      drawerToDisplay,
      form: { getFieldDecorator },
    } = this.props;
    const { isLoading, error, isAlreadyUser, mailSent } = this.state;

    return (
      <div className="c-registration">
        <Heading parentClass="c-registration">
          {mailSent ? <> {sendEmailMsg}  <div>
              <p
                style={{ fontSize: "16px", fontFamily: "futuraBT-light",marginTop:"20px" }}
                className="c-registration__inst"
              >
                Back to
                <span
                  style={{ marginLeft: "5px" }}
                  onClick={() => {
                    drawerToDisplay("login");
                  }}
                  className="c-registration__link"
                >
                  LOGIN
                </span>
              </p>
            </div> </>: "Forgot Your Password?"}
        </Heading>
        {!mailSent && (
          <Heading
            className="c-registration__sub-heading"
            subHeading={true}
            versions={["dark"]}
            parentClass="c-registration"
          >
            Enter your email to reset your password
          </Heading>
        )}
        {!mailSent && (
          <Form
            onSubmit={this.handleSubmit}
            className="c-ant-from c-registration__form"
          >
            <Form.Item>
              {getFieldDecorator("email", {
                rules: [
                  {
                    max: 40,
                    message: "You can't use more than 40 characters.",
                  },
                  { required: true, message: "Please input your e-mail!" },

                  {
                    pattern: regex.email,
                    message: "Please enter a valid E-mail.",
                  },
                ],
              })(
                <DebounceInput
                  style={{
                    padding: "0px",
                    fontSize: "16px",
                    fontFamily: "futuraBT-book",
                    marginBottom: "15px",
                  }}
                  versions={["dark"]}
                  parentClass="c-registration"
                  label="E-mail"
                />
              )}
            </Form.Item>
            <div>
              <p
                style={{ fontSize: "16px", fontFamily: "futuraBT-light" }}
                className="c-registration__inst"
              >
                Back to
                <span
                  style={{ marginLeft: "5px" }}
                  onClick={() => {
                    drawerToDisplay("login");
                  }}
                  className="c-registration__link"
                >
                  LOGIN
                </span>
              </p>
            </div>
            <div className="c-registration__error-block">
              {isLoading && (
                <Icon
                  type="loading"
                  className="c-registration__spinner c-spinner"
                  style={{ fontSize: 24 }}
                  spin
                />
              )}
              {error && <p className="c-registration__error">{error}</p>}
            </div>
            <div className="row" style={{ justifyContent: "space-around" }}>
              <Button theme="dark" disabled={isLoading}>
                Reset Password
              </Button>
            </div>
          </Form>
        )}
        {/* {<div className="c-registration__no-form-wrapper">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                        <p className="c-registration__inst">Back to <span 
                            onClick={()=> {
                                drawerToDisplay("login")
                            }}
                            className="c-registration__link">Login</span></p>
                </div>} */}
      </div>
    );
  }
}

const ForgetPassword = Form.create({ name: "registration" })(ForgetForm);
const mapActionToProps = {
  drawerToDisplay,
  setUser,
  toggleRegBar,
};
export default connect((state) => state, mapActionToProps)(ForgetPassword);
