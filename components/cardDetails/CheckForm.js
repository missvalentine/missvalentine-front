import dynamic from "next/dynamic";
import React, { Component } from "react";
import { connect } from "react-redux";
import { setAPUser } from "../../redux/actions";
import { fieldValidation } from "../forms/validation";

const Input = dynamic(() => import("../form-components/Input.js"), {
  ssr: false,
});

import { Modal, ModalHeader } from "reactstrap";
import { ic_error_outline, ic_done, ic_clear } from "react-icons-kit/md/";
import Icon from "react-icons-kit";
import SelectMulti from "react-select";

import styles from "../../constants/styles";

const { selectStyle, colors, fonts } = styles;

const regExReplace = {
  name: /[^a-zA-Z]/g,
  fullName: /[^a-zA-Z ]/g,
  onlyNumber: /[^0-9]/g,
  email: /\s/g,
  zipcode: /[^a-zA-Z0-9 ]/g,
  fullname: /[^a-zA-Z ]/g,
};

const accountTypeOpt = [
  {
    label: "Checking",
    value: "checking",
  },
  {
    label: "Savings",
    value: "savings",
  },
  {
    label: "Business Checking",
    value: "businessChecking",
  },
];

const selectStyleSmall = {
  ...selectStyle,
  control: (styles, { isFocused, isSelected }) => ({
    ...styles,
    minHeight: "40px",
    height: "40px",
    border: `1px solid transparent`,
    borderRadius: "0",
    backgroundColor: "transparent",
    paddingLeft: "0.4889rem",
    boxShadow: isFocused ? 0 : 0,
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    "&:hover": {
      border: `1px solid transparent`,
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    fontFamily: fonts.mainfont,
    color: colors.dark,
    fontWeight: "normal",
    lineHeight: "40px",
    fontSize: "14px",
  }),
};

import {
  accountNumberMissingMsg,
  accountNumberValidMsg,
  accountHolderMissingMsg,
  accountHolderNameValidMsg,
  accountNumberConfirmMissingMsg,
  accountNumberConfirmValidMsg,
  routingTypeValidMsg,
  routingTypeMissingMsg,
  // drivingLicenseMissingErr,
  // drivingLicenseValidMsg
} from "../../constants/constantMessage";
import { addCardAuthorize, clearErrors } from "../../redux/actions";
class CheckForm extends Component {
  constructor(props) {
    super(props);

    this.onTextChange = this.onTextChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.fieldValidation = this.fieldValidation.bind(this);

    this.state = this.initialState(props);
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {
    if (this.state.isSubmitted) {
      if (
        nextProps.cards.cards !== this.props.cards.cards &&
        !nextProps.errors.cards
      ) {
        this.clearOnSuccess();
      }
    }
  }
  componentWillUnmount() {
    this.props.clearErrors();
  }
  initialState = (props) => ({
    ambassador: props.ambassadoruser || {},
    ambassador_data: props.ambassadoruser || {},
    accountNumber: "",
    accountNumber_err: null,
    accountNumber_errMsg: "",
    accountNumberConfirm: "",
    accountNumberConfirm_err: null,
    accountNumberConfirm_errMsg: "",
    paymentMethod: "Direct Deposit",
    accName: "",
    accName_err: null,
    accName_errMsg: "",
    routingType: "",
    bankName: "",
    bankName_err: null,
    bankName_errMsg: "",
    accType: "Saving",
    minPayAmt: "200.00",
    currency: "USD",
    showModal: false,
    accountType: accountTypeOpt[0],
    modalData: {
      title: "",
      msg: "",
    },
    isSubmitted: false,
  });
  onTextChange = (e) => {
    const { value, name } = e.target;
    let type = "";
    if (e.target.attributes["data-validate"])
      type = e.target.attributes["data-validate"].value;

    let pattern = null;
    if (e.target.attributes["data-pattern"])
      pattern = e.target.attributes["data-pattern"].value;

    let match = null;
    if (e.target.attributes["data-match"])
      match = e.target.attributes["data-match"].value;

    let newValue = value;

    if (pattern) {
      newValue = value.replace(regExReplace[pattern], "");
    }

    this.setState(
      {
        [name]: newValue,
      },
      () => {
        this.fieldValidation(name, type, match);
      }
    );
  };
  onSelectChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  fieldValidation(field, type, match) {
    const { isError, errorMsg } = fieldValidation(
      this.state[field],
      type,
      match
    );

    this.setState({
      [field + "_err"]: isError,
      [field + "_errMsg"]: errorMsg,
    });
  }

  onSubmitSuccess = () => {
    const { onSubmitSuccess } = this.props;
    if (typeof onSubmitSuccess === "function") {
      onSubmitSuccess();
    }
  };
  changeAccountType = (accountType) => {
    this.setState({ accountType });
  };
  clearOnSuccess = () => {
    if (this.props.clearOnSuccess) {
      this.setState(
        {
          ...this.initialState(this.props),
        },
        this.onSubmitSuccess
      );
    }
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const validateArr = [
      {
        name: "accName",
        check: "required",
      },
      {
        name: "routingType",
        check: "required, number, routingNumber",
      },
      {
        name: "accountNumber",
        check: "required, number",
      },
      {
        name: "accountNumberConfirm",
        check: "required, number, repassword",
        match: "accountNumber",
      },
      // {
      //   name: "drivingLicense",
      //   check: "required"
      // }
    ];
    await validateArr.map((el) =>
      this.fieldValidation(el.name, el.check, el.match && this.state[el.match])
    );

    if (
      validateArr.every((el) => {
        if (this.state[el.name + "_err"] === false) return true;

        return false;
      })
    ) {
      this.setState({
        isSubmitted: true,
      });
      const { routingType, accountNumber, accName, accountType } = this.state;
      const bodyData = {
        accountType: accountType.value,
        routingNumber: routingType,
        accountNumber,
        nameOnAccount: accName,
      };
      const oldCards = this.props.cards.cards;
      this.props.addCardAuthorize({
        bank: bodyData,
        user: this.props.user,
        oldCards,
      });
    }
    // await console.log("Working");
  };
  render() {
    const {
      accountNumber,
      accName,
      routingType,
      accountNumber_err,
      accountNumber_errMsg,
      accName_err,
      accName_errMsg,
      showModal,
      modalData,
      accountNumberConfirm,
      accountNumberConfirm_errMsg,
      accountNumberConfirm_err,
      routingType_err,
      routingType_errMsg,
      // drivingLicense,
      // drivingLicense_err,
      // drivingLicense_errMsg,
      // dlState
      accountType,
    } = this.state;
    return (
      <div className="container">
        <div className="">
          <div className="">
            <div className="inside-form Larger ">
              <h3
                className="product-title"
                style={{ marginBottom: "20px", marginTop: "20px" }}
              ></h3>
              {/* <p>
                You must submit Tax Information to be able to edit Payment
                Information or to change Payee/Account Holder's Name.
              </p> */}
              {/* <div className="w100 d-block pt-3 pb-3">
                <img
                  src="/images/checkHelp.png"
                  alt="routing number help"
                  className="img-fluid"
                />
              </div> */}
              <form onSubmit={this.onSubmit}>
                <div className="row frm-details checking-account-details">
                  <div className="col-md-12 mb-4">
                    <Input
                      label="Name on Account*"
                      name="accName"
                      value={accName}
                      onChange={this.onTextChange}
                      dataValidate={["required"]}
                      dataPattern=""
                      maxLength="40"
                      wrapperClass=" "
                      isError={accName_err}
                      errorMsg={
                        accName_errMsg && accName_errMsg === "can't be empty"
                          ? accountHolderMissingMsg
                          : accountHolderNameValidMsg
                      }
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <div className="">
                      <div className="has-input">
                        {/* <label>Account Type*</label> */}
                      </div>
                      <SelectMulti
                        id="accountType"
                        styles={selectStyleSmall}
                        value={accountType}
                        isMulti={false}
                        placeholder="Account Type"
                        onChange={this.changeAccountType}
                        options={accountTypeOpt}
                        className="my-account__input ant-input c-input__input--important "
                        style={{ fontFamily: "futuraBT-book", padding: "0px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 mb-4">
                    <Input
                      label="Bank Routing Number*"
                      name="routingType"
                      value={routingType}
                      dataPattern="onlyNumber"
                      placeholder="9 digits"
                      dataValidate={["number", "required", "routingNumber"]}
                      isError={routingType_err}
                      onChange={this.onTextChange}
                      maxLength={9}
                      wrapperClass=""
                      errorMsg={
                        routingType_errMsg &&
                        routingType_errMsg === "can't be empty"
                          ? routingTypeMissingMsg
                          : routingTypeValidMsg
                      }
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <Input
                      label="Checking Account Number*"
                      name="accountNumber"
                      value={accountNumber}
                      dataPattern="onlyNumber"
                      placeholder="Up to 17 digits"
                      dataValidate={["number", "required"]}
                      isError={accountNumber_err}
                      maxLength={17}
                      wrapperClass=""
                      onChange={this.onTextChange}
                      errorMsg={
                        accountNumber_errMsg &&
                        accountNumber_errMsg === "can't be empty"
                          ? accountNumberMissingMsg
                          : accountNumberValidMsg
                      }
                    />
                  </div>
                  <div className="col-md-12 mb-4">
                    <Input
                      label="Re-enter Checking Account Number*"
                      name="accountNumberConfirm"
                      value={accountNumberConfirm}
                      dataPattern="onlyNumber"
                      placeholder="Up to 17 digits"
                      dataValidate={["number", "required", "repassword"]}
                      isError={accountNumberConfirm_err}
                      maxLength={17}
                      onChange={this.onTextChange}
                      dataMatch={accountNumber}
                      wrapperClass=""
                      errorMsg={
                        accountNumberConfirm_errMsg &&
                        accountNumberConfirm_err === "can't be empty"
                          ? accountNumberConfirmMissingMsg
                          : accountNumberConfirmValidMsg
                      }
                    />
                  </div>
                </div>

                {/* <div className="row frm-details">
                  <div className="col-md-6">
                    <Input
                      label="Driver's License Number*"
                      name="drivingLicense"
                      value={drivingLicense}
                      dataPattern="onlyNumber"
                      dataValidate={["required"]}
                      isError={drivingLicense_err}
                      onChange={this.onTextChange}
                      errorMsg={
                        drivingLicense_errMsg &&
                        drivingLicense_errMsg === "can't be empty"
                          ? drivingLicenseMissingErr
                          : drivingLicenseValidMsg
                      }
                    />
                  </div>
                  <div className="col-md-6">
                    <div
                      className={classNames("has-input", {
                        "has-error": false
                      })}
                    >
                      <label> State*</label>
                      <select
                        value={dlState}
                        name="dlState"
                        onChange={this.onSelectChange}
                        className="form-control"
                      >
                        {stateArr.map((el, index) => (
                          <option key={index} value={el}>
                            {el}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div> */}

                <br />

                <div>
                  {this.props.errors &&
                    this.props.errors.cards &&
                    this.props.errors.cards.map((el, index) => (
                      <div key={index} className="alert alert-danger mb-2">
                        <p className="error mb-0"> {el}</p>
                      </div>
                    ))}
                </div>
                <div
                  className="row frm-details"
                  style={{ justifyContent: "center" }}
                >
                  <div className=" has-input">
                    <button className="btn btn3 c-btn--dark c-btn">
                      {" "}
                      Save account
                    </button>
                  </div>
                  <br />
                </div>
              </form>
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          toggle={this.modalDismis}
          className={"full-modal"}
        >
          <ModalHeader toggle={this.modalDismis}>{modalData.title}</ModalHeader>
          <div className="Modal-body center-modal">
            <div className="modal-inner">
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
                  <Icon className="popup-alert-icon" size={64} icon={ic_done} />
                )}
                <p className="text-center title-80 p-3">{modalData.msg}</p>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  location: state.location,
  user: state.user,
  cards: state.cards,
  errors: state.errors,
});
export default connect(mapStateToProps, {
  setAPUser,
  addCardAuthorize,
  clearErrors,
})(CheckForm);
