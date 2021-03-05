import React, { Component } from "react";
import classNames from "classnames";

class Input extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      isFocus: false
    };
  }
  onFocus() {
    this.setState({
      isFocus: true
    });
  }
  onBlur() {
    this.setState({
      isFocus: false
    });
  }
  onChange(e) {
    const { onChange } = this.props;
    if (typeof onChange === "function") onChange(e);
  }
  render() {
    const {
      errorMsg,
      isError,
      name,
      value,
      dataPattern,
      dataValidate,
      type,
      label,
      classToBe,
      maxLength,
      dataMatch,
      placeholder,
      col
    } = this.props;
    const { isFocus } = this.state;
    return (
      <div
        className={classNames(`col-${col}  has-input`, {
          "has-error": isError && !isFocus
        })}
      >
        <label>{label}</label>
        <input
          id={name}
          value={value}
          placeholder={placeholder}
          data-validate={dataValidate}
          onChange={this.onChange}
          type={type ? type : "text"}
          name={name}
          data-pattern={dataPattern}
          maxLength={maxLength}
          onFocus={this.onFocus}
          data-match={dataMatch}
          onBlur={this.onBlur}
          className={classToBe}
        />
        {isError && !isFocus && <p className="error">{errorMsg}</p>}
      </div>
    );
  }
}
Input.defaultProps = {
  col: 12
}
export default Input;
