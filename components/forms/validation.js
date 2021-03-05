import { isAlpha, isEmail, isEmpty, isNumeric } from "validator";
import {
  emailNotValidErrMsg,
  zipValidErrMsg,
  passwordShortErrMsg,
  passwordMatchErrMsg,
  noRatingMsg,
  onlyDigits,
  routingTypeValidMsg
} from "../../constants/constantMessage";
import regex from "../../services/helpers/regex";
export const fieldValidation = (field = " ", type = " ", match) => {
  const typeArr = type.split(",");
  if (typeArr.includes("required")) {
    if (isEmpty(field.trim())) {
      return {
        isError: true,
        errorMsg: "can't be empty"
      };
    }
  }
  if (typeArr.includes("name")) {
    if (regex.name.test(field)) {
      return {
        isError: true,
        errorMsg: "Only Alphabets"
      };
    }
  }

  if (typeArr.includes("fullname")) {
    if (!regex.fullName.test(field)) {
      return {
        isError: true,
        errorMsg: "Only Alphabets"
      };
    }
  }
  if (typeArr.includes("email")) {
    if (!isEmail(field)) {
      return {
        isError: true,
        errorMsg: emailNotValidErrMsg
      };
    }
  }
  if (typeArr.includes("phone")) {
    // if (!isValidPhoneNumber(field)) {
    //   return {
    //     isError: true,
    //     errorMsg: phoneNotValidErrMsg
    //   };
    // }
  }
  if (typeArr.includes("zipcode")) {
    // if(isPostalCode(this.state[field])){
    if (!isNumeric(field)) {
      return {
        isError: true,
        errorMsg: zipValidErrMsg
      };
    }
  }
  if (typeArr.includes("repassword")) {
    if (field !== match) {
      return {
        isError: true,
        errorMsg: passwordMatchErrMsg
      };
    }
  }
  if (typeArr.includes("password")) {
    // var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{2,25}$/;
    if (field.length < 6) {
      return {
        isError: true,
        errorMsg: passwordShortErrMsg
      };
    }
    // if (!reg.test(field)) {
    //   return {
    //     isError: true,
    //     errorMsg: passwordValidErrMsg
    //   };
    // }
  }
  if (typeArr.includes("number")) {
    if (!isNumeric(field)) {
      return {
        isError: true,
        errorMsg: onlyDigits
      };
    }
  }
  if (typeArr.includes("routingNumber")) {
    if (!isNumeric(field) || field.length !== 9) {
      return {
        isError: true,
        errorMsg: routingTypeValidMsg
      };
    }
  }
  if (typeArr.includes("rating")) {
    if (field < 1) {
      return {
        isError: true,
        errorMsg: noRatingMsg
      };
    }
  }

  return {
    isError: false,
    errorMsg: ""
  };
};
