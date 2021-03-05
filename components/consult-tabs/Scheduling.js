import React, { Component } from "react";
import { Button, Radio as AntRadio } from "antd";

export default class Scheduling extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <form className="c-scheduling">
        <div className="container-fluid">
          <div className="consult-form">
            <p className="c-scheduling__para">
              How Long do you expect this consultation to go on for?
            </p>
            <div className="radio__wrapper">
              <AntRadio.Group
                onChange={(e) => {
                  this.props.radioChange(e, "scheduling");
                }}
                value={values.scheduling}
              >
                <AntRadio
                  className="c-contact-form__radio b-border-none"
                  value={15}
                >
                  <b>15 min</b>
                </AntRadio>
                <AntRadio
                  className="c-contact-form__radio b-border-none"
                  value={30}
                >
                  <b>30 min</b>
                </AntRadio>
              </AntRadio.Group>
            </div>
            <div className="c-personalDetails__btn-wrap">
              <Button
                className="c-btn c-btn--dark"
                onClick={this.back}
                versions={["outline", "block"]}
              >
                Back
              </Button>
              <Button
                className="c-btn c-btn--dark"
                onClick={this.saveAndContinue}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
